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

// reflection
for(var prop in jordi){
    if(jordi.hasOwnProperty(prop)){
        console.log(prop + ':' + jordi[prop]); 
    }
}

var jane = {
    address: '111 Main Str.',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function(){
        return firstname;
    }
}

// combination of these objects
_.extend(jordi, jane, jim);

console.log(jordi.address); // 111 Main Str
console.log(jordi);