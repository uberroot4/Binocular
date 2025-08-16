package com.inso_world.binocular.cli.service.its

import com.inso_world.binocular.cli.config.loadGitHubToken
import com.inso_world.binocular.cli.index.its.GitHubUser
import com.inso_world.binocular.cli.index.its.GraphQlUserResponse
import com.inso_world.binocular.cli.index.its.PageInfo
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

/**
 * Service for accessing GitHub API (GraphQl).
 */
@Service
class GitHubService (private val webClient: WebClient){

    // this is still chaos
    fun loadAllAssignableUsers(owner: String, repo: String): Mono<List<GitHubUser>> {
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
                .header("Authorization", "Bearer ${loadGitHubToken()}")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(GraphQlUserResponse::class.java)
                .map { res ->
                    val users = res.data.repository.assignableUsers.nodes
                    val pageInfo = res.data.repository.assignableUsers.pageInfo
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


