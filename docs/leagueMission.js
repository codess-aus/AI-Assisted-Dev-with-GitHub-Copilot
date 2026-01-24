// Node.js 17.5+ has fetch built-in. If not, run: npm install node-fetch

// This mission retrieves and deciphers The League's encrypted blueprint transmission via CyberGrid
async function retrieveAndDecodeBlueprint(url) {
    try {
        console.log(`Starting League mission: Retrieving blueprint from secure channel ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`[ALERT] CyberGrid fetch error! Status: ${response.status}`);
        }

        const blueprintContent = await response.text();

        // Pattern Recognition Protocol: Extract all secrets between {* and *}
        const secretPattern = /\{\*(.*?)\*\}/g;
        const secrets = [];
        let match;

        while ((match = secretPattern.exec(blueprintContent)) !== null) {
            secrets.push(match[1].trim());
        }

        // Display League Mission Dossier with all discovered secrets
        console.log("=== LEAGUE MISSION DOSSIER ===");
        if (secrets.length) {
            secrets.forEach((secret, idx) => {
                console.log(`Secret #${idx + 1}: ${secret}`);
            });
        } else {
            console.log("No League secrets found. All data may be decoys!");
        }

    } catch (error) {
        console.error("[ALERT] Mission error:", error);
    }
}

// League's DataVault blueprint URL (unchanged, superhero context)
const url = 'https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt';

// Begin the League HQ mission!
retrieveAndDecodeBlueprint(url);