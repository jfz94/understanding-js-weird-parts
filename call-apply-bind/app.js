var person = {
    firstname: 'Jordi',
    lastname: 'Felip',
    getFullName: function(){

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2){
    console.log('------------------');
    console.log('Logged: ' + this.getFullName()); // fail
    console.log('Arguments: ' +  lang1 + ' ' +  lang2);
    console.log('------------------');
} 



var logPersonName = logName.bind(person);

logPersonName('en','es'); // Logged: Jordi Felip

var logName2 = function(lang1, lang2){

    console.log('Logged: ' + this.getFullName()); // fail
 }.bind(person);
 
 logName2();

 //logName.call();
 logName.call(person);
 logName.call(person,'en','es');

 // apply
 logName.apply(person,['en','es']);

(function(lang1, lang2){
    console.log('*-----------------*');
    console.log('Logged: ' + this.getFullName()); // fail
    console.log('Arguments: ' +  lang1 + ' ' +  lang2);
    console.log('------------------');
 }).apply(person,['en','es']);

 // function borrowing
 console.log('function borrowing');

var person2 = {
     firstname: 'Jane',
     lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
console.log('function currying');

function multiply(a,b) {
    return a*b; 
}

var multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(3));