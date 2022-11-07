var a = 10;
var b = 10;

if (a > b ) {
   console.log(a + 'is bigger then ' + b);
} else if (b > a ) {
   console.log(b + 'is bigger then ' + a);
} else {
   console.log('They are same');
}

// print even number or odd number or negative or zero.
var c = -10;

if (c === 0) {
   console.log(c + ' is zero')
} else if (c < 0) {
   console.log(c + ' is negative number');
} else if (c % 2 === 0) {
   console.log(c + ' is even number');
} else {
   console.log(c + ' is odd number');
} 