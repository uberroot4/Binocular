package com.inso_world.binocular.infrastructure.sql.persistence.repository

import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal interface MilestoneRepository : JpaRepository<MilestoneEntity, Long>, JpaSpecificationExecutor<MilestoneEntity> {
    fun findAllByIssuesContaining(issue: IssueEntity): Stream<MilestoneEntity>
    fun findAllByMergeRequestsContaining(mergeRequest: MergeRequestEntity): Stream<MilestoneEntity>
}
