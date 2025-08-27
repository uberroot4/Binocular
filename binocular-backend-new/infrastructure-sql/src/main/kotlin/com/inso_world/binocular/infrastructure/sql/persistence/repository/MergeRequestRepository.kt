package com.inso_world.binocular.infrastructure.sql.persistence.repository

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal interface MergeRequestRepository : JpaRepository<MergeRequestEntity, Long>, JpaSpecificationExecutor<MergeRequestEntity> {
    fun findAllByAccountsContaining(account: AccountEntity): Stream<MergeRequestEntity>
    fun findAllByMilestonesContaining(milestone: MilestoneEntity): Stream<MergeRequestEntity>
    fun findAllByNotesContaining(note: NoteEntity): Stream<MergeRequestEntity>
}
