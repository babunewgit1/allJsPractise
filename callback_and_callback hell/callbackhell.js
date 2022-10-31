
console.log("this is before of callback");

//write callback and callback function
function gettingData (name,id, fun) {
    setTimeout(() => {
        console.log(`user data will fatched in 2000 sec`);
        const user = {
            name: name,
            id : id,
            mail: 'john@gmail.com'
        }
        fun(user);
    }, 2000)
}

// writing function for sending mail to the user of the object.
function sendMail(mail, callback) {
    setTimeout(() => {
        const response = {status: 'success'};
        callback(response);
    }, 4000)
}

gettingData('babu', 23, function (user) {
    console.log(user);
    sendMail(user.mail, function (sendStatus) {
        console.log(sendStatus);
        console.log(sendStatus.status);
    });
});

console.log("this is after of callback");