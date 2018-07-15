var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var jordi = {
    firstname: 'Jordi',
    lastname: 'Felip'
}

// don't use in real life -> performance problem

// inherits from person //
jordi.__proto__ = person;

console.log(jordi.getFullName());
console.log(jordi.firstname); // first look on jordi object

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.firstname);
console.log(jane.lastname);