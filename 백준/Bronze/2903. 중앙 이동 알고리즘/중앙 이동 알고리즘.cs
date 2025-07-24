using System.Text;

public class Program
{
    public static void Main()
    {
        int rep = int.Parse(Console.ReadLine()!);
        int numOfPointAtSingleSide = (int)Math.Pow(2, rep) + 1;
        
        Console.WriteLine((int)Math.Pow(numOfPointAtSingleSide, 2));
    }
}