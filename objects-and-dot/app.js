var person = new Object();

person["firstname"] = 'Jordi';
person["lastname"] = 'Felip';

var firstNameProperty = "firstname";

console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();

person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'New York';

console.log(person.address.city);
console.log(person["address"]["state"]);