using System;
using System.Threading.Tasks;
using KonardTestLibrary;

namespace hwapp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var lib = new Library();
            Console.WriteLine(lib.Add(1, 2));
            Console.WriteLine("Hello World!");
        }
    }
    
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            var lib = new Library();
            return (object)lib.Add(1, 2);
        }
    }
}
