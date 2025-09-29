package com.inso_world.binocular.infrastructure.arangodb.persistence.mapper

import com.inso_world.binocular.core.persistence.mapper.EntityMapper
import com.inso_world.binocular.infrastructure.arangodb.persistence.entity.JobEntity
import com.inso_world.binocular.model.Job
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import java.time.ZoneOffset

@Component
class JobMapper
    constructor(
    ) : EntityMapper<Job, JobEntity> {
        /**
         * Converts a domain Job to an ArangoDB JobEntity
         */
        override fun toEntity(domain: Job): JobEntity =
            JobEntity(
                id = domain.id,
                name = domain.name,
                status = domain.status,
                stage = domain.stage,
                createdAt = domain.createdAt?.let { LocalDateTime.from(it.toInstant(ZoneOffset.UTC)) },
                finishedAt = domain.finishedAt?.let { LocalDateTime.from(it.toInstant(ZoneOffset.UTC)) },
                webUrl = domain.webUrl
            )

        //TODO: add java documentation
        override fun toDomain(entity: JobEntity): Job {
            val cmt =
                Job(
                    id = entity.id,
                    name = entity.name,
                    status = entity.status,
                    stage = entity.stage,
                    createdAt = entity.createdAt?.let { LocalDateTime.from(it.toInstant(ZoneOffset.UTC)) },
                    finishedAt = entity.finishedAt?.let { LocalDateTime.from(it.toInstant(ZoneOffset.UTC)) },
                    webUrl = entity.webUrl
                )
            return cmt
        }
    }

