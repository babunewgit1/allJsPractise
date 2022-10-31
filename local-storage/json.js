const person = [
   {name: 'babu', age: 23, last : 'mia'},
   {name: 'shipa', age: 13, last : 'tepi'},
   {name: 'sinan', age: 5, last : 'tepa'},
]

localStorage.setItem('person', JSON.stringify(person));

let getdata = localStorage.getItem('person');
console.log(JSON.parse(getdata));