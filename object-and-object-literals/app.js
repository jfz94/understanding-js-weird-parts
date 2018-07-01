var jordi = { 
    firstname:  'Jordi', 
    lastname: 'Felip',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person){
    console.log('hello ' + person.firstname);
}

greet(jordi);

greet({firstname: 'Mary', lastname: 'Doe'});