var a = 10;
var b = 20;
var c = 50;
var d = 40;

if (a > b && c > d ) {
   console.log('A is gratter than B and C is gratter than D')
} else {
   console.log('Condition is not satified')
}

if (a > b || c > d ) {
   console.log('A is gratter not than B and C is gratter than D')
} else {
   console.log('Condition is not satified')
}

// not operator.
let ax = a > b;
console.log(ax);
console.log(!ax);
console.log(!!ax);