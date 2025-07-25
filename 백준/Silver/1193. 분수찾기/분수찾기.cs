using System.Text;

public class Program
{
    public static void Main()
    {
        int input = int.Parse(Console.ReadLine()!);
        int count = 1;

        while (count < input)
        {
            input -= count;
            count++;
        }
        
        if (count % 2 == 0)
        {
            Console.WriteLine($"{input}/{count - input + 1}");
            return;
        }
        Console.WriteLine($"{count - input + 1}/{input}");
    }
}