package com.inso_world.binocular.infrastructure.sql.service

import com.inso_world.binocular.core.persistence.model.Page
import com.inso_world.binocular.core.service.AccountInfrastructurePort
import com.inso_world.binocular.infrastructure.sql.mapper.AccountMapper
import com.inso_world.binocular.infrastructure.sql.persistence.dao.AccountDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Note
import jakarta.validation.Valid
import org.slf4j.LoggerFactory
import org.slf4j.Logger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.validation.annotation.Validated

@Service
@Validated
 internal class AccountInfrastructurePortImpl
@Autowired constructor(
    @Autowired val accountDao: AccountDao,
    @Autowired val accountMapper: AccountMapper
) : AbstractInfrastructurePort<Account, AccountEntity, Long>(Long::class),
    AccountInfrastructurePort {
    var logger: Logger = LoggerFactory.getLogger(AccountInfrastructurePortImpl::class.java)

    override fun findAll(): Iterable<@Valid Account> {
        TODO("Not yet implemented")
    }

    override fun findAll(pageable: Pageable): Page<@Valid Account> {
        TODO("Not yet implemented")
    }

    override fun findById(id: String): @Valid Account? {
        TODO("Not yet implemented")
    }

    override fun create(value: Account): @Valid Account {
        TODO("Not yet implemented")
    }

    override fun update(value: Account): @Valid Account {
        TODO("Not yet implemented")
    }

    override fun updateAndFlush(value: Account): @Valid Account {
        TODO("Not yet implemented")
    }

    override fun saveAll(values: Collection<@Valid Account>): Iterable<@Valid Account> {
        logger.trace("Save all accounts (${values.size})")

        val entities = values.map { accountMapper.toEntity(it) }
        val savedEntities = accountDao.saveAll(entities)
        return accountMapper.toDomainList(savedEntities)
    }

    override fun delete(value: Account) {
        TODO("Not yet implemented")
    }

    override fun deleteById(id: String) {
        TODO("Not yet implemented")
    }

    override fun deleteAll() {
        TODO("Not yet implemented")
    }

    override fun findIssuesByAccountId(accountId: String): List<Issue> {
        TODO("Not yet implemented")
    }

    override fun findMergeRequestsByAccountId(accountId: String): List<MergeRequest> {
        TODO("Not yet implemented")
    }

    override fun findNotesByAccountId(accountId: String): List<Note> {
        TODO("Not yet implemented")
    }
}
