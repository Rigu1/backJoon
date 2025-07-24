using System.Text;

public class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine()!.Split(' ');
        var result = new StringBuilder();
        
        var (value, system) = (Value: int.Parse(parts[0]), System: int.Parse(parts[1]));

        while (value > 0)
        {
            result.Insert(0, Converter(value % system));
            value /= system;
        }
        
        Console.WriteLine(result);
    }

    static char Converter(int value)
    {
        if (value > 9)
        {
            return (char)(value - 10 + 'A');
        }
        
        return  (char)(value + '0');
    }
    
}