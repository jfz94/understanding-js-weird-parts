// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function'); // 1
}

// listen for a browser event //
function clickHandler() {
    /* the javascript engine won't look at the event queue
       until the stack is empty.
    */
    console.log('click event!');   //3
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution'); //2