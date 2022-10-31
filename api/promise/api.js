// how to get inform form web api with promise method
const git = fetch('https://api.github.com/users/babunewgit1');
git.then((rest)=> rest.json())
   .then(pro => console.log(pro))
   .catch(err => console.log(err));


// https://www.javascripttutorial.net/sample/promise/api.json

async function mess () {
   try {
      const api = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
      const pp = await api.json();
      console.log(pp.bpi.USD)
   } catch (error) {
      console.log(error);
   }
}

mess();