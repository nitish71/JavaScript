//shallow copy of array
var a1 = ['a','b','c'];
var a2 = [...a1];
console.log(a1);
console.log(a2);

var a3 = ['a','b','c'];
var a4 = a3.push('nitish');
console.log(a4);


var arr11 = ['m','n','o'];
var arr12 = [...arr11];

var arr13 = arr12.push('nitish');
console.log(arr11);
console.log(arr13);
