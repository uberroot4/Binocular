package com.inso_world.binocular.cli.index.its

import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Platform

data class ItsGitHubUser(
    val login: String,
    //val email: String?,
    val name: String?,
    val url: String?,
    val avatarUrl: String?
) {
    fun toDomain(): Account {
        val acc = Account(
            login = this.login,
            name = this.name,
            url = this.url,
            avatarUrl = this.avatarUrl,
            platform = Platform.GitHub
        )
        return acc
    }
}
