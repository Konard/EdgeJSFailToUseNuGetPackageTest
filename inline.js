var edge = require('edge');

var clrMethod = edge.func(function () {/*

    #r "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/KonardTestLibrary.dll"

    using KonardTestLibrary;
    
    async (input) => { 
        var lib = new Library();
        return ".NET Welcomes " + lib.Add(1, 2); 
    }
*/});

var result = clrMethod({}, true);
console.dir(result);