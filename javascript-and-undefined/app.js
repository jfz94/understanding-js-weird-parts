var a; // undefined (creation phase of execution context)

/* if we don't declare the variable we will have uncaught reference error //
    variable will not be found, so we won't have it in memory */
console.log(a);

if (a === undefined){
    console.log('a is undefined');
}else{
    console.log('a is defined');
}