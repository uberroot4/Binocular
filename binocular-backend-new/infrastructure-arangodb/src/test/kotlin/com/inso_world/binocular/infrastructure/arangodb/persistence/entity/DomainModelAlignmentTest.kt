package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

import com.inso_world.binocular.model.Commit
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.Stats

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.test.util.AssertionErrors.fail

class DomainModelAlignmentTest {

    //Test that issue entity has same properties as issue domain model
    @Test
    fun `issue entity have same properties as issue model`() {
        val entityProps = IssueEntity::class.java.declaredFields.map { it.name }.toSet()
        val modelProps = Issue::class.java.declaredFields.map { it.name }.toSet()

        //assert that both sets are equal if they have same properties or if entityProps contains all modelProps
        assertThat(entityProps).containsAll(modelProps)

        //if there are any properties in model that are not in entity, the test should fail
        val missingProps = modelProps.subtract(entityProps)
        assertThat(missingProps).isEmpty()
    }

    //Test that issue entity has same property types as issue domain model
    @Test
    fun `issue entity have same property types as issue model`() {
        val entityProps = IssueEntity::class.java.declaredFields.associate { it.name to it.type }
        val modelProps = Issue::class.java.declaredFields.associate { it.name to it.type }
        modelProps.forEach { (name, type) ->
            val entityType = entityProps[name]
            var expectedType = type

            if (type == java.time.LocalDateTime::class.java) {
                expectedType = java.util.Date::class.java
            }
            assertThat(entityType).isEqualTo(expectedType)
        }
    }

}
