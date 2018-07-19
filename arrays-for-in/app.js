Array.prototype.myCustomFeature = 'cool!';

var arr = ['John','Jane','Jim'];
console.log('--- DON\'T USE ---');
for(var prop in arr){
    console.log(prop + ' ' + arr[prop]);
}

console.log('--------------');
for(var prop in arr){
    if(arr.hasOwnProperty(prop)){
        console.log(prop + ':' + arr[prop]); 
    }
}