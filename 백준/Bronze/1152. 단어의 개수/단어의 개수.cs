using System;

public class Program
{
    static void Main()
    {
        string[] numTestCases = Console.ReadLine()!.Trim().Split(' ');

        if (numTestCases.Length == 1 && numTestCases[0] == "")
        {
            Console.WriteLine(0);
        }else
        {
            Console.WriteLine(numTestCases.Length);
        }
    }
}