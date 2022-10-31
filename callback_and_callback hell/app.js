// create an object with class and constractor
class person {
    constructor (name, Id, book) {
        this.name = name;
        this.Id = Id;
        this.book = book;
    }

    doing (age) {
        console.log(`${this.name} is reading ${this.book}. and his age is ${age}`)
    }
}

const obj1 = new person ('babu', 23, 'js cook book');
console.log(obj1);
obj1.doing(20);

// create an inheritance of the person object.

class newPerson extends person {
    constructor (name, Id, book, year) {
        super(name, Id, book);
        this.year = '2004'
    }

    working (task) {
        console.log(task);
    }
}

const personOne =  new newPerson('Erin', 25, '2020');
console.log(personOne);
personOne.working('writing code');  


// callback
function getData (userName, userID, printUserData) {
    setTimeout (()=> {
        console.log('Data will be fatcing in 4000 MS.........');
        const user = {
            name: userName,
            id: userID,
        }
        printUserData(user);
    }, 4000)
}
getData('Babu', 23, function (para) {
    console.log(para);
});
