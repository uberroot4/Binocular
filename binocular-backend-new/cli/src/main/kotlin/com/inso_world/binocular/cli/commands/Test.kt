package com.inso_world.binocular.cli.commands

import com.inso_world.binocular.cli.service.CommitService
import com.inso_world.binocular.cli.service.RepositoryService
import org.jline.terminal.Terminal
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.shell.command.CommandContext
import org.springframework.shell.command.annotation.Command
import org.springframework.shell.command.annotation.Option
import org.springframework.shell.table.ArrayTableModel
import org.springframework.shell.table.BorderStyle
import org.springframework.shell.table.TableBuilder
import org.springframework.shell.table.TableModel
import java.time.format.DateTimeFormatter

@Command(
    command = ["list"],
    group = "List Commands",
)
class Test(
    @Autowired private val repositoryService: RepositoryService,
    @Autowired private val commitService: CommitService,
) {

    companion object {
        private val DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    }

    @Command(command = ["commits"])
    fun commits(
        @Option(longNames = ["page"], required = false, defaultValue = "0") page: Int,
        @Option(longNames = ["per_page"], required = false, defaultValue = "20") perPage: Int,
        commandContext: CommandContext
    ) {
        val terminal: Terminal = commandContext.terminal

        val commits = commitService.findAll(page, perPage)
        val commitList = commits.toList()

        if (commitList.isEmpty()) {
            terminal.writer().println("No commits found in the repository.")
            return
        }

        // Prepare table data
        val data = mutableListOf<Array<Any>>()

        // Add header row
        data.add(arrayOf("SHA (short)", "Author", "Date", "Message"))

        // Add commit rows
        commitList.forEach { commit ->
            val shortSha = commit.sha.take(8)
            val authorName = commit.author?.name ?: "Unknown"
            val dateStr = commit.commitDateTime?.format(DATE_FORMATTER) ?: "N/A"
            val message = commit.message?.lines()?.firstOrNull()?.take(50) ?: ""
            val messageTrimmed = if ((commit.message?.lines()?.firstOrNull()?.length ?: 0) > 50) {
                "$message..."
            } else {
                message
            }

            data.add(arrayOf(shortSha, authorName, dateStr, messageTrimmed))
        }

        // Build and render table
        val model: TableModel = ArrayTableModel(data.toTypedArray())
        val tableBuilder = TableBuilder(model)
        tableBuilder.addFullBorder(BorderStyle.fancy_light)

        terminal.writer().println(tableBuilder.build().render(120))
        terminal.writer().println("\nShowing page ${page + 1} (${commitList.size} commits)")
    }
}
