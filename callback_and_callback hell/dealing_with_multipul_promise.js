// dealing with multiple promise and with all and race method
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(2);
    }, 3000)
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve (5)
    }, 5000)
})

Promise.all([promiseTwo, promiseOne]).then((res)=> {
    console.log(res);
});

Promise.race([promiseOne, promiseTwo]).then((res)=> {
    console.log(res);
})

