package mapper

import com.fasterxml.jackson.databind.ObjectMapper
import com.inso_world.binocular.model.BranchExportData
import org.springframework.stereotype.Service
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper


@Service
class ExportMapper {
    private val objectMapper: ObjectMapper = jacksonObjectMapper()

    fun map(exportData: BranchExportData): String {
        // 1. Convert the Kotlin Data Class to a Map (or JSON Node)
        // This is safer than converting directly to String if we need to modify it.
        val dataMap = objectMapper.convertValue(exportData, Map::class.java) as Map<String, Any>

        // 2. Create the final map including JSON-LD fields
        val jsonLdMap = mutableMapOf<String, Any>()

        // 3. Add the mandatory JSON-LD fields
        jsonLdMap["@context"] = "https://schemas.inso-world.com/binocular/v1/context.jsonld"
        jsonLdMap["@id"] = "binocular:branch:${exportData.branchName}/export/${exportData.latestCommitSha}"
        jsonLdMap["@type"] = "BranchExport"

        // 4. Merge the DTO data into the JSON-LD map
        jsonLdMap.putAll(dataMap)

        // 5. Convert the final enriched Map back into a formatted JSON string
        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonLdMap)
    }
}
