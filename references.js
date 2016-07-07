var edge = require('edge');

var clrMethod = edge.func({ 
    "source": function () {/*
    using KonardTestLibrary;
    
    async (input) => { 
        var lib = new Library();
        return ".NET Welcomes " + lib.Add(1, 2); 
    }
*/}, "references": [ "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/KonardTestLibrary.dll" ] });

var result = clrMethod({}, true);
console.dir(result);