 package com.inso_world.binocular.infrastructure.sql.persistence.entity

 import com.inso_world.binocular.model.Platform
 import jakarta.persistence.Column
 import jakarta.persistence.Entity
 import jakarta.persistence.EnumType
 import jakarta.persistence.Enumerated
 import jakarta.persistence.GeneratedValue
 import jakarta.persistence.GenerationType
 import jakarta.persistence.Id
 import jakarta.persistence.Table
 import java.util.Objects

 /**
 * SQL-specific Account entity.
 */
 @Entity
 @Table(name = "accounts")
 data class AccountEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    var id: Long? = null,
    val gid: String,
    @Enumerated(EnumType.STRING)
    val platform: Platform,
    val login: String,
    var name: String? = null,
    @Column(name = "avatar_url")
    var avatarUrl: String? = null,
    var url: String? = null,
 //    @ManyToMany
 //    @JoinTable(
 //        name = "issue_account_connections",
 //        joinColumns = [JoinColumn(name = "account_id")],
 //        inverseJoinColumns = [JoinColumn(name = "issue_id")],
 //    )
 //    var issues: MutableList<IssueEntity> = mutableListOf(),
 //    @ManyToMany
 //    @JoinTable(
 //        name = "merge_request_account_connections",
 //        joinColumns = [JoinColumn(name = "account_id")],
 //        inverseJoinColumns = [JoinColumn(name = "merge_request_id")],
 //    )
 //    var mergeRequests: MutableList<MergeRequestEntity> = mutableListOf(),
 //    @ManyToMany
 //    @JoinTable(
 //        name = "note_account_connections",
 //        joinColumns = [JoinColumn(name = "account_id")],
 //        inverseJoinColumns = [JoinColumn(name = "note_id")],
 //    )
 //    var notes: MutableList<NoteEntity> = mutableListOf(),
     ) : AbstractEntity() {

     override fun uniqueKey(): String {
         return "${this.platform}:${this.gid}"
     }

     override fun equals(other: Any?): Boolean {
         if (this === other) return true
         if (other !is AccountEntity) return false
         return this.uniqueKey() == other.uniqueKey()
     }

     override fun hashCode(): Int = Objects.hashCode("${this.platform}:${this.gid}")

 }
