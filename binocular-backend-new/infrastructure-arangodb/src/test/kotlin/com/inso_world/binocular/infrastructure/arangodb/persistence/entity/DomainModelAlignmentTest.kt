package com.inso_world.binocular.infrastructure.arangodb.persistence.entity

import com.inso_world.binocular.model.Account
import com.inso_world.binocular.model.Branch
import com.inso_world.binocular.model.Build
import com.inso_world.binocular.model.Commit
import com.inso_world.binocular.model.File
import com.inso_world.binocular.model.Issue
import com.inso_world.binocular.model.Job
import com.inso_world.binocular.model.Mention
import com.inso_world.binocular.model.MergeRequest
import com.inso_world.binocular.model.Milestone
import com.inso_world.binocular.model.Note
import com.inso_world.binocular.model.Platform
import com.inso_world.binocular.model.Stats
import com.inso_world.binocular.model.User

import org.junit.jupiter.api.Test
import org.springframework.test.util.AssertionErrors.fail
import java.lang.reflect.ParameterizedType

// Test to ensure that the persistence entity classes align with the domain model classes
// Tests should fail if there are mismatches in property types or relations
// and warn if there are extra properties or relations
class DomainModelAlignmentTest {

    // Mapped pairs are based of off mappers
    private val mappedClasses = mapOf(
        Account::class.java to AccountEntity::class.java,
        Branch::class.java to BranchEntity::class.java,
        Build::class.java to BuildEntity::class.java,
        Commit::class.java to CommitEntity::class.java,
        File::class.java to FileEntity::class.java,
        Issue::class.java to IssueEntity::class.java,
        Job::class.java to JobEntity::class.java,
        Mention::class.java to MentionEntity::class.java,
        MergeRequest::class.java to MergeRequestEntity::class.java,
        Milestone::class.java to MilestoneEntity::class.java,
        Module::class.java to ModuleEntity::class.java,
        Note::class.java to NoteEntity::class.java,
        Platform::class.java to PlatformEntity::class.java,
        Stats::class.java to StatsEntity::class.java,
        User::class.java to UserEntity::class.java,
    );

    // Generic method to compare properties of given entity and model classes
    // internalModelProperties: properties that should be ignored in the comparison because they are internal to the model
    // allowedTypePairs: map of model types to entity types that are considered equivalent
    // mappedProperties: map of model property names to entity property names based on mapping rules
    fun `compare raw entity and model properties`(entity: Class<*>,
                                                  model: Class<*>,
                                                  internalModelProperties: Set<String>,
                                                  allowedTypePairs: Map<Class<out Any>, Class<out Any>>,
                                                  mappedProperties: Map<String, String>) {
        val entityProps = entity.declaredFields.associate { it.name to it.type }
        val modelProps = model.declaredFields.associate { it.name to it.type }

        // check for matching type or allowed equivalence
        modelProps.forEach { (name, modelType) ->
            val entityPropertyName = mappedProperties[name] ?: name
            val entityType = entityProps[entityPropertyName]

            if (entityType == null && name !in internalModelProperties) {
                println("⚠️ ${model.simpleName} has extra field '$name' (model type: $modelType)")
                return@forEach
            }

            val isAllowedMismatch = (allowedTypePairs[modelType] == entityType) || (mappedClasses[modelType] == entityType)
            if (entityType != modelType && !isAllowedMismatch) {
                fail("❌ Property '$name' type mismatch between ${model.simpleName} and ${entity.simpleName}: expected $modelType but got $entityType")
            }
        }

        // check that entity has extra fields that are not in model
        val extraFields = entityProps.keys - modelProps.keys
        for (extraField in extraFields) {
            val entityType = entityProps[extraField]
            if (extraField !in mappedProperties.values) {
                println("️⚠️ ${entity.simpleName} has extra field not in model: $extraField (type: $entityType)")
            }
        }

    }

