const obj = [
   {
      name: 'one',
      number : 1
   },
   {
      name: 'two',
      number : 2
   },
   {
      name: 'three',
      number : 3
   },
   {
      name: 'four',
      number : 4
   },
   {
      name: 'five',
      number : 5
   },
   
]

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const p = document.querySelector('p');
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   ul.innerHTML = '';
   const inp = document.querySelector('input').value;
   let flag = true;
   
   for(let single of obj) {
      if (single.name.includes(inp)) {
         ul.innerHTML +=`<li>${single.number}</li>`;
         flag = false;
      }
   }

   if (flag) {
      p.style.display = 'block';
      ul.style.display = 'none';
   } else {
      p.style.display = 'none';
      ul.style.display = 'block';
   }

   
   
   
   

})