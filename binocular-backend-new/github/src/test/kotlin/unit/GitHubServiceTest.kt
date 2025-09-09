package unit

import com.inso_world.binocular.github.client.GraphQLClient
import com.inso_world.binocular.github.dto.user.GraphQlUserResponse
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.core.io.ClassPathResource
import reactor.core.publisher.Mono
import reactor.test.StepVerifier
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.inso_world.binocular.github.service.GitHubService
import org.junit.jupiter.api.Nested
import org.mockito.kotlin.any
import org.mockito.kotlin.argThat
import org.mockito.kotlin.eq
import org.mockito.kotlin.whenever

class GitHubServiceTest {

    private val graphQLClient = Mockito.mock(GraphQLClient::class.java)
    private val gitHubService = GitHubService(graphQLClient)

    private val mapper = jacksonObjectMapper()

    private fun loadResponse(filename: String): GraphQlUserResponse {
        val resource = ClassPathResource("response/$filename")
        return mapper.readValue(resource.file)
    }

    @Nested
    inner class LoadUsers {
        @Test
        fun `should load all assignable users with pagination`() {
            val responsePage1 = loadResponse("MockUsersHasNextPage.json")
            val responsePage2 = loadResponse("MockUsersNoNextPage.json")

            // mock response page 1
            whenever(graphQLClient.execute(
                any(),
                argThat { arg -> arg != null && arg["cursor"] == null },
                eq(GraphQlUserResponse::class.java)
            )).thenReturn(Mono.just(responsePage1))

            // mock response page 2
            whenever(graphQLClient.execute(
                any(),
                argThat { arg -> arg != null && arg["cursor"] == "Y3Vyc29yOm1vY2s=" },
                eq(GraphQlUserResponse::class.java)
            )).thenReturn(Mono.just(responsePage2))

            val resultMono = gitHubService.loadAllAssignableUsers("INSO-World", "Binocular")

            // verify that all users have been correctly loaded (login and id are not blank)
            StepVerifier.create(resultMono)
                .expectNextMatches { users ->
                    users.size == 150 &&
                            users[0].login == "user001" &&
                            users.last().login == "user150"
                    users.all { it.login.isNotBlank()
                            && it.id.isNotBlank() }
                }
                .verifyComplete()
        }

        @Test
        fun `should load all assignable users without pagination`() {
            val responsePage = loadResponse("MockUsersNoNextPage.json")

            // mock response page 1
            whenever(graphQLClient.execute(
                any(),
                argThat { arg -> arg != null && arg["cursor"] == null },
                eq(GraphQlUserResponse::class.java)
            )).thenReturn(Mono.just(responsePage))

            val resultMono = gitHubService.loadAllAssignableUsers("INSO-World", "Binocular")

            // verify that all users have been correctly loaded (login and id are not blank)
            StepVerifier.create(resultMono)
                .expectNextMatches { users ->
                    users.size == 50 &&
                            users[0].login == "user101" &&
                            users.last().login == "user150"
                    users.all { it.login.isNotBlank()
                            && it.id.isNotBlank() }
                }
                .verifyComplete()
        }
    }


}
