package com.inso_world.binocular.model

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.util.Objects

/**
 * Domain model for an Account, representing a user account from a platform like GitHub or GitLab.
 * This class is database-agnostic and contains no persistence-specific annotations.
 */
data class Account(
    var id: String? = null,
    @field:NotBlank
    val gid: String,
    @field:NotNull
    val platform: Platform,
    @field:NotBlank
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
        return "${this.platform}:${this.gid}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Account
        if (id != other.id) return false
        if (platform != other.platform) return false
        if (gid != other.gid) return false

        return true
    }

    override fun hashCode(): Int = Objects.hashCode("${this.platform}:${this.gid}")
}

enum class Platform {
    GitHub,
    GitLab,
}
