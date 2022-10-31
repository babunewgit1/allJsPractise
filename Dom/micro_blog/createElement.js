/*

<tr>
   <td class="post">post 1</td>
   <td>
      <span class="fa fa-times float-right pr-3"></span>
   </td>
</tr>

*/
const tbody = document.querySelector('tbody');
const tr = document.createElement('tr');
const tdOne = document.createElement('td');
const tdTwo = document.createElement('td');
const span = document.createElement('span');
tdOne.className = 'post';
tdOne.textContent = 'post 6 number';
tdOne.setAttribute ('title', 'post number');
span.className = 'fa fa-times float-right pr-3';

tdTwo.append(span);
tr.append(tdOne,tdTwo);
tbody.append(tr);
