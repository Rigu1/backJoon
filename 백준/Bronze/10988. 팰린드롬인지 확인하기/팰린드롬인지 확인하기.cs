using System;

public class Program
{
    static void Main()
    {
        string OriginalStr = Console.ReadLine()!;
        string reversedStr = string.Concat(OriginalStr.Reverse());

        if (OriginalStr == reversedStr)
        {
            Console.WriteLine(1);
            return;
        }
        Console.WriteLine(0);
    }
}