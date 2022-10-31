function gettingData(name, id) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('user will get data in 2 sec....');
            const person = {
                name: name,
                id : id,
                mail: 'john@gmail.com'
            }
            resolve(person);
        }, 3000)
    });
    return promise;
}

function sendMail(mailx) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = {send: 'success'}
            resolve(status);
        }, 5000)
    });
    return promise;
}

async function dbInfo () {
    try {
        const userdata = await gettingData('babu', 22);
        console.log(userdata)
        const sent = await sendMail('babu874@.com');
        console.log(sent);
    } catch (err) {
        console.log(err);
    }
}

dbInfo();


// gettingData('babu', 22).then((person)=> {
//     console.log(person);
//     sendMail(person.mail).then((status) => {
//         console.log(status);
//     })
// /*
//     .catch((res) => {
//         console.log(res)
//     })
//
//  */
// })