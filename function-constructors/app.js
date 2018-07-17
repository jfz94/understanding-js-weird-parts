function Person(firstname, lastname){
    console.log(this); // empty object
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person('john', 'doe');
console.log(john);
var jane = new Person('jane','doe');
console.log(jane);