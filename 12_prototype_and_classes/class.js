// const obj1 ={
//     name : "Anvesha",
//     age:20,
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//     }
// }


// const obj2 ={
//     name : "Harsh",
//     age:21,
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//     }
// }


class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`)
    }
}
//creating obj
const p1 = new Person("Anvesha",20);
const p2 = new Person("Harsh",21);
console.log(p1.sayHi());
console.log(p2);




/*********Inheritance  ****** */
class Customer extends Person{

    constructor(name,age,account,balance){
        //Calling the attriutes of Personclass
        super(name , age);
        this.account = account;
        this.balance = balance;
    }

    checkBalance(){
      return this.balance;
    }
}

const c1 = new Customer("Anvesha",20,12,540);
console.log(c1)


//How to create an obj with an already existing obj
const obj ={
    name:'zyx',
    age:2
} 

const obj2 = Object.create(obj);
obj2.surname = "abc"
console.log(obj2.surname)