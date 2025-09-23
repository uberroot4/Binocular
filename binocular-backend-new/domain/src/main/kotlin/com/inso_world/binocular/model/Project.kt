package com.inso_world.binocular.model

import com.inso_world.binocular.model.validation.ProjectValidation
import com.inso_world.binocular.model.validation.RepositoryValidation
import jakarta.validation.constraints.NotBlank

@ProjectValidation
@RepositoryValidation
class Project(
    var id: String? = null,
    @field:NotBlank
    val name: String,
    // val issues: MutableSet<Issue> = mutableSetOf(),
    val accounts: MutableSet<Account> = mutableSetOf(),
    val description: String? = null,
    var repo: Repository? = null,
) {
    override fun toString(): String = "Project(id=$id, name='$name', description=$description)"

    private val _issues: MutableSet<Issue> = mutableSetOf()

    val issues: MutableSet<Issue> =
        object : MutableSet<Issue> by _issues {
            override fun add(element: Issue): Boolean {
                val added = _issues.add(element)
                if (added) {
                    element.project = this@Project
                }
                return added
            }

            override fun addAll(elements: Collection<Issue>): Boolean {
                // for bulk‐adds make sure each one gets the same treatment
                var anyAdded = false
                for (e in elements) {
                    if(add(e)) anyAdded = true
                }
                return anyAdded
            }
        }
}
