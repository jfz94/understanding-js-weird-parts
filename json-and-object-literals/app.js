var objectLiteral = {
    "firstname":"Jordi",
    isAProgrammer : true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname":"Jordi", "isAProgammer":true}');

console.log(jsonValue);