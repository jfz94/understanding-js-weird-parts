String.prototype.isLengthGreatherThan = function(limit){
    return this.length > limit;
}

console.log("John".isLengthGreatherThan(2));

Number.prototype.isPositive = function(){
    return this > 0;
}
var a = new Number(4);
console.log(a.isPositive());