//to add values to the object
a.hobbies = ['coding', 'sports'];
console.log(a);

//spreading the character
var greeting = 'Hello Ereryone!';
var charlist = [...greeting];
console.log(charlist);

//combining the two array.
var arr1 = ['Amazon', 'Google'];
var arr2 = ['Apple', 'Microsoft', 'Meta'];

var arr3 = [...arr1, ...arr2];
console.log(arr3);

var arr4 = [...arr2, 'BlueSapiens'];
console.log(arr4);
