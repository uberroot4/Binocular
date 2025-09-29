package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

import java.time.LocalDateTime

/**
 * Job entity for ArangoDB based on the domain model.
 */
class JobEntity (
    var id: String? = null,
    var name: String? = null,
    var status: String? = null,
    var stage: String? = null,
    var createdAt: LocalDateTime? = null,
    var finishedAt: LocalDateTime? = null,
    var webUrl: String? = null,
)
