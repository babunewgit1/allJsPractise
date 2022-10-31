// writing a promise
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve ('babu');
    }, 2000)
})
console.log(promise);
promise.then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});


// writing promise with error
const promiseError = new Promise(function (resolve, reject) {
  setTimeout(() => {
      reject(new Error('this is a 420 error'))
  }, 4000)
});
console.log(promiseError);
promiseError.then(function (re) {
    console.log(re);
}).catch(function (err) {
    console.log(err);
})
