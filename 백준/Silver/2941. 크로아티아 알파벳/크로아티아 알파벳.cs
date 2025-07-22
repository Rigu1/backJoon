using System;

public class Program
{
    private static readonly string[] DataSet = new String[] { "c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z=" };

    static void Main()
    {
        string inputStr = Console.ReadLine()!;

        foreach (var data in DataSet)
        {   
            inputStr = inputStr.Replace(data, " ");
        }
        
        Console.WriteLine(inputStr.Length);
    }
}