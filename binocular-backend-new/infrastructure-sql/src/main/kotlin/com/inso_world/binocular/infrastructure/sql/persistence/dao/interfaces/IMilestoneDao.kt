package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import java.util.stream.Stream

internal interface IMilestoneDao : IDao<MilestoneEntity, Long> {
    fun findAllByIssue(issue: IssueEntity): Stream<MilestoneEntity>
    fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<MilestoneEntity>
}
