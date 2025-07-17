public class Program
{
    public static void Main()
    {
        string str = Console.ReadLine() ?? throw new InvalidOperationException();
        int i = int.Parse(Console.ReadLine() ?? throw new InvalidOperationException());
        
        Console.WriteLine(str[i - 1]);
    }
}