package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import java.util.stream.Stream

internal interface IMergeRequestDao : IDao<MergeRequestEntity, Long> {
    fun findAllByAccount(account: AccountEntity): Stream<MergeRequestEntity>
    fun findAllByMilestone(milestone: MilestoneEntity): Stream<MergeRequestEntity>
    fun findAllByNote(note: NoteEntity): Stream<MergeRequestEntity>
}
