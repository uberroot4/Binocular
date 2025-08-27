package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.User
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
internal class IssueMapper {
    private val logger: Logger = LoggerFactory.getLogger(IssueMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    private lateinit var userMapper: UserMapper

    /**
     * Converts a domain Issue to a SQL IssueEntity
     */
    fun toEntity(domain: Issue): IssueEntity {
        val issueContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.issue[issueContextKey]?.let {
            logger.trace("toEntity: Issue-Cache hit: '$issueContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.issue.computeIfAbsent(issueContextKey) { entity }

        domain.users.forEach { user ->
            val userEntity = userMapper.toEntity(user)
            entity.users.add(userEntity)
        }

        return entity
    }

    /**
     * Converts a SQL IssueEntity to a domain Issue
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    fun toDomain(entity: IssueEntity): Issue {
        val issueContextKey = entity.id?.toString() ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.issue[issueContextKey]?.let {
            logger.trace("toDomain: Issue-Cache hit: '$issueContextKey'")
            return it
        }

        val domain = entity.toDomain()

        ctx.domain.issue.computeIfAbsent(issueContextKey) { domain }

        val users = entity.users.map { userEntity -> userMapper.toDomain(userEntity) }
        domain.users = users

        return domain
    }

    /**
     * Converts a list of SQL IssueEntity objects to a list of domain Issue objects
     */
    fun toDomainList(entities: Iterable<IssueEntity>): List<Issue> = entities.map { toDomain(it) }
}
