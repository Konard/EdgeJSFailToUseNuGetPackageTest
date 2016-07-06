var edge = require('edge');

var clrMethod = edge.func({
    assemblyFile: 'bin/Debug/netcoreapp1.0/hwapp.dll',
});

clrMethod({}, true);