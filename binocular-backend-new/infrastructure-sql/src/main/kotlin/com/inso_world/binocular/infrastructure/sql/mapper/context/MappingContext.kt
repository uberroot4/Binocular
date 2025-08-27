package com.inso_world.binocular.infrastructure.sql.mapper.context

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.BranchEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.BuildEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.CommitEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.FileEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.IssueEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MergeRequestEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.MilestoneEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.ModuleEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.NoteEntity
import com.inso_world.binocular.infrastructure.sql.persistence.entity.UserEntity
import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Branch
import com.inso_world.binocular.model.Build
import com.inso_world.binocular.model.Commit
import com.inso_world.binocular.model.File
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Milestone
import com.inso_world.binocular.model.Module
import com.inso_world.binocular.model.Note
import com.inso_world.binocular.model.User
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Scope
import org.springframework.context.annotation.ScopedProxyMode
import org.springframework.stereotype.Component
import java.util.concurrent.ConcurrentHashMap

@Component
@Scope("mapping", proxyMode = ScopedProxyMode.TARGET_CLASS)
internal class MappingContext {
    private val logger: Logger = LoggerFactory.getLogger(MappingContext::class.java)

    val domain = DomainMaps()

    val entity = EntityMaps()

    /** Clear all maps in this context */
    fun clear() {
        logger.debug("Clearing mapping context")
        domain.run {
            user.clear()
            commit.clear()
            branch.clear()
            issue.clear()
            note.clear()
            mergeRequest.clear()
            milestone.clear()
            account.clear()
            build.clear()
            module.clear()
            file.clear()
        }
        entity.run {
            user.clear()
            commit.clear()
            branch.clear()
            issue.clear()
            note.clear()
            mergeRequest.clear()
            milestone.clear()
            account.clear()
            build.clear()
            module.clear()
            file.clear()
        }
        logger.debug("Mapping context cleared")
    }

    class DomainMaps {
        val user = ConcurrentHashMap<String, User>()
        val commit = ConcurrentHashMap<String, Commit>()
        val branch = ConcurrentHashMap<String, Branch>()
        val issue = ConcurrentHashMap<String, Issue>()
        val note = ConcurrentHashMap<String, Note>()
        val mergeRequest = ConcurrentHashMap<String, MergeRequest>()
        val milestone = ConcurrentHashMap<String, Milestone>()
        val account = ConcurrentHashMap<String, Account>()
        val build = ConcurrentHashMap<String, Build>()
        val module = ConcurrentHashMap<String, Module>()
        val file = ConcurrentHashMap<String, File>()
    }

    class EntityMaps {
        val user = ConcurrentHashMap<String, UserEntity>()
        val commit = ConcurrentHashMap<String, CommitEntity>()
        val branch = ConcurrentHashMap<String, BranchEntity>()
        val issue = ConcurrentHashMap<String, IssueEntity>()
        val note = ConcurrentHashMap<String, NoteEntity>()
        val mergeRequest = ConcurrentHashMap<String, MergeRequestEntity>()
        val milestone = ConcurrentHashMap<String, MilestoneEntity>()
        val account = ConcurrentHashMap<String, AccountEntity>()
        val build = ConcurrentHashMap<String, BuildEntity>()
        val module = ConcurrentHashMap<String, ModuleEntity>()
        val file = ConcurrentHashMap<String, FileEntity>()
    }
}
