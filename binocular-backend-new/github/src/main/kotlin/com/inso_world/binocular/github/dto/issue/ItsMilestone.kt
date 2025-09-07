package com.inso_world.binocular.github.dto.issue

import java.time.LocalDateTime

data class ItsMilestone(
    val id: String?,
    val url: String?,
    val number: Int?,
    val state: String?,
    val title: String,
    val description: String?,
    val creator: ItsUser,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val closedAt: LocalDateTime?,
    val dueOn: LocalDateTime?,
)
