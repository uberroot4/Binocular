package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Branch
import com.inso_world.binocular.model.Build
import com.inso_world.binocular.model.Commit
import com.inso_world.binocular.model.File
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.Mention
import com.inso_world.binocular.model.Milestone
import com.inso_world.binocular.model.Note
import com.inso_world.binocular.model.Stats
import com.inso_world.binocular.model.User

import org.junit.jupiter.api.Test
import org.springframework.test.util.AssertionErrors.fail
import java.lang.reflect.ParameterizedType

// Test to ensure that the persistence entity classes align with the domain model classes
// Tests should fail if there are mismatches in property types or relations
// and warn if there are extra properties or relations
class DomainModelAlignmentTest {

    //Test that issue entity has same property types as issue domain model
    @Test
    fun `issue entity has same raw property types as issue model`() {
        val entityProps = IssueEntity::class.java.declaredFields.associate { it.name to it.type }
        val modelProps = Issue::class.java.declaredFields.associate { it.name to it.type }

        modelProps.forEach { (name, type) ->
            val entityType = entityProps[name]
            var expectedType = type

            if (type == java.time.LocalDateTime::class.java) {
                expectedType = java.util.Date::class.java
            }
            if (entityType == null) {
                println("⚠️ Issue has extra field '$name' (model type: $type)")
                return@forEach
            }

            if (entityType != expectedType) {
                fail("❌ Property '$name' type mismatch between Issue and IssueEntity: expected $expectedType but got $entityType")
            }
        }

        val extraFields = entityProps.keys - modelProps.keys
        for (extraField in extraFields) {
            println("⚠️ IssueEntity has extra field not in model: $extraField (type: ${entityProps[extraField]})")
        }
    }

    //Test that issue entity has same edges as issue domain model
    @Test
    fun `issue entity has same edges as issue model`() {

        val entityRelations = IssueEntity::class.java.declaredFields
            .filter { field ->
                val type = field.genericType
                val isRelevant = (!(type is Class<*> && type.isPrimitive)
                        && type != String::class.java
                        && type != java.util.Date::class.java)
                        && !(field.name.contains("_"))
                isRelevant
            }
            .map { field -> field.name to field.genericType }
            .toSet()

        // find all fields that don't have primitive or LocalDateTime type in commit model or have names containing"_"
        // and save their names and generic type in modelRelations
        val modelRelations = Issue::class.java.declaredFields
            .filter { field ->
                val type = field.genericType
                val isRelevant = (!(type is Class<*> && type.isPrimitive)
                        && type != String::class.java
                        && type != java.time.LocalDateTime::class.java)
                        && !(field.name.contains("_"))
                isRelevant
            }
            .map { field -> field.name to field.genericType }
            .toSet()

        val mappedClasses = mapOf(
            Mention::class.java to MentionEntity::class.java,
            Account::class.java to AccountEntity::class.java,
            Commit::class.java to CommitEntity::class.java,
            Milestone::class.java to MilestoneEntity::class.java,
            Note::class.java to NoteEntity::class.java,
            User::class.java to UserEntity::class.java,
        )

        // check that all model relations exist in entity relations with correct mapped types
        modelRelations.forEach { (name, modelType) ->
            val entityRelation = entityRelations.find { it.first == name }
            if (entityRelation == null) {
                // if relation does not exist, warn but do not fail
                println("⚠️ Issue has extra relation (edge) through field $name to model class : $modelType.)")
            }

            if (modelType is ParameterizedType && entityRelation is ParameterizedType) {
                val modelRaw = modelType.rawType as Class<*>
                val entityRaw = entityRelation.rawType as Class<*>
                val modelParam = modelType.actualTypeArguments.firstOrNull() as? Class<*>
                val entityParam = entityRelation.actualTypeArguments.firstOrNull() as? Class<*>

                // check if raw types match (List<> mapps to Set<> and vice versa)
                val rawMatch = (modelRaw == entityRaw) || (modelRaw == Set::class.java && entityRaw == List::class.java)
                // check if parameter type matches based on mapping (e.g. Issue → IssueEntity)
                val paramMatch = mappedClasses[modelParam] == entityParam || modelParam == entityParam

                if (!rawMatch || !paramMatch) {
                    fail("❌ Edge '$name' mismatch between Issue and IssueEntity: expected $modelRaw<$modelParam> but got $entityRaw<$entityParam>")
                }


            } else if (modelType is Class<*> && entityRelation is Class<*>) {
                val mappedExpected = mappedClasses[modelType]
                if (entityRelation != mappedExpected && entityRelation != modelType) {
                    fail("❌ Edge '$name' mismatch between Issue and IssueEntity: expected ${mappedExpected ?: modelType} but got $entityRelation")
                }
            }
        }
        // check if entity has extra relations that are not in model
        val extraRelations = entityRelations.map { it.first }.toSet() - modelRelations.map { it.first }.toSet()
        if (extraRelations.isNotEmpty()) {
            for (extraRelation in extraRelations) {
                println("⚠️ IssueEntity has extra relation (edge) through field $extraRelation to entity class : ${entityRelations.find { it.first == extraRelation }?.second}.")
            }
        }
    }

