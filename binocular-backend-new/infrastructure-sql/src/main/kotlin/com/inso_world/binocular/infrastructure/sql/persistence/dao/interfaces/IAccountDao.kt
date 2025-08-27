package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import java.util.stream.Stream

internal interface IAccountDao : IDao<AccountEntity, Long> {
    fun findAllByIssue(issue: IssueEntity): Stream<AccountEntity>
    fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<AccountEntity>
    fun findAllByNote(note: NoteEntity): Stream<AccountEntity>
}
