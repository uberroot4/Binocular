package com.inso_world.binocular.infrastructure.sql.mapper

 import com.inso_world.binocular.core.persistence.mapper.EntityMapper
 import com.inso_world.binocular.core.persistence.proxy.RelationshipProxyFactory
 import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
 import com.inso_world.binocular.model.Account
 import org.slf4j.Logger
 import org.slf4j.LoggerFactory
 import org.springframework.beans.factory.annotation.Autowired
 import org.springframework.stereotype.Component
 import org.springframework.transaction.annotation.Transactional

 @Component
 class AccountMapper
    @Autowired
    constructor(
        private val proxyFactory: RelationshipProxyFactory,
//        @Lazy private val issueMapper: IssueMapper,
//        @Lazy private val mergeRequestMapper: MergeRequestMapper,
//        @Lazy private val noteMapper: NoteMapper,
    ) : EntityMapper<Account, AccountEntity> {

//        @Autowired
//        private lateinit var ctx: MappingContext

        val logger: Logger = LoggerFactory.getLogger(AccountMapper::class.java)

        /**
         * Converts a domain Account to a SQL AccountEntity
         */
        override fun toEntity(domain: Account): AccountEntity {
            logger.trace("Account toEntity(${domain.login})")

            return AccountEntity(
                id = domain.id?.toLong(),
                gid = domain.gid,
                platform = domain.platform,
                login = domain.login,
                name = domain.name,
                avatarUrl = domain.avatarUrl,
                url = domain.url,
                // Note: Relationships are not directly mapped in SQL entity
            )
        }


        /**
         * Converts a SQL AccountEntity to a domain Account
         *
         * Uses lazy loading proxies for relationships, which will only be loaded
         * when accessed. This provides a consistent API regardless of the database
         * implementation and avoids the N+1 query problem.
         */
        @Transactional(readOnly = true)
        override fun toDomain(entity: AccountEntity): Account {
            val id = entity.id ?: throw IllegalStateException("Entity ID cannot be null")

            return Account(
                id = id.toString(),
                gid = entity.gid,
                platform = entity.platform,
                login = entity.login,
                name = entity.name,
                avatarUrl = entity.avatarUrl,
                url = entity.url,

                //TODO relationships (maybe needs mapping context)

                // Use direct entity relationships and map them to domain objects using the new createLazyMappedList method
//                issues =
//                    proxyFactory.createLazyMappedList(
//                        { entity.issues },
//                        { issueMapper.toDomain(it) },
//                    ),
//                mergeRequests =
//                    proxyFactory.createLazyMappedList(
//                        { entity.mergeRequests },
//                        { mergeRequestMapper.toDomain(it) },
//                    ),
//                notes =
//                    proxyFactory.createLazyMappedList(
//                        { entity.notes },
//                        { noteMapper.toDomain(it) },
//                    ),
            )
        }

        /**
         * Converts a list of SQL AccountEntity objects to a list of domain Account objects
         */
        override fun toDomainList(entities: Iterable<AccountEntity>): List<Account> = entities.map { toDomain(it) }
    }
