'use strict';

import { retrieveVulnerabilityInfo } from './retrieveVulnerabilityInfo.js';
import Vulnerability from './../../models/Vulnerability.js';
import VersionChangeEventVulnerabilityConnection from './../../models/VersionChangeEventVulnerabilityConnection.js';
import VersionChangeEvent from './../../models/VersionChangeEvent.js';
import semver from 'semver';

export async function enrichVersionChanges() {
  console.log('--- Enrichment process started ---');

  // 1. Load all version change events
  const events = await VersionChangeEvent.findAll();
  if (!events.length) {
    console.log('No version change events found.');
    return;
  }

  // 2. Extract unique libraries
  const libraries = [...new Set(events.map((e) => e.library).filter(Boolean))];
  console.log(`Processing ${libraries.length} unique libraries across ${events.length} events...`);

  // 3. Retrieve vulnerabilities
  let vulnerabilities = [];
  try {
    vulnerabilities = await retrieveVulnerabilityInfo(libraries);
    console.log(`Retrieved vulnerabilities for ${vulnerabilities.length} libraries.`);
  } catch (error) {
    console.error('Failed to retrieve vulnerabilities:', error.message);
    return;
  }

  if (!vulnerabilities.length) {
    console.log('No vulnerabilities found for provided libraries.');
    return;
  }

  // 4. Iterate per library and connect relevant vulnerabilities
  for (const { library, vulnerabilities: vulns } of vulnerabilities) {
    const relatedEvents = events.filter((e) => e.library === library);
    if (!relatedEvents.length) continue;

    console.log(`Enriching ${library} (${vulns.length} vulnerabilities, ${relatedEvents.length} events)...`);

    for (const v of vulns) {
      if (!v.vulnId) continue;

      const [storedVuln] = await Vulnerability.persist(v);

      for (const e of relatedEvents) {
        const wasVulnerable = isVersionAffected(e.oldVersion, v);
        const nowVulnerable = isVersionAffected(e.newVersion, v);

        // Skip if both states are same (no transition)
        if (wasVulnerable === nowVulnerable) continue;

        const relation = nowVulnerable ? 'AFFECTS' : 'FIXES';

        await VersionChangeEventVulnerabilityConnection.ensure(
          {
            relation,
            libraryVersionOld: e.oldVersion,
            libraryVersionNew: e.newVersion,
            createdAt: new Date().toISOString(),
          },
          { from: e, to: storedVuln },
        );
      }
    }
  }

  console.log('--- Enrichment completed ---');
}

/**
 * Determine if a given version falls within the vulnerable versions of a vulnerability.
 */
function isVersionAffected(version, vuln) {
  if (!version || !vuln.affectedVersions) return false;

  try {
    const affected = Array.isArray(vuln.affectedVersions) ? vuln.affectedVersions.filter((v) => typeof v === 'string') : [];

    if (!affected.length) return false;

    // Direct match first
    if (affected.includes(version)) return true;

    // Handle semver ranges
    for (const range of affected) {
      if (typeof range === 'string' && /[<>]=?/.test(range)) {
        try {
          if (semver.satisfies(version, range, { includePrerelease: true })) {
            return true;
          }
        } catch {
          // ignore invalid semver range
        }
      }
    }

    return false;
  } catch (err) {
    console.warn(`Error comparing version ${version} to affected set for ${vuln.vulnId}: ${err.message}`);
    return false;
  }
}
