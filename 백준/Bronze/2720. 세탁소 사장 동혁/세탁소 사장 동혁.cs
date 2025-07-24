using System.Text;

public class Program
{
    private static readonly int[] Units = new int[4] {  25, 10, 5, 1 };

    static void Main()
    {
        int testCases = int.Parse(Console.ReadLine()!);
        
        var displayStrBuilder = new StringBuilder();

        for (int i = 0; i < testCases; i++)
        {
            int value = int.Parse(Console.ReadLine()!);
            displayStrBuilder.AppendLine(string.Join(" ", GetStrOfCalculationCoin(value)));
        }
        
        Console.WriteLine(displayStrBuilder.ToString());
    }

    private static int[] GetStrOfCalculationCoin(int value)
    {
        var result = new List<int>();

        foreach (int unit in Units)
        {
            int count = value / unit;
            value %= unit;
                
            result.Add(count);
        }   
        
        return result.ToArray();
    }
}