using System.Text;

public class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine()!.Split(' ');
        int decimalValue = 0;
        
        var pair = (Str: new string(parts[0].Reverse().ToArray()), System: int.Parse(parts[1]));
        
        for (int i = 0; i < pair.Str.Length; i++)
        {
            char ch = pair.Str[i];
            if (!int.TryParse(ch.ToString(), out int value))
            {
                value = ch - 'A' + 10;
            }
            decimalValue += value * (int)Math.Pow(pair.System, i);
        }
        
        Console.WriteLine(decimalValue);
    }   
}