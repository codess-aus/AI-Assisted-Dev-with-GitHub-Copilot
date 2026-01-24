# Part 4: Copilot Chat vs. Agent Mode

## Where ByteStrike Stands

You've helped ByteStrike build a working blueprint decoder. It fetches encrypted data from The League's remote servers, extracts secrets hidden between `{*` and `*}` markers, and logs them cleanly. The code is documented, tested, and ready—sort of.

But now the mission evolves. The League has realized they need **faster iteration** on the decoder. New requirements arrive daily: support for multiple secret formats, better error recovery, UI improvements, even CLI flags for advanced operators.

**This is where you learn the difference between two ways of working with Copilot:**
- **Chat Mode (Ask Mode):** You stay in control. Ask targeted questions, get targeted answers. Great for quick improvements and understanding.
- **Agent Mode (Autonomous Mode):** You set a goal; Copilot explores files, makes multiple edits, and runs tests. Faster for big refactors—but requires review.

## Learning Objectives

- Know when to use Chat vs Agent Mode for different ByteStrike missions
- Practice both workflows on the same goal (decoder improvements)
- Understand the risks and rewards of autonomous mode
- Learn to review and validate Agent Mode's work before shipping

## Mode Selection Guide

| Scenario | Chat (Ask) | Agent (Autonomous) |
|----------|-----------|-------------------|
| **Add a single feature** (e.g., timeout + retry) | ✓ Best | Over-kill |
| **Debug or explain code** (e.g., why regex fails) | ✓ Best | Not applicable |
| **Refactor an entire file** (e.g., clean up all code style) | Possible but slow | ✓ Best |
| **Build + test + scaffold** (e.g., full CLI with tests) | Very tedious | ✓ Best |
| **Many files, many changes** (e.g., add new module to project) | Manual coordination needed | ✓ Best |

## Your Starter: The League's Blueprint Decoder

Here's where ByteStrike is now. It works, but it's basic. You'll improve it using Chat and Agent modes.

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