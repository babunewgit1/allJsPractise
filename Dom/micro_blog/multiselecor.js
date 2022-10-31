// multiselector with class name...

/*

let header = document.getElementsByClassName('header');
header = Array.from(header);
header.forEach((name) => {
   name.style.color = '#fff';
   name.style.backgroundColor = '#333';
   name.style.padding = '15px';
});

*/


// multiselector with tagname...

/*
let header = document.getElementsByTagName('h1');
header = Array.from(header);
header.forEach((name) => {
   name.style.color = '#fff';
   name.style.backgroundColor = '#333';
   name.style.padding = '15px';
})

*/


// multiselector with querySelecotorAll..
const header = document.querySelectorAll('.header');
header.forEach((name) => {
   name.style.color = '#fff';
   name.style.backgroundColor = '#333';
   name.style.padding = '15px';
})



