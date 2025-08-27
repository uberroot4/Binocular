package com.inso_world.binocular.infrastructure.sql.persistence.dao

import com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces.IMilestoneDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.repository.MilestoneRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal class MilestoneDao(
    @Autowired
    private val repo: MilestoneRepository,
) : SqlDao<MilestoneEntity, Long>(),
    IMilestoneDao {
    init {
        this.setClazz(MilestoneEntity::class.java)
        this.setRepository(repo)
    }

    override fun findAllByIssue(issue: IssueEntity): Stream<MilestoneEntity> {
        return repo.findAllByIssuesContaining(issue)
    }

    override fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<MilestoneEntity> {
        return repo.findAllByMergeRequestsContaining(mergeRequest)
    }
}
