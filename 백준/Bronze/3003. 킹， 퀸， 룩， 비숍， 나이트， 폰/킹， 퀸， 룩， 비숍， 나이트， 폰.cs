using System;

public class Program
{
    static void Main()
    {
        int[] tagetStateOfChess = new int[6] { 1, 1, 2, 2, 2, 8 };
        int[] nowStateOfChess = Array.ConvertAll(Console.ReadLine()!.Split(' '), int.Parse);
        List<int> needStateOfChess = new List<int>();

        for (int i = 0; i < tagetStateOfChess.Length; i++)
        {
            needStateOfChess.Add(tagetStateOfChess [i] - nowStateOfChess[i]);
        }
        
        Console.WriteLine(string.Join(' ',  needStateOfChess));
    }
}