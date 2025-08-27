package com.inso_world.binocular.infrastructure.sql.persistence.dao

import com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces.INoteDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import com.inso_world.binocular.infrastructure.sql.persistence.repository.NoteRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal class NoteDao(
    @Autowired
    private val repo: NoteRepository,
) : SqlDao<NoteEntity, Long>(),
    INoteDao {
    init {
        this.setClazz(NoteEntity::class.java)
        this.setRepository(repo)
    }

    override fun findAllByAccount(account: AccountEntity): Stream<NoteEntity> {
        return repo.findAllByAccountsContaining(account)
    }

    override fun findAllByIssue(issue: IssueEntity): Stream<NoteEntity> {
        return repo.findAllByIssuesContaining(issue)
    }

    override fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<NoteEntity> {
        return repo.findAllByMergeRequestsContaining(mergeRequest)
    }
}
