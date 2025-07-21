using System;

public class Program
{
    static void Main()
    {
        char[] inputChars = Console.ReadLine()!.ToCharArray();
        int sumTime = 0;

        foreach (char ch in inputChars)
        {
            int index = ch - 'A';
            sumTime += CalculationTime(index);
        }
        
        Console.WriteLine(sumTime);
    }

    static int CalculationTime (int index)
    {
        if (index < 15) return (index / 3) + 3;
        if (index < 19) return 8;
        if (index < 22) return 9;
        return 10;
    }
}