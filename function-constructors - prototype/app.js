function Person(firstname, lastname){
    console.log(this); // empty object
    this.firstname = firstname;
    this.lastname = lastname;
}
var jane = new Person('jane','doe');
//console.log(jane.getFullName()); not a function 

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('john', 'doe');
console.log(john);


// prototypes

console.log(john.__proto__);