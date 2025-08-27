package com.inso_world.binocular.infrastructure.sql.persistence.dao

import com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces.IIssueDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.UserEntity
import com.inso_world.binocular.infrastructure.sql.persistence.repository.IssueRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal class IssueDao(
    @Autowired
    private val repo: IssueRepository,
) : SqlDao<IssueEntity, Long>(),
    IIssueDao {
    init {
        this.setClazz(IssueEntity::class.java)
        this.setRepository(repo)
    }

    override fun findAllByUser(user: UserEntity): Stream<IssueEntity> {
        return repo.findAllByUsersContaining(user)
    }
}
