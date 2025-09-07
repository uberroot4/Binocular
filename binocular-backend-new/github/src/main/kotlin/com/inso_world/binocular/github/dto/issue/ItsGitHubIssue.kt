package com.inso_world.binocular.github.dto.issue

import com.inso_world.binocular.model.Issue
import java.time.LocalDateTime

data class ItsGitHubIssue(
    val id: String,
    val number: Int,
    val title: String,
    val body: String?, //description
    val state: String,
    val url: String,
    val closedAt: LocalDateTime?,
    val createdAt: LocalDateTime,
    val updatedAt: LocalDateTime,
    val labels: ItsLabelWrapper?,
    val milestone: ItsMilestoneWrapper?,
    val author: ItsUser,
    val assignees: ItsAssigneeWrapper?,
    val timelineItems: ItsTimelineItemWrapper?
) {
    fun toDomain(): Issue {
        val issue = Issue(
            iid = number,
            title = title,
            description = body,
            createdAt = createdAt,
            closedAt = closedAt,
            updatedAt = updatedAt,
            state = state,
            webUrl = url
            // TODO map labels, author etc
        )
        return issue
    }
}

