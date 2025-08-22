package com.inso_world.binocular.infrastructure.sql.integration.persistence.mapper

import com.inso_world.binocular.infrastructure.sql.integration.persistence.mapper.base.BaseMapperTest
import com.inso_world.binocular.infrastructure.sql.mapper.AccountMapper
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.ProjectEntity
import com.inso_world.binocular.model.Platform
import org.junit.jupiter.api.assertAll
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import kotlin.test.assertEquals

internal class AccountMapperTest : BaseMapperTest() {
    @Autowired
    private lateinit var accountMapper: AccountMapper

    @Nested
    inner class ToDomainMapperTest {
        @Test
        fun `should map account entity to domain`() {
            val accountEntity = AccountEntity(
                id = 1L,
                name = "test",
                login = "test",
                url = "https://github.com/test",
                avatarUrl = "https://avatars.githubusercontent.com/test",
                platform = Platform.GitHub,
            )

            // map to domain
            val accountDomain = accountMapper.toDomain(accountEntity)
            assertAll(
                { assertEquals(accountEntity.id.toString(), accountDomain.id) },
                { assertEquals(accountEntity.name, accountDomain.name) },
                { assertEquals(accountEntity.login, accountDomain.login) },
                { assertEquals(accountEntity.url, accountDomain.url) },
                { assertEquals(accountEntity.avatarUrl, accountDomain.avatarUrl) },
                { assertEquals(accountEntity.platform, accountDomain.platform) }
            )
        }

        @Test
        fun `should map list of account entities to domain list`() {
            val accountEntities = listOf(
                AccountEntity(
                    id = 1L,
                    name = "Alice",
                    login = "alice123",
                    url = "https://github.com/alice123",
                    avatarUrl = "https://avatars.githubusercontent.com/alice123",
                    platform = Platform.GitHub
                ),
                AccountEntity(
                    id = 2L,
                    name = "Bob",
                    login = "bob456",
                    url = "https://github.com/bob456",
                    avatarUrl = "https://avatars.githubusercontent.com/bob456",
                    platform = Platform.GitHub
                )
            )

            val domainAccounts = accountMapper.toDomainList(accountEntities)

            assertEquals(accountEntities.size, domainAccounts.size)

            accountEntities.zip(domainAccounts).forEach { (entity, domain) ->
                assertAll(
                    { assertEquals(entity.id.toString(), domain.id) },
                    { assertEquals(entity.name, domain.name) },
                    { assertEquals(entity.login, domain.login) },
                    { assertEquals(entity.url, domain.url) },
                    { assertEquals(entity.avatarUrl, domain.avatarUrl) },
                    { assertEquals(entity.platform, domain.platform) },
                )
            }
        }
    }

    @Nested
    inner class ToEntityMapperTest {
        @Test
        fun `should map domain account to entity`() {
            val domainAccount = com.inso_world.binocular.model.Account(
                id = "1",
                name = "Alice",
                login = "alice123",
                url = "https://github.com/alice123",
                avatarUrl = "https://avatars.githubusercontent.com/alice123",
                platform = Platform.GitHub,
            )

            val accountEntity = accountMapper.toEntity(domainAccount)

            assertAll(
                { assertEquals(domainAccount.id?.toLong(), accountEntity.id) },
                { assertEquals(domainAccount.name, accountEntity.name) },
                { assertEquals(domainAccount.login, accountEntity.login) },
                { assertEquals(domainAccount.url, accountEntity.url) },
                { assertEquals(domainAccount.avatarUrl, accountEntity.avatarUrl) },
                { assertEquals(domainAccount.platform, accountEntity.platform) }
            )
        }
    }

}
