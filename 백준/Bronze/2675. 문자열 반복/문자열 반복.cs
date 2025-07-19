using System;

public class Program
{
    static void Main()
    {
        int numTestCases = int.Parse(Console.ReadLine()!);
        var testCases = new List<(int RepCount, string OriginalString)>();
        
        for (int i = 0; i < numTestCases; i++)
        {
            string[] parts = Console.ReadLine()!.Split(' ');
            testCases.Add((int.Parse(parts[0]),  parts[1]));
        }

        foreach (var testCase in testCases)
        {
            Console.WriteLine(RepString(testCase.RepCount, testCase.OriginalString));
        }
    }

    static string RepString(int rep, string str)
    {
        List<string> result =  new List<string>();
        foreach (char ch in str)
        {
            result.Add(new string(ch, rep));
        }

        return string.Concat(result);
    }
}