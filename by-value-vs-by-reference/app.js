// by value (primitives)

var a = 3;
var b;

b = a; // new spot in memory for b value //

a = 2;
console.log(a);

console.log(b);

// by reference ( all objects (including functions))

var c = { greeting: 'hi'};
var d;

d = c;  // points d to the same address 

c.greeting = 'hello'; // mutate //

console.log(d.greeting);


// by reference ( even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate //
}

changeGreeting(d);
console.log(c);

// The equal operator sets up a new memory space (new address)

c = {greeting : 'howdy'};
console.log(c);
console.log(d);
