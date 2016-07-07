var edge = require('edge');

var clrMethod = edge.func({ 
    "source": function () {/*
        //using Platform.Data.Core.Pairs;
        using Platform.Helpers;
        
        async (input) => { 
            return ".NET Welcomes " + Global.Trash;
            //return ".NET Welcomes " + LinksMemoryManager.DefaultLinksSizeStep; 
        }
    */}, 
    "references": [ 
        "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/Platform.Helpers.dll",
        "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/Platform.Memory.dll",
        "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/Platform.Communication.dll",
        "/home/ubuntu/workspace/hwapp/bin/Debug/netcoreapp1.0/publish/Platform.Data.Core.dll"
    ] });

var result = clrMethod({}, true);
console.dir(result);