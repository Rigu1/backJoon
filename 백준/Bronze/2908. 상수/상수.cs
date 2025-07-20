using System;

public class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine()!.Split(' ');
        int num1 = int.Parse(string.Concat(parts[0].Reverse()));
        int num2 = int.Parse(string.Concat(parts[1].Reverse()));
        
        if (num1 > num2)
        {
            Console.WriteLine(num1);
        }
        else
        {
            Console.WriteLine(num2);
        }
    }
}