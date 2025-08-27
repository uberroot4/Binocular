package com.inso_world.binocular.infrastructure.sql.persistence.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table

/**
 * SQL-specific Milestone entity.
 */
@Entity
@Table(name = "milestones")
internal data class MilestoneEntity(
    @Id
    var id: Long? = null,
    var iid: Int? = null,
    var title: String? = null,
    @Column(columnDefinition = "TEXT")
    var description: String? = null,
    @Column(name = "created_at")
    var createdAt: String? = null,
    @Column(name = "updated_at")
    var updatedAt: String? = null,
    @Column(name = "start_date")
    var startDate: String? = null,
    @Column(name = "due_date")
    var dueDate: String? = null,
    var state: String? = null,
    var expired: Boolean? = null,
    @Column(name = "web_url")
    var webUrl: String? = null,
    @ManyToMany(mappedBy = "milestones")
    var issues: MutableList<IssueEntity> = mutableListOf(),
    @ManyToMany(mappedBy = "milestones")
    var mergeRequests: MutableList<MergeRequestEntity> = mutableListOf(),
) {
    fun toDomain() = com.inso_world.binocular.model.Milestone(
        id = this.id?.toString(),
        iid = this.iid,
        title = this.title,
        description = this.description,
        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
        startDate = this.startDate,
        dueDate = this.dueDate,
        state = this.state,
        expired = this.expired,
        webUrl = this.webUrl
    )
}

internal fun com.inso_world.binocular.model.Milestone.toEntity(): MilestoneEntity {
    return MilestoneEntity(
        id = this.id?.toLong(),
        iid = this.iid,
        title = this.title,
        description = this.description,
        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
        startDate = this.startDate,
        dueDate = this.dueDate,
        state = this.state,
        expired = this.expired,
        webUrl = this.webUrl
    )
}
