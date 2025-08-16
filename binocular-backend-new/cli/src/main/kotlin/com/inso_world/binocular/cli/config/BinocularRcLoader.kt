package com.inso_world.binocular.cli.config

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.stereotype.Component
import java.io.File

// this is currently just to get the service working with the token from the .binocularrc json, possibly not optimal
// necessary data classes have just been dumped into this class for now
// unsure if the config approach via binocularrc json is the optimal solution for the new backend
// TODO edit this

/**
 * Component responsible for locating and parsing the `.binocularrc` configuration file.
 *
 * The binocularrc file is expected to be a JSON file containing config details such as
 * settings, tokens and credentials for indexers and GitHub/GitLab.
 */
@Component
class BinocularRcLoader {

    fun loadConfig(): BinocularRc {
        val file = findRcFile()
        val json = file.readText()
        val mapper = jacksonObjectMapper()
        return mapper.readValue(json)
    }

    fun loadGitHubToken(): String {
        return loadConfig().github.auth.token
    }

    private fun findRcFile(): File {
        var current = File(System.getProperty("user.dir"))
        while (current != null) {
            val rc = File(current, ".binocularrc")
            if (rc.exists()) return rc
            current = current.parentFile
        }
        throw IllegalStateException(".binocularrc not found in any parent directories.")
    }
}

// data classes for parsing the JSON file
data class BinocularRc(
    val gitlab: GitlabConfig,
    val github: GithubConfig,
    val arango: ArangoConfig,
    val indexers: IndexersConfig
)

data class GitlabConfig(
    val url: String,
    val project: String,
    val token: String
)

data class GithubConfig(
    val auth: AuthConfig
)

data class AuthConfig(
    val type: String,
    val username: String,
    val password: String,
    val token: String
)

data class ArangoConfig(
    val host: String,
    val port: Int,
    val user: String,
    val password: String
)

data class IndexersConfig(
    val its: String,
    val ci: String
)
