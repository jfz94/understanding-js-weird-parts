function greet(name){
   console.log('Hello ' + name); 
}

var greetFunc = function(name){
    console.log('Hello ' + name);
}

greetFunc('Jordi');

var greeting = function(name){
    console.log('Hello ' + name);
}('John');

var greeting = function(name){
    return 'Hello ' + name;
 }();
 
 console.log(greeting);
 

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
});
