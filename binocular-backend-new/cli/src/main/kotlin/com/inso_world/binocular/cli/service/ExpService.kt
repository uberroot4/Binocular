package com.inso_world.binocular.cli.service

import com.inso_world.binocular.core.service.ProjectInfrastructurePort
import com.inso_world.binocular.model.Project
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class ExpService (
    @Autowired private val projectInfrastructurePort: ProjectInfrastructurePort,
) {
    private val logger: Logger = LoggerFactory.getLogger(ProjectService::class.java)

    fun findByName(name: String): Project? = projectInfrastructurePort.findByName(name)

    fun deleteAll() {
        this.projectInfrastructurePort.deleteAll()
    }

    @Transactional
    fun getProject(name: String): Project {
        val find = this.findByName(name)
        if (find == null) {
            logger.info("Project '$name' does not exists, creating new project")
            return this.projectInfrastructurePort.create(
                Project(
                    name = name,
                ),
            )
        } else {
            logger.info("Project '$name' already exists")
            return find
        }
    }

}