    //Test that commit entity has same raw property types as commit domain model
    @Test
    fun `commit entity has same raw property types as commit model`() {
        val entityProps = CommitEntity::class.java.declaredFields.associate { it.name to it.type }
        val modelProps = Commit::class.java.declaredFields.associate { it.name to it.type }

        val internalProperties = setOf("_parents", "_children", "_branches")

        // map of model property names to entity property names if they differ (based on mapper)
        val mappedProperties = mapOf(
            "commitDateTime" to "date"
        )

        val allowedTypePairs = mapOf(
            java.time.LocalDateTime::class.java to java.util.Date::class.java,
            Pair(Stats::class.java, StatsEntity::class.java),
            java.util.Set::class.java to java.util.List::class.java
        )
        // check for matching type or allowed equivalence
        modelProps.forEach { (name, modelType) ->
            val entityPropertyName = mappedProperties[name] ?: name
            val entityType = entityProps[entityPropertyName]

            if (entityType == null && name !in internalProperties) {
                println("⚠️ Commit has extra field '$name' (model type: $modelType)")
                return@forEach
            }

            val isAllowedMismatch = allowedTypePairs[modelType] == entityType
            if (entityType != modelType && !isAllowedMismatch) {
                fail("❌ Property '$name' type mismatch between Commit and CommitEntity: expected $modelType but got $entityType")
            }
        }

        // check that entity has extra fields that are not in model
        val extraFields = entityProps.keys - modelProps.keys
        for (extraField in extraFields) {
            val entityType = entityProps[extraField]
            if (extraField !in mappedProperties.values) {
                println("️⚠️ CommitEntity has extra field not in model: $extraField (type: $entityType)")
            }
        }
    }

    //Test that commit entity has same edges as commit domain model
    @Test
    fun `commit entity has same edges as commit model`() {

        val entityRelations = CommitEntity::class.java.declaredFields
            .filter { field ->
            val type = field.genericType
            val isRelevant = (!(type is Class<*> && type.isPrimitive)
                    && type != String::class.java
                    && type != java.util.Date::class.java)
                    && !(field.name.contains("_"))
            isRelevant
        }
            .map { field -> field.name to field.genericType }
            .toSet()

        // find all fields that don't have primitive or LocalDateTime type in commit model or have names containing"_"
        // and save their names and generic type in modelRelations
        val modelRelations = Commit::class.java.declaredFields
            .filter { field ->
                val type = field.genericType
                val isRelevant = (!(type is Class<*> && type.isPrimitive)
                        && type != String::class.java
                        && type != java.time.LocalDateTime::class.java)
                        && !(field.name.contains("_"))
                isRelevant
            }
            .map { field -> field.name to field.genericType }
            .toSet()

        val mappedClasses = mapOf(
            Stats::class.java to StatsEntity::class.java,
            Commit::class.java to CommitEntity::class.java,
            Branch::class.java to BranchEntity::class.java,
            Build::class.java to BuildEntity::class.java,
            File::class.java to FileEntity::class.java,
            Module::class.java to ModuleEntity::class.java,
            User::class.java to UserEntity::class.java,
            Issue::class.java to IssueEntity::class.java
        )

        // check that all model relations exist in entity relations with correctly mapped types
        modelRelations.forEach { (name, modelType) ->
            val entityRelation = entityRelations.find { it.first == name }
            if (entityRelation == null) {
                // if relation does not exist, warn but do not fail
                println("⚠️ Commit has extra relation (edge) through field $name to model class : $modelType.)")
            }

            if (modelType is ParameterizedType && entityRelation is ParameterizedType) {
                    val modelRaw = modelType.rawType as Class<*>
                    val entityRaw = entityRelation.rawType as Class<*>
                    val modelParam = modelType.actualTypeArguments.firstOrNull() as? Class<*>
                    val entityParam = entityRelation.actualTypeArguments.firstOrNull() as? Class<*>

                    // check if raw types match (List<> mapps to Set<> and vice versa)
                    val rawMatch = (modelRaw == entityRaw) || (modelRaw == Set::class.java && entityRaw == List::class.java)
                    // check if parameter type matches based on mapping (e.g. Commit → CommitEntity)
                    val paramMatch = mappedClasses[modelParam] == entityParam || modelParam == entityParam

                    if (!rawMatch || !paramMatch) {
                        fail("❌ Edge '$name' mismatch between Commit and CommitEntity: expected $modelRaw<$modelParam> but got $entityRaw<$entityParam>")
                    }


            } else if (modelType is Class<*> && entityRelation is Class<*>) {
                val mappedExpected = mappedClasses[modelType]
                if (entityRelation != mappedExpected && entityRelation != modelType) {
                    fail("❌ Edge '$name' mismatch between Commit and CommitEntity: expected ${mappedExpected ?: modelType} but got $entityRelation")
                }
            }
        }
        // check if entity has extra relations that are not in model
        val extraRelations = entityRelations.map { it.first }.toSet() - modelRelations.map { it.first }.toSet()
        if (extraRelations.isNotEmpty()) {
            for (extraRelation in extraRelations) {
                println("⚠️ CommitEntity has extra relation (edge) through field $extraRelation to entity class : ${entityRelations.find { it.first == extraRelation }?.second}.")
            }
        }
    }

