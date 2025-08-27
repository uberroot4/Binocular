package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
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
internal class NoteMapper {
    private val logger: Logger = LoggerFactory.getLogger(NoteMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var accountMapper: AccountMapper

    @Autowired
    @Lazy
    private lateinit var issueMapper: IssueMapper

    @Autowired
    @Lazy
    private lateinit var mergeRequestMapper: MergeRequestMapper

    /**
     * Converts a domain Note to a SQL NoteEntity
     */
    fun toEntity(domain: Note): NoteEntity {
        val noteContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.note[noteContextKey]?.let {
            logger.trace("toEntity: Note-Cache hit: '$noteContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.note.computeIfAbsent(noteContextKey) { entity }

        return entity
    }

    /**
     * Converts a SQL NoteEntity to a domain Note
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    fun toDomain(entity: NoteEntity): Note {
        val noteContextKey = entity.id?.toString() ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.note[noteContextKey]?.let {
            logger.trace("toDomain: Note-Cache hit: '$noteContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.note.computeIfAbsent(noteContextKey) { domain }

        val accounts = entity.accounts.map { accEntity -> accountMapper.toDomain(accEntity) }
        val issues = entity.issues.map { issueEntity -> issueMapper.toDomain(issueEntity) }
        val mergeRequests = entity.mergeRequests.map { mrEntity -> mergeRequestMapper.toDomain(mrEntity) }

        domain.accounts = accounts
        domain.issues = issues
        domain.mergeRequests = mergeRequests

        return domain
    }

    /**
     * Converts a list of SQL NoteEntity objects to a list of domain Note objects
     */
    fun toDomainList(entities: Iterable<NoteEntity>): List<Note> = entities.map { toDomain(it) }
}
