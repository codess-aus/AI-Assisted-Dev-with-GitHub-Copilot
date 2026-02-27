using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public class BlueprintDecoder
{
    public static List<string> DecodeBlueprint(string filename)
    {
        string content = File.ReadAllText(filename);

        string pattern = @"\{\* (.*?) \*\}";
        MatchCollection matches = Regex.Matches(content, pattern);

        List<string> secrets = new List<string>();
        foreach (Match match in matches)
        {
            secrets.Add(match.Groups[1].Value);
        }

        return secrets;
    }

    // Enhanced version with error handling
    // If file doesn't exist, return empty list and print error message
    public static List<string> DecodeBlueprintSafe(string filename)
    {
        try
        {
            return DecodeBlueprint(filename);
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine($"Error: File '{filename}' not found.");
            return new List<string>();
        }
    }

    // Function to format and display secrets in a professional report
    // Includes header, separator lines, numbered list, and footer
    public static void DisplaySecretsReport(List<string> secrets)
    {
        // TODO: Create a separator string of '=' characters (50 chars wide)
        // TODO: Print header with title
        // TODO: Print total count of secrets
        // TODO: Loop through secrets and print each with numbering and alignment
        // TODO: Print footer separator
    }

    static void Main()
    {
        var secrets = DecodeBlueprintSafe("blueprint-data.txt");
        DisplaySecretsReport(secrets);
    }
}
