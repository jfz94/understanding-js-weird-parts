console.log('----- polyfills -----');
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter');
        }
        function F(){}
        F.prototype = o; // sets prototype equals to the object passed in
        return new F(); // an returns an empty function -> object //
    }
}


var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


