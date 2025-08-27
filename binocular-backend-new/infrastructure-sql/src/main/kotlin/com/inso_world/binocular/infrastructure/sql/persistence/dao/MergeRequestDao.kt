package com.inso_world.binocular.infrastructure.sql.persistence.dao

import com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces.IMergeRequestDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import com.inso_world.binocular.infrastructure.sql.persistence.repository.MergeRequestRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal class MergeRequestDao(
    @Autowired
    private val repo: MergeRequestRepository,
) : SqlDao<MergeRequestEntity, Long>(),
    IMergeRequestDao {
    init {
        this.setClazz(MergeRequestEntity::class.java)
        this.setRepository(repo)
    }

    override fun findAllByAccount(account: AccountEntity): Stream<MergeRequestEntity> {
        return repo.findAllByAccountsContaining(account)
    }

    override fun findAllByMilestone(milestone: MilestoneEntity): Stream<MergeRequestEntity> {
        return repo.findAllByMilestonesContaining(milestone)
    }

    override fun findAllByNote(note: NoteEntity): Stream<MergeRequestEntity> {
        return repo.findAllByNotesContaining(note)
    }
}
