function greet(firstname, lastname, language, ...other){
    
    language  = language || 'en';
    
    if(arguments.length === 0){
        console.log('Missing parameters');
        console.log('-----------');
        return;
    }
    // some parameters //
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(other[0]);
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
}

greet();
greet('Jordi');
greet('Jordi', 'Felip');
greet('Jordi','Felip','es');
greet('Jordi','Felip','es', '111 main St', 'new york');