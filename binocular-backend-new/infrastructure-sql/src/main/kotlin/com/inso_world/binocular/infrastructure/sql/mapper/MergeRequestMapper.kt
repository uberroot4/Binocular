package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Milestone
import com.inso_world.binocular.model.Note
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component

@Component
internal class MergeRequestMapper {
    private val logger: Logger = LoggerFactory.getLogger(MergeRequestMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var accountMapper: AccountMapper

    @Autowired
    @Lazy
    private lateinit var milestoneMapper: MilestoneMapper

    @Autowired
    @Lazy
    private lateinit var noteMapper: NoteMapper

    /**
     * Converts a domain MergeRequest to a SQL MergeRequestEntity
     */
    fun toEntity(domain: MergeRequest): MergeRequestEntity {
        val mergeRequestContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.mergeRequest[mergeRequestContextKey]?.let {
            logger.trace("toEntity: MergeRequest-Cache hit: '$mergeRequestContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.mergeRequest.computeIfAbsent(mergeRequestContextKey) { entity }

        return entity
    }

    /**
     * Converts a SQL MergeRequestEntity to a domain MergeRequest
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    fun toDomain(entity: MergeRequestEntity): MergeRequest {
        val mergeRequestContextKey = entity.id?.toString() ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.mergeRequest[mergeRequestContextKey]?.let {
            logger.trace("toDomain: MergeRequest-Cache hit: '$mergeRequestContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.mergeRequest.computeIfAbsent(mergeRequestContextKey) { domain }

        val accounts = entity.accounts.map { accEntity -> accountMapper.toDomain(accEntity) }
        val milestones = entity.milestones.map { msEntity -> milestoneMapper.toDomain(msEntity) }
        val notes = entity.notes.map { noteEntity -> noteMapper.toDomain(noteEntity) }

        domain.accounts = accounts
        domain.milestones = milestones
        domain.notes = notes

        return domain
    }

    /**
     * Converts a list of SQL MergeRequestEntity objects to a list of domain MergeRequest objects
     */
    fun toDomainList(entities: Iterable<MergeRequestEntity>): List<MergeRequest> = entities.map { toDomain(it) }
}
