const fs = require("fs");

function decodeBlueprint(filename) {
    const content = fs.readFileSync(filename, "utf8");
    const pattern = /\{\* (.*?) \*\}/g;
    const matches = [...content.matchAll(pattern)];
    const secrets = matches.map((match) => match[1]);
    return secrets;
}

// Enhanced version with error handling
// If file doesn't exist, return empty array and print error message
function decodeBlueprintSafe(filename) {
    try {
        return decodeBlueprint(filename);
    } catch (err) {
        console.log(`Error: File '${filename}' not found.`);
        return [];
    }
}

// Function to format and display secrets in a professional report
// Includes header, separator lines, numbered list, and footer
function displaySecretsReport(secrets) {
    // TODO: Create a separator string of '=' characters (50 chars wide)
    // TODO: Print header with title
    // TODO: Print total count of secrets
    // TODO: Loop through secrets and print each with numbering and alignment
    // TODO: Print footer separator
}

// Use it
const secrets = decodeBlueprintSafe("blueprint-data.txt");
displaySecretsReport(secrets);

module.exports = {
    decodeBlueprint,
    decodeBlueprintSafe,
    displaySecretsReport,
};
