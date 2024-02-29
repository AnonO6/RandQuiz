/*
 * Write a program to find the class average marks in Comp Sci.
 * Lets say total no. of students in class in 30
 */
import java.util.Scanner;
public class Arrays{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double a[] = new double[20];
        double ans=0;
        for(int i=0; i<20; i++)
        {
            a[i]= in.nextInt();
            ans += (a[i]*a[i] -11);
        }
        System.out.println("SUM :" + ans);
    }
    }