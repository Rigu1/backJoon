using System;

public class Program
{
    public static void Main()
    {
        int input = int.Parse(Console.ReadLine()!);
        string str = Console.ReadLine()!;

        int sum = 0;
        foreach (char c in str)
        {
            sum += int.Parse(c.ToString()!);
        }
        
        Console.WriteLine(sum);
    }
}