using System.Text;

public class Program
{
    const int SideLength = 100;
    const int SquaerSideLength = 10;
    
    static void Main()
    {
        bool[,] grid = new bool[SideLength, SideLength];
        int count = int.Parse(Console.ReadLine()!);
        int area = 0;

        var squaresInfo = new List<int[]>();

        for (int i = 0; i < count; i++)
        {
            squaresInfo.Add(Console.ReadLine()!.Split(' ').Select(int.Parse).ToArray());
        }

        foreach (var squarInfo in squaresInfo)
        {
            int width = squarInfo[0];
            int height = squarInfo[1];
            for (int i = height; i < height + 10; i++)
            {
                for (int j = width; j < width + 10; j++)
                {
                    if (grid[i, j]) continue;
                    grid[i, j] = true;
                    area += 1;
                }
            }
        }
        
        Console.WriteLine(area);
    }
}