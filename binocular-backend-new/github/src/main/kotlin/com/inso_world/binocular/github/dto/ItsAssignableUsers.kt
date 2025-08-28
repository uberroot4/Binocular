package com.inso_world.binocular.github.dto

data class ItsAssignableUsers(
    val nodes: List<ItsGitHubUser>,
    val pageInfo: PageInfo
)
