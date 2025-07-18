//Hack for nested copy
var arrObj = {
    'arr1': ['a', 'b', 'c'],
     'arr2': ['d', 'e', 'f']
}

var arrObj1 = JSON.parse(JSON.stringify(arrObj));
console.log(arrObj1);
console.log(arrObj);
