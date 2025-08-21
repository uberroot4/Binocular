package com.inso_world.binocular.model

import java.util.Objects

/**
 * Domain model for an Account, representing a user account from a platform like GitHub or GitLab.
 * This class is database-agnostic and contains no persistence-specific annotations.
 */
data class Account(
    var id: String? = null,
    val platform: Platform,
    val login: String,
    var name: String? = null,
    var avatarUrl: String? = null,
    var url: String? = null,
    // Relationships
    var issues: List<Issue> = emptyList(),
    var mergeRequests: List<MergeRequest> = emptyList(),
    var notes: List<Note> = emptyList(),
) {
    fun uniqueKey(): String {
        return "${this.platform}:${this.login}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Account
        if (id != other.id) return false
        if (platform != other.platform) return false
        if (login != other.login) return false

        return true
    }

    override fun hashCode(): Int = Objects.hashCode("${this.platform}:${this.login}")
}

enum class Platform {
    GitHub,
    GitLab,
}
