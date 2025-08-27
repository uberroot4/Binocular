package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.FileEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.File
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional

@Component
internal class FileMapper {
    private val logger: Logger = LoggerFactory.getLogger(FileMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
    private lateinit var commitMapper: CommitMapper

    @Autowired
    @Lazy
    private lateinit var branchMapper: BranchMapper

    @Autowired
    @Lazy
    private lateinit var moduleMapper: ModuleMapper

    /**
     * Converts a domain File to a SQL FileEntity
     */
    internal fun toEntity(domain: File): FileEntity {
        val fileContextKey = domain.id ?: "new-${System.identityHashCode(domain)}"
        ctx.entity.file[fileContextKey]?.let {
            logger.trace("toEntity: File-Cache hit: '$fileContextKey'")
            return it
        }

        val entity = domain.toEntity()

        ctx.entity.file.computeIfAbsent(fileContextKey) { entity }

        return entity
    }

    /**
     * Converts a SQL FileEntity to a domain File
     *
     * Uses lazy loading proxies for relationships, which will only be loaded
     * when accessed. This provides a consistent API regardless of the database
     * implementation and avoids the N+1 query problem.
     */
    @Transactional(readOnly = true)
    internal fun toDomain(entity: FileEntity): File {
        val fileContextKey = entity.id ?: "new-${System.identityHashCode(entity)}"
        ctx.domain.file[fileContextKey]?.let {
            logger.trace("toDomain: File-Cache hit: '$fileContextKey'")
            return it
        }

        val domain = entity.toDomain()
        ctx.domain.file.computeIfAbsent(fileContextKey) { domain }

        val commits = entity.commits.map { commitEntity -> commitMapper.toDomain(commitEntity) }
        val branches = entity.branches.map { branchEntity -> branchMapper.toDomain(branchEntity) }
        val modules = entity.modules.map { moduleEntity -> moduleMapper.toDomain(moduleEntity) }
        val relatedFiles = entity.outgoingFiles.map { fileEntity -> toDomain(fileEntity) }

        domain.commits = commits
        domain.branches = branches
        domain.modules = modules
        domain.relatedFiles = relatedFiles

        return domain
    }

    /**
     * Converts a list of SQL FileEntity objects to a list of domain File objects
     */
    internal fun toDomainList(entities: Iterable<FileEntity>): List<File> = entities.map { toDomain(it) }
}
