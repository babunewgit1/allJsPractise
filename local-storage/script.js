localStorage.setItem('name', 'babu');
localStorage.setItem('student', 'true');
localStorage.setItem('age', '24');

console.log(localStorage)

let getdata = localStorage.getItem('student');
console.log(getdata);

localStorage.setItem('student', 'false');
console.log(localStorage)

// // remove a items form localstorage
// localStorage.removeItem('age');

// clear the local storge.
localStorage.clear();
