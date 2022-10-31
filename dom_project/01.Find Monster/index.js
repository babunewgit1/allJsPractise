/*
   TODO:
      todo-1 : create monoster div with js
      todo-2 : append monster div in monoster wrapper
      todo-3 : print all monster form monsters array.
      todo-4 : delling with input.
      todo-5 : delling with form.
*/

//! create monoster div with js and append monster div in monoster wrapper
function monoster(mondet) {
   const monsterWrapper = document.querySelector('.monsters');
   const singleMonster = `
   <div class="monster">
      <img src="https://robohash.org/${mondet.id}?set=set2" alt="MD. Sakib Khan" />
      <p class="name">${mondet.name}</p>
      <p class="email">${mondet.email}</p>
   </div>
   `
   monsterWrapper.insertAdjacentHTML('afterbegin',singleMonster);
}

//! print all monster form monsters array;
for (let mon of monsters) {
   monoster(mon);
}

//! delling with input.
const input = document.querySelector('#search-monster');
input.addEventListener('keyup', ()=> {
   const inputValue = input.value.toLowerCase();
   const monName = document.querySelectorAll('.monster');
   const nofound = document.querySelector('.not-found');
   let falg = true;
   for (let data of monName) {
      const dataName = data.children[1].textContent.toLowerCase();
      const emailName = data.children[1].textContent.toLowerCase();

      if (dataName.includes(inputValue) || emailName.includes(inputValue)) {
         data.style.display = 'block';
         falg = false;
      } else {
         data.style.display = 'none';
         
      }     
   }
   if (falg) {
      nofound.style.display = 'block'
   } else {
      nofound.style.display = 'none'
   }   
})

//! delling with form.
document
  .querySelector('#search-monster-form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
  });




