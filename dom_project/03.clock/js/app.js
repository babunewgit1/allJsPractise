/*
   TODO :
      todo-1 : define all the class form html.
      todo-2 : Geting hours, minutes and second from the date object.
      todo-3 : Add them into the setinterval function.
      todo-4 : write logic for adding zero, am - pm, and others.

*/

//! define all the class form html.
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const ampm = document.querySelector('#ampm');

//! Geting hours, minutes and second from the date object.
function timer() {
   let date = new Date();
   let hours = date.getHours();
   let mins = date.getMinutes();
   let secs = date.getSeconds();   

   //! write logic for adding zero, am - pm, and others.
   hours >= 12 ? ampm.textContent = "PM" : ampm.textContent = "AM";   
   hours > 12 ? hours = hours - 12  : hours = hours; 
   console.log(hours)  
   hours < 10 ? hour.textContent = '0' + hours : hour.textContent =  hours;
   mins < 10 ? min.textContent = '0' + mins : min.textContent =  mins;
   secs < 10 ? sec.textContent = '0' + secs : sec.textContent =  secs;
}

setInterval(() => {
   timer();
}, 1000)
