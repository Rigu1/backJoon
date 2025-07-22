using System;

public class Program
{
    static void Main()
    {
        int len = int.Parse(Console.ReadLine()!);
        int count = 0;

        for (int i = 0; i < len; i++)
        {
            if (Temp(Console.ReadLine()!))
            {
                count += 1;
            }
        }
        
        Console.WriteLine(count);
    }

    static bool Temp(string inputStr)
    {
        var history = new HashSet<char>();
        
        for (int i = 0; i < inputStr.Length; i++)
        {
            if (history.Contains(inputStr[i]) && inputStr[i - 1] != inputStr[i])
            {
                return false;
            }
            
            history.Add(inputStr[i]);
        }

        return true;
    }
}