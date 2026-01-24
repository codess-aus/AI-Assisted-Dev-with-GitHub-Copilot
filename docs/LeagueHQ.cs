using System.Net.Http;
using System.Text.RegularExpressions;

// This class runs the superhero mission - fetching and decoding The League's blueprints!
public class LeagueHQ
{
    // Securely retrieves and extracts authentic secrets from the League's DataVault blueprint
    private static async Task RetrieveAndDecodeBlueprint(string url)
    {
        Console.WriteLine($"Initiating League mission: Accessing blueprint by secure channel {url}");
        try
        {
            using (var httpClient = new HttpClient())
            {
                // Download the blueprint transmission
                string blueprintContent = await httpClient.GetStringAsync(url);

                // Pattern Recognition Protocol: locate secrets marked by {* and *}
                Regex secretPattern = new Regex(@"\{\*(.*?)\*\}");
                MatchCollection matches = secretPattern.Matches(blueprintContent);

                // Mission dossier: Output only authentic League secrets
                Console.WriteLine("=== LEAGUE MISSION DOSSIER ===");
                int count = 1;
                foreach (Match match in matches)
                {
                    // Formatting secret as part of superhero mission log
                    Console.WriteLine($"Secret #{count}: {match.Groups[1].Value.Trim()}");
                    count++;
                }

                if (count == 1)
                {
                    Console.WriteLine("No League secrets found. All data may be decoys!");
                }
            }

        }
        catch (Exception ex)
        {
            // Alerts suited for a superhero tech mission
            Console.WriteLine($"[ALERT] Operation error: {ex.Message}");
        }
    }

    public static void Run()
    {
        // URL for the League's DataVault blueprints (use provided source, fits superhero context)
        string url = "https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt";
        RetrieveAndDecodeBlueprint(url).Wait();
    }
}