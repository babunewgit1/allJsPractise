const timeSection = document.querySelector('span')
let time = 30;
const timer = setInterval(()=> {   
   timeSection.innerHTML = --time;
   if (time == 0) {
      clearInterval(timer);
      window.location.href ="https://www.google.com"
   }

}, 1000)