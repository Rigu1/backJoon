using System;

public class Program
{
    static void Main()
    {
        List<string> strs = new List<string>();
        string? line;

        while ((line = Console.ReadLine()) != null)
        {
            strs.Add(line);
        }

        Console.WriteLine(string.Join("\n", strs));
    }
}