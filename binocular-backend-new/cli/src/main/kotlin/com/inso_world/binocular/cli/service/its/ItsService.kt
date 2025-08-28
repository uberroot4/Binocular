package com.inso_world.binocular.cli.service.its

import com.inso_world.binocular.cli.service.VcsService
import com.inso_world.binocular.github.service.GitHubService
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Project
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

/**
 * Service for indexing ITS data.
 */
@Service
class ItsService (
    private val gitHubService: GitHubService,
    private val accountService: AccountService
) {
    private var logger: Logger = LoggerFactory.getLogger(VcsService::class.java)

    fun indexAccountsFromGitHub(owner: String, repo: String, project: Project): Mono<List<Account>> {
        logger.info("Indexing accounts from GitHub for $owner/$repo")

        return gitHubService.loadAllAssignableUsers(owner, repo)
            .map { users ->
                users.map { it.toDomain() }
            }.flatMap { accounts ->
                logger.debug("Saving ${accounts.size} accounts")
                accountService.saveAll(accounts)
            }
    }
}
