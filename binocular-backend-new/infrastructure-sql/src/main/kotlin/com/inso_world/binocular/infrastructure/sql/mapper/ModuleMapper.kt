package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.ModuleEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Module
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional

@Component
internal class ModuleMapper {
    private val logger: Logger = LoggerFactory.getLogger(ModuleMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var commitMapper: CommitMapper

    /**
     * Converts a domain Module to a SQL ModuleEntity
     */
    internal fun toEntity(domain: Module): ModuleEntity {
        val moduleContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.module[moduleContextKey]?.let {
            logger.trace("toEntity: Module-Cache hit: '$moduleContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.module.computeIfAbsent(moduleContextKey) { entity }

        domain.commits.forEach { commit ->
            val commitEntity = commitMapper.toEntity(commit)
            entity.commits.add(commitEntity)
        }

        return entity
    }

    /**
     * Converts a SQL ModuleEntity to a domain Module
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    @Transactional(readOnly = true)
    internal fun toDomain(entity: ModuleEntity): Module {
        val moduleContextKey = entity.id ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.module[moduleContextKey]?.let {
            logger.trace("toDomain: Module-Cache hit: '$moduleContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.module.computeIfAbsent(moduleContextKey) { domain }

        val commits = entity.commits.map { commitEntity -> commitMapper.toDomain(commitEntity) }
        val childModules = entity.childModules.map { moduleEntity -> toDomain(moduleEntity) }
        val parentModules = entity.parentModules.map { moduleEntity -> toDomain(moduleEntity) }

        domain.commits = commits
        domain.childModules = childModules
        domain.parentModules = parentModules

        return domain
    }

    /**
     * Converts a list of SQL ModuleEntity objects to a list of domain Module objects
     */
    internal fun toDomainList(entities: Iterable<ModuleEntity>): List<Module> = entities.map { toDomain(it) }
}
