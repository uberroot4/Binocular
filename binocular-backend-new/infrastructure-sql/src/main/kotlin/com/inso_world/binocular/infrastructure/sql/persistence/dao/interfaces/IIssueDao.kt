package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.UserEntity
import java.util.stream.Stream

internal interface IIssueDao : IDao<IssueEntity, Long> {
    fun findAllByUser(user: UserEntity): Stream<IssueEntity>
}
