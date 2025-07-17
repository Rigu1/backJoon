using System;

public class Program
{
    public static void Main()
    {
        int t = int.Parse(Console.ReadLine()!);
        List<string> result = new List<string>();
        
        for (int i = 0; i < t; i++)
        {
            string inputStr = Console.ReadLine()!;
            result.Add(String.Concat(inputStr[0], inputStr[^1]));
        }
        
        Console.WriteLine(string.Join('\n', result));
    }
}