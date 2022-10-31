// replace callback in promise
function gettingData (name, id) {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('user data will fatched in 2 sec..........');
            const user = {
                name : name,
                id : id,
                mail : 'john@gmail.com'
            }
            resolve(user);
        }, 2000)
    });
    return promise;
}

// write function for sending mail
function sending (mail) {
    const promise = new Promise((resolve, reject) => {
        const status = {sent : 'success'};
        resolve(status)
    }, 5000)
    return promise;
}

// calling function
gettingData('babu', '23').then((user)=> {
    console.log(user);
    sending(user.mail).then((status) => {
        console.log(status)
    })
})
