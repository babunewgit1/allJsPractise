// how to get inform form web api with await method
async function github () {
   try {
      const git = await fetch ('https://api.github.com/users/babunewgit1');
      const profile = await git.json();
      console.log(profile);
      
   } catch (error) {
      console.log(error);
   }
}
github();