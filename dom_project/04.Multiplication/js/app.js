/* 
   Todo : 
      ! ===> 1.select all html items with js.
      ! ===> 2.generate 2 random number.
      ! ===> 3.conpare result and user's anwser by handeling with submit button.
      ! ===> 4.work for score.
      ! ===> 5.work for localstorage.
      ! ===> 6.work for clearing socalstorage.
      ! ===> 7.dealing with right and wrong answer.

*/

//? select all html items.
const numSpanOne = document.querySelector('.num1');
const numSpanTwo = document.querySelector('.num2');
const submit = document.querySelector('form');
const input = document.querySelector('input');
const scoreTxt = document.querySelector('p span');
const clear = document.querySelector('.clear button#clear');
const right = document.querySelector('#right');
const wrongPara = document.querySelector('#wrong');
const result = document.querySelector('#result');
const questionItems = document.querySelector(".user input");
const go = document.querySelector(".user button");
const userSection = document.querySelector(".user");


//? generate 2 random number and set them in html
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

numSpanOne.textContent = num1;
numSpanTwo.textContent = num2;


//?conmpare result and user's anwser by handeling with submit button.
let getScrLocal = localStorage.getItem('scr');
let score = JSON.parse(getScrLocal);

if(!score) {
   score = 0;
}

//? if anser will wrong 
let wrong = localStorage.getItem('wro');
let wrongScr = JSON.parse(wrong);

if(!wrongScr) {
   wrongScr = 0;
}

scoreTxt.textContent = score;

let getclick = localStorage.getItem('total')
let totalSubmitClick = JSON.parse(getclick);

if(!totalSubmitClick) {
   totalSubmitClick = 0;
}


submit.addEventListener('submit', (e)=> {
   let anwser = num1 * num2;
   let userData = input.value;

   if (userData == anwser) {
      score ++;
      localStorage.setItem('scr', JSON.stringify(score));
   } else {
      wrongScr ++ ;
      localStorage.setItem('wro', JSON.stringify(wrongScr));
   }

})



//? clear local storage
clear.addEventListener('click', ()=> {
   localStorage.clear();
   location.reload();
});

//? dealing with wrong and right text
result.addEventListener('click', ()=> {
   right.innerHTML = `You have given <strong>${score}</strong> right Answer`
   wrongPara.innerHTML = `You have given <strong>${wrongScr}</strong> wrong Answer`
});


