    //Test that issue entity has same property types as issue domain model
    @Test
    fun `user entity has same raw property types as user model`() {
        val entityProps = UserEntity::class.java.declaredFields.associate { it.name to it.type }
        val modelProps = User::class.java.declaredFields.associate { it.name to it.type }

        val internalProperties = setOf("_committedCommits", "_authoredCommits")

        //// Map of model property names to entity property names when they differ (based on mapper)
        //val mappedProperties = mapOf(
        //     // add mapped properties if any
        //)

        //val allowedTypePairs = mapOf(
        //    // add allowed type pairs if any
        //)

        modelProps.forEach { (name, type) ->
            val entityType = entityProps[name]

            if (entityType == null && name !in internalProperties) {
                println("⚠️ User has extra field '$name' (model type: $type)")
                return@forEach
            }

            if (entityType != type && name !in internalProperties) {
                fail("❌ Property '$name' type mismatch between User and UserEntity: expected $type but got $entityType")
            }
        }

        val extraFields = entityProps.keys - modelProps.keys
        for (extraField in extraFields) {
            println("⚠️ UserEntity has extra field not in model: $extraField (type: ${entityProps[extraField]})")
        }
    }

    //Test that issue entity has same edges as issue domain model
    @Test
    fun `user entity has same edges as user model`() {

        val entityRelations = UserEntity::class.java.declaredFields
            .filter { field ->
                val type = field.genericType
                val isRelevant = (!(type is Class<*> && type.isPrimitive)
                        && type != String::class.java)
                        && !(field.name.contains("_"))
                isRelevant
            }
            .map { field -> field.name to field.genericType }
            .toSet()

        // find all fields that don't have primitive or LocalDateTime type in commit model or have names containing"_"
        // and save their names and generic type in modelRelations
        val modelRelations = User::class.java.declaredFields
            .filter { field ->
                val type = field.genericType
                val isRelevant = (!(type is Class<*> && type.isPrimitive)
                        && type != String::class.java)
                        && !(field.name.contains("_"))
                isRelevant
            }
            .map { field -> field.name to field.genericType }
            .toSet()

        val mappedClasses = mapOf(
            Commit::class.java to CommitEntity::class.java,
            Issue::class.java to IssueEntity::class.java,
            File::class.java to FileEntity::class.java,
        )

        // check that all model relations exist in entity relations with correctly mapped types
        modelRelations.forEach { (name, modelType) ->
            val entityRelation = entityRelations.find { it.first == name }
            if (entityRelation == null) {
                // if relation does not exist, warn but do not fail
                println("⚠️ User has extra relation (edge) through field $name to model class : $modelType.)")
            }

            if (modelType is ParameterizedType && entityRelation is ParameterizedType) {
                val modelRaw = modelType.rawType as Class<*>
                val entityRaw = entityRelation.rawType as Class<*>
                val modelParam = modelType.actualTypeArguments.firstOrNull() as? Class<*>
                val entityParam = entityRelation.actualTypeArguments.firstOrNull() as? Class<*>

                // check if raw types match (List<> mapps to Set<> and vice versa)
                val rawMatch = (modelRaw == entityRaw) || (modelRaw == Set::class.java && entityRaw == List::class.java)
                // check if parameter type matches based on mapping (e.g. User → UserEntity)
                val paramMatch = mappedClasses[modelParam] == entityParam || modelParam == entityParam

                if (!rawMatch || !paramMatch) {
                    fail("❌ Edge '$name' mismatch between User and UserEntity: expected $modelRaw<$modelParam> but got $entityRaw<$entityParam>")
                }


            } else if (modelType is Class<*> && entityRelation is Class<*>) {
                val mappedExpected = mappedClasses[modelType]
                if (entityRelation != mappedExpected && entityRelation != modelType) {
                    fail("❌ Edge '$name' mismatch between User and UserEntity: expected ${mappedExpected ?: modelType} but got $entityRelation")
                }
            }
        }
        // check if entity has extra relations that are not in model
        val extraRelations = entityRelations.map { it.first }.toSet() - modelRelations.map { it.first }.toSet()
        if (extraRelations.isNotEmpty()) {
            for (extraRelation in extraRelations) {
                println("⚠️ UserEntity has extra relation (edge) through field $extraRelation to entity class : ${entityRelations.find { it.first == extraRelation }?.second}.")
            }
        }
    }
}
