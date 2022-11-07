// tarnary operator can be used for single line statement. It's useless for multipul statement.

var a = 11;
var resutl = a % 2 === 0 ? 'even':'odd';
console.log(resutl);

// multipul statement handiling with tarnary operator.
var b = -1;
var res = b === 0 ? 'zero' : b < 0 ? 'Negative' : b % 2 === 0 ? 'Even' : 'Odd';
console.log(res);


// check string practise with tarnary operator.
var fName = '';
var fullName = fName ? name : 'Mahmudul Hasan Babu';
console.log(fullName);