package com.inso.mapper

import com.inso_world.binocular.model.BranchExportData

class ExportMapper {

    fun map(exportData: BranchExportData) {
    // 4. --- VERIFICATION STEP (Add this line) ---
        println("\n--- VERIFIED EXPORT DATA STRUCTURE (DTO) ---")
        println(exportData)
        println("------------------------------------------\n")
    // ----------------------------------------------------
    }
}
