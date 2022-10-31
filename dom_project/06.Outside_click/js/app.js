const img = document.querySelector('img');
img.addEventListener('click', function () {
   let s = img.getAttribute('src');
   if (s == '1.png') {
      img.setAttribute('src', '2.png')
   } else {
      img.setAttribute('src', '1.png')
   }

})

// outside click
const button = document.querySelector('.btn'),
      box = document.querySelector('.box');

button.addEventListener('click', ()=> {
   box.classList.toggle('active')
})

document.addEventListener('click', (e)=>{
   let etar = e.target;
   if (!etar.classList.contains('btn')) {
      box.classList.remove('active')
   } 
})