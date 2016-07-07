using System;
using System.Threading.Tasks;
using KonardTestLibrary;
using Platform.Data.Core.Pairs;

namespace hwapp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var startup = new Startup();
            Console.WriteLine(startup.Invoke(new object()).GetAwaiter().GetResult());
            Console.WriteLine("Hello World!");
        }
    }
    
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            var lib = new Library();
            return lib.Add(1, 2) + LinksMemoryManager.DefaultLinksSizeStep;
        }
    }
}
