console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean(""));

var a = 0;

// goes to internet and looks for a value //


if (a || a === 0){ // problem with 0 ( not necessarily = lack of value)
    console.log('Something is there');
}