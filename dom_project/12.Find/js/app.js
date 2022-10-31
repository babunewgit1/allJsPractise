const form = document.querySelector('form');
const ul = document.querySelector('ul');
const pera = document.querySelector('p');

form.addEventListener('submit', (e)=> {
   e.preventDefault();
   
   const key = form.input.value;
   let txtValue = form.text.value;
   let afterSplit = txtValue.split(' ');
   let empty = [];
   let flag = true;
   ul.innerHTML = ''

   for (let single of afterSplit) {
      if(single.includes(key)) {
         ul.innerHTML += `<li>${single}</li>`
         empty.push(single); 
         flag = false;        
      }
   }

   if(flag) {
      pera.innerHTML = `keyword doesn\'t match`
   } else {
      pera.innerHTML= `Items founds ${empty.length}`
   }

   

   
})