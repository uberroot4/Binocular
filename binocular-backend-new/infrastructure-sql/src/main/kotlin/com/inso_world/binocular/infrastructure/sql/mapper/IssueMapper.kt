package com.inso_world.binocular.infrastructure.sql.mapper

import com.inso_world.binocular.infrastructure.sql.mapper.context.MappingContext
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.ProjectEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.toEntity
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.User
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.stereotype.Component

@Component
internal class IssueMapper {
    private val logger: Logger = LoggerFactory.getLogger(IssueMapper::class.java)

    @Autowired
    private lateinit var ctx: MappingContext

    @Autowired
    @Lazy
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



// package com.inso_world.binocular.infrastructure.sql.persistence.mapper
//
// import com.inso_world.binocular.core.persistence.mapper.EntityMapper
// import com.inso_world.binocular.core.persistence.proxy.RelationshipProxyFactory
// import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
// import com.inso_world.binocular.model.Issue
// import org.springframework.beans.factory.annotation.Autowired
// import org.springframework.context.annotation.Lazy
// import org.springframework.context.annotation.Profile
// import org.springframework.stereotype.Component
// import org.springframework.transaction.annotation.Transactional
//
// @Component
// class IssueMapper
//    @Autowired
//    constructor(
//        private val proxyFactory: RelationshipProxyFactory,
//        @Lazy private val accountMapper: AccountMapper,
//        @Lazy private val commitMapper: CommitMapper,
//        @Lazy private val milestoneMapper: MilestoneMapper,
//        @Lazy private val noteMapper: NoteMapper,
//        @Lazy private val userMapper: UserMapper,
//    ) : EntityMapper<Issue, IssueEntity> {
//        /**
//         * Converts a domain Issue to a SQL IssueEntity
//         */
//        override fun toEntity(domain: Issue): IssueEntity {
//            val entity =
//                IssueEntity(
//                    id = domain.id,
//                    iid = domain.iid,
//                    title = domain.title,
//                    description = domain.description,
//                    createdAt = domain.createdAt,
//                    closedAt = domain.closedAt,
//                    updatedAt = domain.updatedAt,
//                    state = domain.state,
//                    webUrl = domain.webUrl,
//                    // Note: Relationships are not directly mapped in SQL entity
//                )
//
//            // Set labels and mentions
//            entity.setDomainLabels(domain.labels)
//            entity.setDomainMentions(domain.mentions)
//
//            return entity
//        }
//
//        /**
//         * Converts a SQL IssueEntity to a domain Issue
//         *
//         * Uses lazy loading proxies for relationships, which will only be loaded
//         * when accessed. This provides a consistent API regardless of the database
//         * implementation and avoids the N+1 query problem.
//         */
//        @Transactional(readOnly = true)
//        override fun toDomain(entity: IssueEntity): Issue {
//            val id = entity.id ?: throw IllegalStateException("Entity ID cannot be null")
//
//            return Issue(
//                id = id,
//                iid = entity.iid,
//                title = entity.title,
//                description = entity.description,
//                createdAt = entity.createdAt,
//                closedAt = entity.closedAt,
//                updatedAt = entity.updatedAt,
//                labels = entity.getDomainLabels(),
//                state = entity.state,
//                webUrl = entity.webUrl,
//                mentions = entity.getDomainMentions(),
//                // Use direct entity relationships and map them to domain objects using the new createLazyMappedList method
//                accounts =
//                    proxyFactory.createLazyMappedList(
//                        { entity.accounts },
//                        { accountMapper.toDomain(it) },
//                    ),
//                commits =
//                    proxyFactory.createLazyMappedList(
//                        { entity.commits },
//                        { commitMapper.toDomain(it) },
//                    ),
//                milestones =
//                    proxyFactory.createLazyMappedList(
//                        { entity.milestones },
//                        { milestoneMapper.toDomain(it) },
//                    ),
//                notes =
//                    proxyFactory.createLazyMappedList(
//                        { entity.notes },
//                        { noteMapper.toDomain(it) },
//                    ),
//                users =
//                    proxyFactory.createLazyMappedList(
//                        { entity.users },
//                        { userMapper.toDomain(it) },
//                    ),
//            )
//        }
//    }
