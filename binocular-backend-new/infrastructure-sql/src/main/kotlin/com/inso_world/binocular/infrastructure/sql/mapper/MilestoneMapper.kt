package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Milestone
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component

@Component
internal class MilestoneMapper {
    private val logger: Logger = LoggerFactory.getLogger(MilestoneMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var issueMapper: IssueMapper

    @Autowired
    @Lazy
    private lateinit var mergeRequestMapper: MergeRequestMapper

    /**
     * Converts a domain Milestone to a SQL MilestoneEntity
     */
    fun toEntity(domain: Milestone): MilestoneEntity {
        val milestoneContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.milestone[milestoneContextKey]?.let {
            logger.trace("toEntity: Milestone-Cache hit: '$milestoneContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.milestone.computeIfAbsent(milestoneContextKey) { entity }

        return entity
    }

    /**
     * Converts a SQL MilestoneEntity to a domain Milestone
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    fun toDomain(entity: MilestoneEntity): Milestone {
        val milestoneContextKey = entity.id?.toString() ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.milestone[milestoneContextKey]?.let {
            logger.trace("toDomain: Milestone-Cache hit: '$milestoneContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.milestone.computeIfAbsent(milestoneContextKey) { domain }

        val issues = entity.issues.map { issueEntity -> issueMapper.toDomain(issueEntity) }
        val mergeRequests = entity.mergeRequests.map { mrEntity -> mergeRequestMapper.toDomain(mrEntity) }

        domain.issues = issues
        domain.mergeRequests = mergeRequests

        return domain
    }

    /**
     * Converts a list of SQL MilestoneEntity objects to a list of domain Milestone objects
     */
    fun toDomainList(entities: Iterable<MilestoneEntity>): List<Milestone> = entities.map { toDomain(it) }
}
