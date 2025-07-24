using System.Text;

public class Program
{
    public static void Main()
    {
        int destination = int.Parse(Console.ReadLine()!);

        int nowNode = 1;
        int count = 0;

        while (nowNode < destination)
        {
            count += 1;
            nowNode += 6 * count;
        }
        
        Console.WriteLine(count + 1);
    }
}