4. Copilot Chat vs. Agent Mode: Workflows and Integrations

Learning Objectives:

- Understand when to use Copilot inline, Chat (Ask Mode), and Agent Mode
- Practice moving the same mission between Chat and Agent Mode
- Integrate Copilot with your IDE, version control, and review flow

Teaching Structure:

- Compare Copilot inline suggestions vs. Chat vs. Agent Mode
- Demo: Use Chat to debug/iterate; use Agent Mode to scaffold end-to-end
- Lab 4: Solve the League blueprint mission with both modes

Shared Scenario: ByteStrike Blueprint Mission

- Ask Mode story: [docs/superherostory.md](docs/superherostory.md)
- Agent Mode story: [docs/league-AgentMode.md](docs/league-AgentMode.md)
- Starter decoders (tabs below) fetch `scrolls.txt`, extract secrets between `{*` and `*}`.

Language Tabs — Starter Decoder

<div class="language-tabs">
  <button class="language-tab active" data-language="python">Python</button>
  <button class="language-tab" data-language="javascript">JavaScript</button>
  <button class="language-tab" data-language="csharp">C#</button>
</div>
<div class="tab-content-container">
  <div class="tab-content active" data-language="python">

```python
import requests
import re

def retrieve_and_decode_blueprint(blueprint_url):
	"""
	Retrieves a classified League blueprint and deciphers it,
	extracting only authentic secrets hidden by The League's tech.
	"""
	try:
		response = requests.get(blueprint_url, timeout=10)
		response.raise_for_status()

		secret_pattern = re.compile(r"\{\*(.*?)\*\}")
		secrets = secret_pattern.findall(response.text)

		print("=== LEAGUE MISSION REPORT ===")
		if secrets:
			for idx, secret in enumerate(secrets, 1):
				print(f"Secret #{idx}: {secret.strip()}")
		else:
			print("No authentic secrets found. The League's decoys were strong!")

	except Exception as err:
		print(f"[ALERT] Unexpected error: {err}")

blueprint_url = "https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt"
retrieve_and_decode_blueprint(blueprint_url)
```

  </div>
  <div class="tab-content" data-language="javascript">

```javascript
async function retrieveAndDecodeBlueprint(url) {
	try {
		console.log(`Starting League mission: ${url}`);
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Fetch error: ${response.status}`);

		const secretPattern = /\{\*(.*?)\*\}/g;
		const text = await response.text();
		const secrets = [...text.matchAll(secretPattern)].map(m => m[1].trim());

		console.log("=== LEAGUE MISSION DOSSIER ===");
		if (secrets.length) secrets.forEach((s, i) => console.log(`Secret #${i + 1}: ${s}`));
		else console.log("No League secrets found. All data may be decoys!");
	} catch (error) {
		console.error("[ALERT] Mission error:", error);
	}
}

const url = "https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt";
retrieveAndDecodeBlueprint(url);
```

  </div>
  <div class="tab-content" data-language="csharp">

```csharp
using System.Net.Http;
using System.Text.RegularExpressions;

public class LeagueHQ
{
	private static async Task RetrieveAndDecodeBlueprint(string url)
	{
		Console.WriteLine($"Initiating League mission: {url}");
		try
		{
			using var httpClient = new HttpClient();
			var blueprintContent = await httpClient.GetStringAsync(url);

			var secretPattern = new Regex(@"\{\*(.*?)\*\}");
			var matches = secretPattern.Matches(blueprintContent);

			Console.WriteLine("=== LEAGUE MISSION DOSSIER ===");
			if (matches.Count == 0)
			{
				Console.WriteLine("No League secrets found. All data may be decoys!");
				return;
			}

			int count = 1;
			foreach (Match match in matches)
			{
				Console.WriteLine($"Secret #{count}: {match.Groups[1].Value.Trim()}");
				count++;
			}
		}
		catch (Exception ex)
		{
			Console.WriteLine($"[ALERT] Operation error: {ex.Message}");
		}
	}

	public static void Run()
	{
		const string url = "https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt";
		RetrieveAndDecodeBlueprint(url).Wait();
	}
}
```

  </div>
</div>

Lab 4: Solve the Mission with Chat & Agent Mode

1) Warm-up
- Open the stories for context: [docs/superherostory.md](docs/superherostory.md) (Ask Mode) and [docs/league-AgentMode.md](docs/league-AgentMode.md) (Agent Mode).
- Run the starter decoder in your chosen language.

2) Chat (Ask Mode): targeted guidance
- Ask Copilot Chat to: explain the regex, add defensive logging, and style the console output for “League HQ”.
- Request a quick improvement: retry once on network failure and time out after 10s.

3) Agent Mode: end-to-end assist
- Prompt Agent Mode to scaffold a mission-ready version: project structure, command-line args for `--source` and `--marker`, tests, and README notes.
- Let Agent Mode run; review and accept/reject proposed changes.

4) Compare and reflect
- What was faster in Chat? What was stronger in Agent Mode?
- Commit or note the preferred workflow for similar missions.