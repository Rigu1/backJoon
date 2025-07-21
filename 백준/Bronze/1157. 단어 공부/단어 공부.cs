using System;

public class Program
{
    static void Main()
    {
        var scores = new Dictionary<char, int>();
        string str = Console.ReadLine()!.ToUpper();

        foreach (var ch in  str)
        {
            scores.TryAdd(ch, 0);
            scores[ch] += 1;
        }

        char[] maxKey = GetKeysMaxValue(scores);

        if (maxKey.Length == 1)
        {
            Console.WriteLine(new string(maxKey));
            return;
        }

        Console.WriteLine('?');
    }
    
    static char[] GetKeysMaxValue(Dictionary<char, int> dic)
    {
        if (dic.Count == 0)
        {
            return Array.Empty<char>();
        }
        
        char[] result = dic.Where(pair => pair.Value == dic.Values.Max()).Select(pair => pair.Key).ToArray();
        return result;
    }
}