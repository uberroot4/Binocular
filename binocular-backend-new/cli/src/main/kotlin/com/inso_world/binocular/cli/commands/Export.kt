package com.inso_world.binocular.cli.commands


import com.inso.mapper.ExportMapper
import com.inso_world.binocular.cli.service.BranchService
import com.inso_world.binocular.cli.service.CommitService
import com.inso_world.binocular.cli.service.ExpService
import com.inso_world.binocular.cli.service.ProjectService
import com.inso_world.binocular.cli.service.RepositoryService
import com.inso_world.binocular.cli.service.UserService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.shell.command.annotation.Command
import org.springframework.shell.command.annotation.Option

@Command(
    command = ["export"],
    group = "Export Commands",
    description = "Commands for exporting repository and related data sources",
)
open class Export (
    @Autowired private val exportService: ExpService,
    @Autowired private val repositoryService: RepositoryService,
    @Autowired private val projectService: ProjectService,
    @Autowired private val branchService: BranchService,
    @Autowired private val commitService: CommitService,
    @Autowired private val userService: UserService,
    @Autowired private val expMapper: ExportMapper,
) {
    companion object {
        private var logger: Logger = LoggerFactory.getLogger(Index::class.java)
    }

    @Command(command = ["exports"])
    open fun commits(
        @Option(
            longNames = ["branch_id"],
            shortNames = ['b'],
            required = true,
            description = "ID of the branch.",
        ) branchId: String,
    ) {
        val toBeNamed = this.branchService.toBeNamed(branchId)
        expMapper.map(toBeNamed)
    }
}
// The branch to use: branches/15385, has multiple children commits
