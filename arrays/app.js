var arr = new Array();

// array literal syntax
var  arr1 = [1,2,3,4];

var arr2 =  [
    1,
    false,
    {
        name: 'Jordi',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"    
];

console.log(arr2);
console.log(arr2[3](arr2[2].name));