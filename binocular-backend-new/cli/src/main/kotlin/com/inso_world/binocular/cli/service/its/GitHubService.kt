package com.inso_world.binocular.cli.service.its

import com.inso_world.binocular.cli.config.BinocularRcLoader
import com.inso_world.binocular.cli.exception.ServiceException
import com.inso_world.binocular.cli.index.its.GitHubUser
import com.inso_world.binocular.cli.index.its.GraphQlUserResponse
import com.inso_world.binocular.cli.index.its.PageInfo
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

/**
 * Service for accessing GitHub API (GraphQl).
 */
@Service
class GitHubService (private val webClient: WebClient, private val configLoader: BinocularRcLoader) {

    private var logger: Logger = LoggerFactory.getLogger(GitHubService::class.java)

    fun loadAllAssignableUsers(owner: String, repo: String): Mono<List<GitHubUser>> {
        logger.trace("Load all assignable users from GitHub for $owner $repo")
        val allUsers = mutableListOf<GitHubUser>()

        fun fetchPage(cursor: String?): Mono<Pair<List<GitHubUser>, PageInfo>> {
            val query = """
            query(${"$"}cursor: String) {
              repository(owner: "$owner", name: "$repo") {
                assignableUsers(first: 100, after: ${"$"}cursor) {
                  nodes {
                    login
                    name
                    url
                    avatarUrl
                  }
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                }
              }
            }
        """

            val request = mapOf(
                "query" to query,
                "variables" to mapOf("cursor" to cursor)
            )

            return webClient.post()
                .uri("https://api.github.com/graphql")
                .header("Authorization", "Bearer ${configLoader.loadGitHubToken()}")
                .bodyValue(request)
                .retrieve()
                .onStatus({ it.is4xxClientError || it.is5xxServerError }) { response ->
                    logger.error("GitHub API returned error: ${response.statusCode()}")
                    response.bodyToMono(String::class.java).map { body ->
                        ServiceException("GitHub API error ${response.statusCode()}: $body")
                    }
                }
                .bodyToMono(GraphQlUserResponse::class.java)
                .map { res ->
                    val users = res.data.repository.assignableUsers.nodes
                    val pageInfo = res.data.repository.assignableUsers.pageInfo
                    logger.info("Received ${users.size} users, hasNextPage= ${pageInfo.hasNextPage}")
                    users to pageInfo
                }
        }

        fun fetchAllPages(cursor: String? = null): Mono<List<GitHubUser>> {
            return fetchPage(cursor).flatMap { (users, pageInfo) ->
                allUsers.addAll(users)
                if (pageInfo.hasNextPage) {
                    fetchAllPages(pageInfo.endCursor)
                } else {
                    Mono.just(allUsers)
                }
            }
        }

        return fetchAllPages()
    }
}


