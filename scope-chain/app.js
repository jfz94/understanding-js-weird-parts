function b(){
    console.log(myVar); // 1 -> lexical environment 
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();


