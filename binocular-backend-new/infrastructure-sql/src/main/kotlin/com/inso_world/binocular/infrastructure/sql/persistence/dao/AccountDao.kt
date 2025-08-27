package com.inso_world.binocular.infrastructure.sql.persistence.dao

import com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces.IAccountDao
import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import com.inso_world.binocular.infrastructure.sql.persistence.repository.AccountRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.util.stream.Stream

@Repository
internal class AccountDao(
    @Autowired
    private val repo: AccountRepository,
) : SqlDao<AccountEntity, Long>(),
    IAccountDao {
    init {
        this.setClazz(AccountEntity::class.java)
        this.setRepository(repo)
    }

    override fun findAllByIssue(issue: IssueEntity): Stream<AccountEntity> {
        return repo.findAllByIssuesContaining(issue)
    }

    override fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<AccountEntity> {
        return repo.findAllByMergeRequestsContaining(mergeRequest)
    }

    override fun findAllByNote(note: NoteEntity): Stream<AccountEntity> {
        return repo.findAllByNotesContaining(note)
    }
}
