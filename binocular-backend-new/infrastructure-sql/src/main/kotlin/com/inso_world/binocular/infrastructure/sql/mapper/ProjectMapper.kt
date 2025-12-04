package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.core.persistence.proxy.RelationshipProxyFactory
import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.ProjectEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Project
import jakarta.persistence.EntityManager
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component

@Component
internal class ProjectMapper
@Autowired
constructor(
    private val proxyFactory: RelationshipProxyFactory,
    @Lazy private val repoMapper: RepositoryMapper,
    @Lazy private val issueMapper: IssueMapper,
) {
    var logger: Logger = LoggerFactory.getLogger(ProjectMapper::class.java)

    @Autowired
    @Lazy
    private lateinit var entityManager: EntityManager

    @Autowired
    private lateinit var ctx: MappingContext

    fun toEntity(domain: Project): ProjectEntity {
        logger.debug("toEntity({})", domain)
        val p = domain.toEntity()

        p.repo =
            domain.repo?.let {
                repoMapper.toEntity(it, p)
            }

//        p.issues = domain.issues.map { issueMapper.toEntity(it,) }
//            .toMutableSet()

        return p
    }

    // TODO accounts for project should be mapped based on issues in project
    fun toDomain(entity: ProjectEntity): Project {
        val id = entity.id ?: throw IllegalStateException("Entity ID cannot be null")

        val p = entity.toDomain()

        p.repo =
            entity.repo?.let { r ->
                r.id?.let {
                    repoMapper.toDomain(r, p)
                }
            }
        return p
    }
}
