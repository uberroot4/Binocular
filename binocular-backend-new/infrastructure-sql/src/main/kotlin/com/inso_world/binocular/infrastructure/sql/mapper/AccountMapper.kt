package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Note
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component

@Component
internal class AccountMapper {
    private val logger: Logger = LoggerFactory.getLogger(AccountMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var issueMapper: IssueMapper

    @Autowired
    @Lazy
    private lateinit var mergeRequestMapper: MergeRequestMapper

    @Autowired
    @Lazy
    private lateinit var noteMapper: NoteMapper

    fun toEntity(domain: Account): AccountEntity {
        val accountContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.account[accountContextKey]?.let {
            logger.trace("toEntity: Account-Cache hit: '$accountContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.account.computeIfAbsent(accountContextKey) { entity }

        return entity
    }

    fun toDomain(entity: AccountEntity): Account {
        val accountContextKey = entity.id?.toString() ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.account[accountContextKey]?.let {
            logger.trace("toDomain: Account-Cache hit: '$accountContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.account.computeIfAbsent(accountContextKey) { domain }

        val issues = entity.issues.map { issueEntity -> issueMapper.toDomain(issueEntity) }
        val mergeRequests = entity.mergeRequests.map { mrEntity -> mergeRequestMapper.toDomain(mrEntity) }
        val notes = entity.notes.map { noteEntity -> noteMapper.toDomain(noteEntity) }

        domain.issues = issues
        domain.mergeRequests = mergeRequests
        domain.notes = notes

        return domain
    }

    /**
     * Converts a list of SQL AccountEntity objects to a list of domain Account objects
     */
    fun toDomainList(entities: Iterable<AccountEntity>): List<Account> = entities.map { toDomain(it) }
}
