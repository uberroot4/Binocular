package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

/**
 * Stats entity for ArangoDB based on the domain model.
 */
//TODO: check arangodb definition of stats
data class StatsEntity (
    var additions: Long,
    var deletions: Long,
)
