package com.inso_world.binocular.infrastructure.arangodb.persistence.repository

import com.arangodb.springframework.annotation.Query
import com.arangodb.springframework.repository.ArangoRepository
import com.inso_world.binocular.infrastructure.arangodb.persistence.entity.CommitEntity
import org.springframework.stereotype.Repository

@Repository
interface CommitRepository : ArangoRepository<CommitEntity, String> {

    @Query(
        """
    FOR commit IN `commits`
        FILTER commit.sha == @sha
        RETURN commit    
""",
    )
    fun findBySha(sha: String): CommitEntity?
}
