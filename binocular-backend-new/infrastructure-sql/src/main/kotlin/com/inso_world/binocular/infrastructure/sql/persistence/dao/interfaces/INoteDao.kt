package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import java.util.stream.Stream

internal interface INoteDao : IDao<NoteEntity, Long> {
    fun findAllByAccount(account: AccountEntity): Stream<NoteEntity>
    fun findAllByIssue(issue: IssueEntity): Stream<NoteEntity>
    fun findAllByMergeRequest(mergeRequest: MergeRequestEntity): Stream<NoteEntity>
}
