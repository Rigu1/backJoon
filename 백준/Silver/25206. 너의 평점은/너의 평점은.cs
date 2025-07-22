using System;

public class Program
{
    static void Main()
    {   
        var infoSubjectEvaluation = new Dictionary<string, double>()
        {
            { "A+", 4.5 },
            { "A0", 4.0 },
            { "B+", 3.5 },
            { "B0", 3.0 },
            { "C+", 2.5 },
            { "C0", 2.0 },
            { "D+", 1.5 },
            { "D0", 1.0 },
            { "F",  0.0 }
        };
        
        string? line;
        double total = 0.0;
        double sumSubjectEvaluation = 0.0;

        while (!string.IsNullOrEmpty(line = Console.ReadLine()))
        {
            var gradeInfo =  line.Split(' ');

            if (gradeInfo[2] != "P")
            {
                double grade = double.Parse(gradeInfo[1]);
                double sbjectEvaluation = infoSubjectEvaluation[gradeInfo[2]];
                
                total += grade;
                sumSubjectEvaluation += grade * sbjectEvaluation;
            }   
        }
        
        Console.WriteLine(sumSubjectEvaluation / total);
    }
}