const button = document.querySelectorAll('.btn-danger');

button.forEach(btn => {
   btn.addEventListener('click', function(e) {
      btn.style.color = "green"
   })
})