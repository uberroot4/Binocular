'use strict';

import { retrieveVulnerabilityInfo } from './retrieveVulnerabilityInfo.js';
import Vulnerability from './../../models/Vulnerability.js';
import VersionChangeEventVulnerabilityConnection from './../../models/VersionChangeEventVulnerabilityConnection.js';
import VersionChangeEvent from './../../models/VersionChangeEvent.js';

export async function enrichVersionChanges() {
  console.log('--- Enrichment process started ---');

  // Fetch all version change events
  const events = await VersionChangeEvent.findAll();
  if (!events.length) {
    console.log('No version change events found.');
    return;
  }

  // Extract unique libraries
  const libraries = [...new Set(events.map((e) => e.library).filter(Boolean))];
  console.log(`Processing ${libraries.length} unique libraries out of ${events.length} events...`);

  // Fetch all vulnerabilities in one batch using OSV
  let vulnerabilities = [];
  try {
    vulnerabilities = await retrieveVulnerabilityInfo(libraries);
    console.log(`Retrieved ${vulnerabilities.length} vulnerabilities from OSV.`);
  } catch (error) {
    console.error('Failed to retrieve vulnerabilities:', error.message);
    return;
  }

  if (!vulnerabilities.length) {
    console.log('No vulnerabilities found for provided libraries.');
    return;
  }

  // Persist vulnerabilities and edges
  const vulnsByLib = groupBy(vulnerabilities, 'library');

  for (const [library, vulns] of Object.entries(vulnsByLib)) {
    const relatedEvents = events.filter((e) => e.library === library);
    if (!relatedEvents.length) continue;

    console.log(`Enriching ${library} (${vulns.length} vulnerabilities, ${relatedEvents.length} events)...`);

    for (const v of vulns) {
      if (!v.vulId) continue;

      // Save vulnerability (ignore duplicates)
      await Vulnerability.persist(v);

      // Create edges
      for (const e of relatedEvents) {
        await VersionChangeEventVulnerabilityConnection.ensure(
          { relation: 'AFFECTS', createdAt: new Date().toISOString() },
          { from: e, to: v },
        );
      }
    }
  }

  console.log('--- Enrichment completed ---');
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}
