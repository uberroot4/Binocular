package com.inso_world.binocular.cli.service;

import com.inso_world.binocular.infrastructure.arangodb.service.BranchInfrastructurePortImpl;
import com.inso_world.binocular.model.Branch
import com.inso_world.binocular.model.BranchExportData
import com.inso_world.binocular.model.ChildCommitDetail
import com.inso_world.binocular.model.Commit
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class BranchService (
    @Autowired private val branchPort:BranchInfrastructurePortImpl,
    @Autowired private val commitService: CommitService,
    @Autowired private val userService: UserService,
) {

    fun getBranchExportData(branchId: String): BranchExportData {
        // 1. Fetch the Branch (nullable)
        val branch = getBranch(branchId)

        // Use 'let' to process only if 'branch' is not null
        return branch?.let { b ->
            // Use local, immutable variables for clarity
            val latestCommitSha = b.latestCommit ?: return@let createEmptyExportData(b.name, "No SHA")

            // Fetch Commit (returns Commit? if findBySha is correctly defined to return nullable)
            val parentCommit = getLatestCommit(b) ?: return@let createEmptyExportData(b.name, latestCommitSha)

            val latestCommitId = parentCommit.id ?: return@let createEmptyExportData(b.name, latestCommitSha)

            val parentCommitterId = userService.findUserByCommit(latestCommitId).firstOrNull()?.id ?: "N/A"

            // Build children details
            val childrenDetails = commitService.findChildrenOfCommit(latestCommitId).map { childCommit ->
                val childCommitId = childCommit.id ?: "N/A"
                val childCommitterId = userService.findUserByCommit(childCommitId).firstOrNull()?.id ?: "N/A"

                ChildCommitDetail(
                    commitId = childCommitId,
                    committerId = childCommitterId
                )
            }

            // Return the fully assembled DTO
            BranchExportData(
                branchName = b.name,
                latestCommitSha = latestCommitSha,
                parentCommitId = latestCommitId,
                parentCommitterId = parentCommitterId,
                childrenCommits = childrenDetails
            )
        } ?: createEmptyExportData("Branch ID: $branchId", "Branch not found")
        // If 'branch' was null, return the default/empty DTO here.
    }

    private fun getBranch(branchId: String): Branch? {
        val branch = branchPort.findById(branchId)
        return branch
    }

    private fun getLatestCommit(branch: Branch): Commit? {
        val commit = commitService.findBySha(branch.latestCommit ?: "N/A")
        return commit
    }

    // --- Helper function for returning a predictable empty DTO ---
    private fun createEmptyExportData(branchName: String, latestCommitSha: String): BranchExportData {
        return BranchExportData(
            branchName = branchName,
            latestCommitSha = latestCommitSha,
            parentCommitId = "N/A",
            parentCommitterId = "N/A",
            childrenCommits = emptyList()
        )
    }
}
