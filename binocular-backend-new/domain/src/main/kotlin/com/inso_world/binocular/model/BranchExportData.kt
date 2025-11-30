package com.inso_world.binocular.model

data class BranchExportData(
    // Branch Information
    val branchName: String,
    val latestCommitSha: String,

    // Parent/Latest Commit Information (Embedded)
    val parentCommitId: String,
    val parentCommitterId: String,

    // Child Commits Information (Embedded List)
    val childrenCommits: List<ChildCommitDetail>
)

// A simple inner class or nested data class for the repeating child items
data class ChildCommitDetail(
    val commitId: String,
    val committerId: String
)
