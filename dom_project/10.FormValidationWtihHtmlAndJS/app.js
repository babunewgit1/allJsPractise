const form = document.querySelector('#form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e)=> {
   e.preventDefault();

   const password1 = document.querySelector('#password1');
   const password2 = document.querySelector('#password2');
   
   if (form.checkValidity() === false) {
      message.textContent = 'Please submit form properly';
      message.style.color = 'red';
   } else {
      if (password1.value === password2.value) {
         password1.style.borderColor = 'green';
         password2.style.borderColor = 'green';
      } else {
         password1.style.borderColor = 'red';
         password2.style.borderColor = 'red';
         message.textContent = 'Password doesn\'st match';
         message.style.color = 'red';
         return;
      }

      if (form.checkValidity() === true ) {
         message.textContent = 'Form submit successfully';
         message.style.color = 'green';

      dataObject();
   }
   
}    
})

function dataObject() {
   const obj = {
      name : form.name.value,
      email : form.email.value,
      phone : form.phone.value,
      website : form.website.value
   }

   console.log(obj)
}