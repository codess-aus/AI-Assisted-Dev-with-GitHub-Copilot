5. Security and Quality: Guardrails for AI-Generated Code

Learning Objectives:

- Spot and patch security/quality gaps in AI-generated code
- Add guardrails: validation, timeouts, retries, logging, and tests
- Practice secure-by-default prompting for Copilot Chat and Agent Mode

Teaching Structure:

- Show “unsafe” patterns (no timeouts, unvalidated URLs, silent failures)
- Checklist: validation, least-privilege IO, backoff, bounded output, tests
- Lab 5: Harden the ByteStrike blueprint decoders in all three languages

Guardrail Checklist for the League Mission

- Validate inputs: URL format and allowed hosts
- Network hygiene: timeouts, retry with backoff, user-agent, circuit-breaker note
- Regex safety: precompile, non-greedy, cap matches/length
- Output bounds: limit secrets printed, truncate long entries
- Observability: structured logging and clear errors
- Testing: golden-path, failure-path, and empty-data cases

Language Tabs — Start from these decoders

<div class="language-tabs">
	<button class="language-tab active" data-language="python">Python</button>
	<button class="language-tab" data-language="javascript">JavaScript</button>
	<button class="language-tab" data-language="csharp">C#</button>
</div>
<div class="tab-content-container">
	<div class="tab-content active" data-language="python">

```python
import re
import requests

SECRET_PATTERN = re.compile(r"\{\*(.*?)\*\}")

def retrieve_and_decode_blueprint(blueprint_url, max_secrets=10):
		# TODO: validate URL, add retries/backoff, and cap total bytes
		response = requests.get(blueprint_url, timeout=10)
		response.raise_for_status()

		secrets = SECRET_PATTERN.findall(response.text)[:max_secrets]
		if not secrets:
				print("No authentic secrets found. The League's decoys were strong!")
				return

		for idx, secret in enumerate(secrets, 1):
				print(f"Secret #{idx}: {secret.strip()[:200]}")
```

	</div>
	<div class="tab-content" data-language="javascript">

```javascript
const secretPattern = /\{\*(.*?)\*\}/g;

async function retrieveAndDecodeBlueprint(url, maxSecrets = 10) {
		// TODO: validate URL/host, add timeout + retry with backoff
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 10000);

		const response = await fetch(url, { signal: controller.signal });
		clearTimeout(timeout);
		if (!response.ok) throw new Error(`Fetch error: ${response.status}`);

		const text = await response.text();
		const secrets = [...text.matchAll(secretPattern)].map(m => m[1].trim()).slice(0, maxSecrets);

		if (!secrets.length) {
				console.log("No League secrets found. All data may be decoys!");
				return;
		}

		secrets.forEach((secret, idx) => console.log(`Secret #${idx + 1}: ${secret.slice(0, 200)}`));
}
```

	</div>
	<div class="tab-content" data-language="csharp">

```csharp
using System.Net.Http;
using System.Text.RegularExpressions;

public class LeagueHQ
{
		private static readonly Regex SecretPattern = new("\{\*(.*?)\*\}", RegexOptions.Compiled);

		private static async Task RetrieveAndDecodeBlueprint(string url, int maxSecrets = 10)
		{
				// TODO: validate URL/host, add HttpClient timeout + retry policy
				using var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(10) };
				var blueprintContent = await httpClient.GetStringAsync(url);

				var matches = SecretPattern.Matches(blueprintContent);
				if (matches.Count == 0)
				{
						Console.WriteLine("No League secrets found. All data may be decoys!");
						return;
				}

				int printed = 0;
				foreach (Match match in matches)
				{
						if (printed >= maxSecrets) break;
						Console.WriteLine($"Secret #{printed + 1}: {match.Groups[1].Value.Trim().Substring(0, Math.Min(200, match.Groups[1].Value.Length))}");
						printed++;
				}
		}
}
```

	</div>
</div>

Lab 5: Harden the Blueprint Decoders

1) Threat-model quickly
- What can go wrong? (unbounded input, slow network, hostile URL, huge secrets)

2) Add guardrails in your language
- Implement URL/host validation, timeouts, and a 2-try exponential backoff.
- Cap bytes read, limit secrets to 10, and truncate to 200 chars.
- Add structured logging for success/failure and reason codes.

3) Test and verify
- Write one happy-path test and one failure-path test (timeout/404).
- In Agent Mode, ask it to propose tests; in Chat, ask for a quick refactor.

4) Share learnings
- Capture the guardrails you added and which were easiest/hardest with Copilot.