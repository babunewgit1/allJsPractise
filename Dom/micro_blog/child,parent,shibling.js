/*

   ===> 1. print the children
   ===> 2. print the children of number 2
   ===> 3. print the children of number 2 then number 1 and then number 0
   ===> 4. print the first children
   ===> 5. print the last children
   ===> 6. print the previous children
   ===> 7. print the next children
   ===> 8. print the parent element
   ===> 9. print the parent element and it's parent element
   ===> 10. print the number of children element

*/

const tbody = document.querySelector('tbody');

console.log(tbody);
console.log(tbody.childElementCount);
console.log(tbody.parentElement);
console.log(tbody.parentElement.parentElement);
console.log(tbody.children);
console.log(tbody.children[2].children[1].children[0]);
console.log(tbody.firstElementChild)
console.log(tbody.lastElementChild)
console.log(tbody.children[2].nextElementSibling)
console.log(tbody.children[2].previousElementSibling)

let select = tbody.firstElementChild;

select.addEventListener('click', ()=> {
   select.style.backgroundColor = 'red'
})