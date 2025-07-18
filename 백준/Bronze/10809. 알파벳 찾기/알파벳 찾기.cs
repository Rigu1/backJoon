using System;

public class Program
{
    static void Main()
    {
        string inputStr = Console.ReadLine()!;
        int[] arr = new int[26];
        Array.Fill(arr, -1);

        for (int i = 0; i < inputStr.Length; i++)
        { 
            int index = inputStr[i] - 'a';
            if (arr[index] == -1)
            {
                arr[index] = i;
            }
        }
        Console.WriteLine(string.Join(" ", arr));
    }
}