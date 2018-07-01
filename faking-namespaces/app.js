var greet = 'Hello!';
var greet = 'Hola!';


console.log(greet);

var english = {};

var spanish = {};


english.greet = 'Hello!';
english.greetings = {};
english.greetings.greet = 'Hello!'; // i can't create on the fly

spanish.greet = 'Hola!';

english = {
    greetings: {
        basic: 'Hello!'
    }
}