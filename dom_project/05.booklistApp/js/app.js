/*
   TODO :
      !===> select all element from html
      !===> hendel submit button.
      !===> print  table
*/

//? selecting all html element
const name = document.querySelector('#name');
const aut = document.querySelector('#aut');
const year = document.querySelector('#year');
const form = document.querySelector('form');
const table = document.querySelector('.table');

//? handel submit button 
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   if (name.value == '' || aut.value == '' || year.value == '') {
      alert('You need to fill up all input.')
   } else {
      let nameValue = name.value;
      let autValue = aut.value;
      let yearValue = year.value;

      
      table.insertAdjacentHTML('afterbegin', `
      <tr>
         <td>${nameValue}</td>
         <td>${autValue}</td>
         <td>${yearValue}</td>
      </tr>`)     
   }  

})