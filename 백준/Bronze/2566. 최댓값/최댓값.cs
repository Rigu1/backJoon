using System;
using System.Numerics;
using System.Text;

public class MaxInfo
{
    public int MaxValue {get; set;}
    public int Y { get; set; }
    public int X { get; set; }
}

public class Program
{
    static void Main()
    {
        var maxInfo = new MaxInfo()
        {
            MaxValue = -1,
        };
        
        for (int i = 0; i < 9; i++)
        {
            int[] arr = Console.ReadLine()!.Split(' ').Select(int.Parse).ToArray();
            
            for (int j = 0; j < arr.Length; j++)
            {
                if (arr[j] > maxInfo.MaxValue)
                {
                    maxInfo.MaxValue = arr[j];
                    maxInfo.Y = i + 1;
                    maxInfo.X = j + 1;
                }
            }
        }
        
        Console.WriteLine($"{maxInfo.MaxValue}\n{maxInfo.Y} {maxInfo.X}");
    }
}