    fun `compare entity and model edges`(entity: Class<*>,
                                         model: Class<*>,) {
        val entityRelations = entity.declaredFields
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
        val modelRelations = model.declaredFields
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

        // check that all model relations exist in entity relations with correct mapped types
        modelRelations.forEach { (name, modelType) ->
            val entityRelation = entityRelations.find { it.first == name }
            if (entityRelation == null) {
                // if relation does not exist, warn but do not fail
                println("⚠️ ${model.simpleName} has extra relation (edge) through field $name to model class : $modelType.)")
            }

            if (modelType is ParameterizedType && entityRelation is ParameterizedType) {
                val modelRaw = modelType.rawType as Class<*>
                val entityRaw = entityRelation.rawType as Class<*>
                val modelParam = modelType.actualTypeArguments.firstOrNull() as? Class<*>
                val entityParam = entityRelation.actualTypeArguments.firstOrNull() as? Class<*>

                // check if raw types match (List<> mapps to Set<> and vice versa)
                val rawMatch = (modelRaw == entityRaw) || (modelRaw == Set::class.java && entityRaw == List::class.java)
                // check if parameter type matches based on mapping (e.g. Issue → IssueEntity)
                val paramMatch = (mappedClasses[modelParam] == entityParam) || modelParam == entityParam

                if (!rawMatch || !paramMatch) {
                    fail("❌ Edge '$name' mismatch between ${model.simpleName} and ${entity.simpleName}: expected $modelRaw<$modelParam> but got $entityRaw<$entityParam>")
                }

            } else if (modelType is Class<*> && entityRelation is Class<*>) {
                val mappedExpected = mappedClasses[modelType]
                if (entityRelation != mappedExpected && entityRelation != modelType) {
                    fail("❌ Edge '$name' mismatch between ${model.simpleName} and ${entity.simpleName}: expected ${mappedExpected ?: modelType} but got $entityRelation")
                }
            }
        }

        // check if entity has extra relations that are not in model
        val extraRelations = entityRelations.map { it.first }.toSet() - modelRelations.map { it.first }.toSet()
        if (extraRelations.isNotEmpty()) {
            for (extraRelation in extraRelations) {
                println("⚠️ ${entity.simpleName} has extra relation (edge) through field $extraRelation to entity class : ${entityRelations.find { it.first == extraRelation }?.second}.")
            }
        }
    }

    //Test that issue entity has same property types as issue domain model
    @Test
    fun `issue entity has same raw property types as issue model`() {

        val allowedTypePairs = mapOf(
            java.time.LocalDateTime::class.java to java.util.Date::class.java
        ) as Map<Class<out Any>, Class<out Any>>

        `compare raw entity and model properties`(
            IssueEntity::class.java,
            Issue::class.java,
            emptySet(),
            allowedTypePairs,
            emptyMap()
        )
    }

    //Test that issue entity has same edges as issue domain model
    @Test
    fun `issue entity has same edges as issue model`() {
        `compare entity and model edges`(
            IssueEntity::class.java,
            Issue::class.java)
    }

    //Test that commit entity has same raw property types as commit domain model
    @Test
    fun `commit entity has same raw property types as commit model`() {
        val internalModelProperties = setOf("_parents", "_children", "_branches")

        val mappedProperties = mapOf(
            "commitDateTime" to "date"
        )

        val allowedTypePairs = mapOf(
            java.time.LocalDateTime::class.java to java.util.Date::class.java,
            java.util.Set::class.java to java.util.List::class.java
        )

        `compare raw entity and model properties`(
            CommitEntity::class.java,
            Commit::class.java,
            internalModelProperties,
            allowedTypePairs,
            mappedProperties
        )
    }

    //Test that commit entity has same edges as commit domain model
    @Test
    fun `commit entity has same edges as commit model`() {
        `compare entity and model edges`(
            CommitEntity::class.java,
            Commit::class.java);
    }

    //Test that issue entity has same property types as issue domain model
    @Test
    fun `user entity has same raw property types as user model`() {
        val internalModelProperties = setOf("_committedCommits", "_authoredCommits")

        `compare raw entity and model properties`(
            UserEntity::class.java,
            User::class.java,
            internalModelProperties,
            emptyMap(),
            emptyMap()
            )
    }

    //Test that issue entity has same edges as issue domain model
    @Test
    fun `user entity has same edges as user model`() {
        `compare entity and model edges`(
            UserEntity::class.java,
            User::class.java
        )
    }
}
