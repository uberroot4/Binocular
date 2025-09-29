package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

import java.util.Date

/**
 * Mention entity for ArangoDB based on the domain model.
 */
//TODO: check arangodb definition of mention
data class MentionEntity(
    var commit: String? = null,
    var createdAt: Date? = null,
    var closes: Boolean? = null,
)
