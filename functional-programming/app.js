function mapForEach(arr, fn){
    var newArr = [];
    for (var i=0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item*2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item>2;
});

console.log(arr3);

var checkPastLimit = function(limiter, item){
    return item > limiter;
} // 2 arguments //

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // copy of the function fixing 1 argument
console.log(arr4);

// function that returns a function //
var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this,limiter);
}; // creating an object with the first parameter preset

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);