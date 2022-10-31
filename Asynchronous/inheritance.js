// create an object with constraction function and with class.
class person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   doing(work) {
      console.log(`${this.name} is ${work}`)
   }
}
const obj1 = new person("babu", 24);
console.log(obj1);
obj1.doing('coding');

//creating second object
const obj2 = new person('shipa', 14);
console.log(obj2);
obj2.doing('reading');

//create object with inheritence
class personNew extends person {
   constructor(Id,name, age) {
      super(name, age);
      this.idNumber = Id;
   }
}

const obj3 = new personNew(10, 'sinan', 11);
console.log(obj3);
obj3.doing('learing js');