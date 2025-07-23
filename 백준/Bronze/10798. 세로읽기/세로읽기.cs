using System.Text;

public class Program
{
    static void Main()
    {
        const int MaxLen = 15;
        var strInputList = new List<String>();
        var strOutput = new StringBuilder();
        
        for (int i = 0; i < 5; i++)
        {
            strInputList.Add(new string(Console.ReadLine()!));
        }

        for (int i = 0; i < MaxLen; i++)
        {
            for (int j = 0; j < strInputList.Count; j++)
            {
                if (strInputList[j].Length > i)
                {
                    strOutput.Append(strInputList[j][i]);
                }
            }
        }
        
        Console.WriteLine(strOutput);
    }
}