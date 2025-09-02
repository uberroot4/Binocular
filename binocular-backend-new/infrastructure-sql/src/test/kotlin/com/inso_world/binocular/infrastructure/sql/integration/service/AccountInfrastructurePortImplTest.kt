package com.inso_world.binocular.infrastructure.sql.integration.service

import com.inso_world.binocular.infrastructure.sql.integration.service.base.BaseServiceTest
import com.inso_world.binocular.infrastructure.sql.service.AccountInfrastructurePortImpl
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Platform
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertAll
import org.junit.jupiter.api.assertThrows
import org.springframework.beans.factory.annotation.Autowired

internal class AccountInfrastructurePortImplTest : BaseServiceTest() {
    @Autowired
    private lateinit var accountPort: AccountInfrastructurePortImpl

    @BeforeEach
    fun cleanup() {
        accountPort.deleteAll()
    }

    @Test
    fun `save one account, expecting it in database`() {
        val accounts = listOf(
            Account(
                gid = "abc123",
                platform = Platform.GitHub,
                login = "testuser",
                name = "Test User",
                avatarUrl = "https://example.com/avatar.png",
                url = "https://github.com/testuser"
            )
        )

        val savedAccounts = accountPort.saveAll(accounts)
        val savedAccount = savedAccounts.first()

        assertAll(
            "check account in db",
            {
                assertThat(savedAccount.id).isNotNull()
                assertThat(accountPort.findAll()).hasSize(1)
                assertThat(savedAccount.gid).isEqualTo(accounts[0].gid)
                assertThat(savedAccount.login).isEqualTo(accounts[0].login)
                assertThat(savedAccount.name).isEqualTo(accounts[0].name)
                assertThat(savedAccount.avatarUrl).isEqualTo(accounts[0].avatarUrl)
                assertThat(savedAccount.url).isEqualTo(accounts[0].url)
                assertThat(savedAccount.platform).isEqualTo(accounts[0].platform)
            }
        )
    }

    @Test
    fun `save accounts, expecting in database`() {
        val accounts = listOf(
            Account(
                gid = "abc123",
                platform = Platform.GitHub,
                login = "testuser",
                name = "Test User",
                avatarUrl = "https://example.com/avatar.png",
                url = "https://github.com/testuser"
            ),
            Account(
                gid = "cba321",
                platform = Platform.GitHub,
                login = "testuser2",
                name = "Test User2",
                avatarUrl = "https://example.com/avatar2.png",
                url = "https://github.com/testuser2"
            )
        )

        val saved = accountPort.saveAll(accounts)
        assertThat(saved).hasSize(2)

        saved.zip(accounts).forEachIndexed { index, (savedAccount, original) ->
            assertAll(
                "compare account #$index",
                {
                    assertThat(savedAccount.id).isNotNull()
                    assertThat(savedAccount.gid).isEqualTo(original.gid)
                    assertThat(savedAccount.login).isEqualTo(original.login)
                    assertThat(savedAccount.name).isEqualTo(original.name)
                    assertThat(savedAccount.avatarUrl).isEqualTo(original.avatarUrl)
                    assertThat(savedAccount.url).isEqualTo(original.url)
                    assertThat(savedAccount.platform).isEqualTo(original.platform)
                }
            )
        }

    }

    @Test
    fun `save accounts with same gid, expecting error`() {
        val accounts = listOf(
            Account(
                gid = "abc123",
                platform = Platform.GitHub,
                login = "testuser",
                name = "Test User",
                avatarUrl = "https://example.com/avatar.png",
                url = "https://github.com/testuser"
            ),
            Account(
                gid = "abc123",
                platform = Platform.GitHub,
                login = "testuser2",
                name = "Test User2",
                avatarUrl = "https://example.com/avatar2.png",
                url = "https://github.com/testuser2"
            )
        )

        assertAll(
            "check exception and empty database",
            {
                assertThrows<Exception> {
                accountPort.saveAll(accounts)
                }
                assertThat(accountPort.findAll()).isEmpty()
            }
        )
    }

}

