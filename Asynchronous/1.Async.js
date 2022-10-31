console.log("Before");

function gettingData(userName, userID, fun) {
    setTimeout(()=> {
        console.log('Fatching data will be completed in 3 sec..............');
        const user = {
            name : userName,
            ID : userID,
        }
       fun(user);
    }, 3000)
}

gettingData('Mahmudul', 11, function (printUser) {
    console.log(printUser);
});

// create object with constractor funciton;
class persons {
    myStatus = 'Student'
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    doing (work) {
        console.log(`${this.name} is doing ${work}`)
    }
}

const person1 = new persons('Babu', 25);
console.log(person1);
const person2 = new persons('Shipa', 15);
console.log(person2);

person1.doing('coding');
person2.doing('reading');


