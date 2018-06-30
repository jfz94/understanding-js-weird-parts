b(); 
console.log(a); // undefined //

// window.a
var a = 'Hello world';

// will be sitting on the global object window //
// window.b //
function b(){
    console.log('Called b');
}
    
