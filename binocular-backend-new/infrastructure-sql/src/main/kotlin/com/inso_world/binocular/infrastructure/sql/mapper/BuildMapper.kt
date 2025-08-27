package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.BuildEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Build
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional

@Component
internal class BuildMapper {
    private val logger: Logger = LoggerFactory.getLogger(BuildMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var commitMapper: CommitMapper

    /**
     * Converts a domain Build to a SQL BuildEntity
     */
    internal fun toEntity(domain: Build): BuildEntity {
        val buildContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.build[buildContextKey]?.let {
            logger.trace("toEntity: Build-Cache hit: '$buildContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.build.computeIfAbsent(buildContextKey) { entity }

        domain.commits.forEach { commit ->
            val commitEntity = commitMapper.toEntity(commit)
            entity.commits.add(commitEntity)
        }

        return entity
    }

    /**
     * Converts a SQL BuildEntity to a domain Build
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    @Transactional(readOnly = true)
    internal fun toDomain(entity: BuildEntity): Build {
        val buildContextKey = entity.id ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.build[buildContextKey]?.let {
            logger.trace("toDomain: Build-Cache hit: '$buildContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.build.computeIfAbsent(buildContextKey) { domain }

        val commits = entity.commits.map { commitEntity -> commitMapper.toDomain(commitEntity) }
        domain.commits = commits

        return domain
    }

    /**
     * Converts a list of SQL BuildEntity objects to a list of domain Build objects
     */
    internal fun toDomainList(entities: Iterable<BuildEntity>): List<Build> = entities.map { toDomain(it) }
}
