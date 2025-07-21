using System;

public class Program
{
    static void Main()
    {
        int inputNum = int.Parse(Console.ReadLine()!);

        Top(inputNum);
        Bottom(inputNum);
    }

    static void Top(int num)
    {
        for (int i = 0; i < num; i++)
        {
            string spaces = new string(' ', num - i - 1);
            string stars =  new string('*', i * 2 + 1);
            Console.WriteLine(spaces + stars);
        }
    }
    
    static void Bottom(int num)
    {
        for (int i = 1; i < num; i++)
        {
            string spaces = new string(' ', i);
            string stars =  new string('*', (num - i - 1) * 2 + 1);
            Console.WriteLine(spaces + stars);
        }
    }
}