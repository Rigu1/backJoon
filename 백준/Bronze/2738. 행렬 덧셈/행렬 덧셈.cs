using System;

public class Program
{
    static void Main()
    {
        var info = Console.ReadLine()!.Split(' ').Select(int.Parse).ToArray();
        int rows = info[0];
        int cols = info[1];

        List<int[]> processionA = GetLine(rows);
        List<int[]> processionB = GetLine(rows);

        int[,] resultProcession = new int[rows, cols];

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                int elementA = processionA[i][j];
                int elementB = processionB[i][j];
                
                resultProcession[i, j] = elementA + elementB;

                Console.Write(resultProcession[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    static List<int[]> GetLine(int len)
    {
        var procession = new List<int[]> {};

        for (int i = 0; i < len; i++)
        {
            procession.Add(Console.ReadLine()!.Split(' ').Select(int.Parse).ToArray());
        }
        return procession;
    }
}