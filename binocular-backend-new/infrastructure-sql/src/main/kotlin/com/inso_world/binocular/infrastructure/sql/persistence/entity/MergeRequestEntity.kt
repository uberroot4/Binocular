package com.inso_world.binocular.infrastructure.sql.persistence.entity

import com.inso_world.binocular.model.Mention
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.ElementCollection
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import jakarta.persistence.CollectionTable
import java.util.Objects

/**
 * SQL-specific MergeRequest entity.
 */
@Entity
@Table(name = "merge_requests")
internal data class MergeRequestEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    var id: Long? = null,
    var iid: Int? = null,
    var title: String? = null,
    @Column(columnDefinition = "TEXT")
    var description: String? = null,
    @Column(name = "created_at")
    var createdAt: String? = null,
    @Column(name = "closed_at")
    var closedAt: String? = null,
    @Column(name = "updated_at")
    var updatedAt: String? = null,
    @ElementCollection
    @CollectionTable(name = "merge_request_labels", joinColumns = [JoinColumn(name = "merge_request_id")])
    @Column(name = "label")
    var labels: List<String> = emptyList(),
    var state: String? = null,
    @Column(name = "web_url")
    var webUrl: String? = null,
    @OneToMany(mappedBy = "mergeRequest", cascade = [CascadeType.ALL], orphanRemoval = true)
    var mentions: MutableList<MentionEntity> = mutableListOf(),
    @ManyToMany(mappedBy = "mergeRequests")
    var accounts: MutableList<AccountEntity> = mutableListOf(),
    @ManyToMany
    @JoinTable(
        name = "merge_request_milestone_connections",
        joinColumns = [JoinColumn(name = "merge_request_id")],
        inverseJoinColumns = [JoinColumn(name = "milestone_id")],
    )
    var milestones: MutableList<MilestoneEntity> = mutableListOf(),
    @ManyToMany
    @JoinTable(
        name = "merge_request_note_connections",
        joinColumns = [JoinColumn(name = "merge_request_id")],
        inverseJoinColumns = [JoinColumn(name = "note_id")],
    )
    var notes: MutableList<NoteEntity> = mutableListOf(),
) {
    /**
     * Gets the mentions as domain model mentions
     */
    fun getDomainMentions(): List<Mention> =
        mentions.map { mentionEntity ->
            Mention(
                commit = mentionEntity.commit,
                createdAt = mentionEntity.createdAt,
                closes = mentionEntity.closes,
            )
        }

    /**
     * Sets the mentions from domain model mentions
     */
    fun setDomainMentions(mentions: List<Mention>) {
        // Clear existing mentions
        this.mentions.clear()

        // Add new mentions
        this.mentions.addAll(
            mentions.map { mention ->
                MentionEntity(
                    null,
                    mention.commit,
                    mention.createdAt,
                    mention.closes,
                    null,
                    null,
                    null,
                    this
                )
            },
        )
    }

    fun toDomain() = com.inso_world.binocular.model.MergeRequest(
        id = this.id?.toString(),
        iid = this.iid,
        title = this.title,
        description = this.description,
        createdAt = this.createdAt,
        closedAt = this.closedAt,
        updatedAt = this.updatedAt,
        labels = this.labels,
        state = this.state,
        webUrl = this.webUrl,
        mentions = getDomainMentions(),
        // These relationships will be populated by the mapper
        accounts = emptyList(),
        milestones = emptyList(),
        notes = emptyList()
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as MergeRequestEntity

        if (id != other.id) return false
        if (iid != other.iid) return false
        if (title != other.title) return false
        if (description != other.description) return false
        if (createdAt != other.createdAt) return false
        if (closedAt != other.closedAt) return false
        if (updatedAt != other.updatedAt) return false
        if (state != other.state) return false
        if (webUrl != other.webUrl) return false

        return true
    }

    override fun hashCode(): Int = Objects.hash(id, iid, title, description, createdAt, closedAt, updatedAt, state, webUrl)
}

internal fun com.inso_world.binocular.model.MergeRequest.toEntity(): MergeRequestEntity {
    val entity = MergeRequestEntity(
        id = this.id?.toLong(),
        iid = this.iid,
        title = this.title,
        description = this.description,
        createdAt = this.createdAt,
        closedAt = this.closedAt,
        updatedAt = this.updatedAt,
        labels = this.labels,
        state = this.state,
        webUrl = this.webUrl
    )

    // Set mentions
    entity.setDomainMentions(this.mentions)

    return entity
}
