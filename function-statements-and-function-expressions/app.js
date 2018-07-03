// function statement

function greet(){
    console.log('hi');
}

// Function expression




var anonymousGreet = function(){
    console.log('hi');
}

anonymousGreet();

function log(a){
    console.log(a);
    if(typeof a  === 'function'){
        a();
    }
}

log(3);

log(function(){
    console.log('hi');
})