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

    // Function to format and display secrets in a nice report format
    // Shows total count, numbered list, and separator line
    public static void DisplaySecretsReport(List<string> secrets)
    {
        string separator = new string('=', 40);
        Console.WriteLine(separator);
        Console.WriteLine("DECODED SECRETS REPORT");
        Console.WriteLine(separator);
        Console.WriteLine($"Found {secrets.Count} secret(s):\n");
        for (int i = 0; i < secrets.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {secrets[i]}");
        }
        Console.WriteLine(separator);
    }

    static void Main()
    {
        var secrets = DecodeBlueprintSafe("blueprint-data.txt");
        DisplaySecretsReport(secrets);
    }
}
