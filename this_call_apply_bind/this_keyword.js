//In node.js it points to an empty obj
//while in browser it points to global obj 
console.log(this);


'use strict'
//Function
function greet(){
    console.log(`hi ${this.name}`);
}

function incrementAge(value,name){
    this.age +=value;
    this.name = name
    console.log(this.age);
    console.log(this.name);
    
}

const user={
    name:"Anvesha",
    age:30,
   
}


const user2={
    name : "Harsh",
    age:21
}
// (this == user)
//this points to user
//1st arg is that to which this points to

/***** call , apply , bind -> this points to the invoking obj ***/
//greet.call(user);
//Same methods to invoke (but just differs in the way you're passing the args)
//incrementAge.call(user,5, "X");
//Apply
//incrementAge.apply(user,[10,"Y"]);
//Bind
// const temp = incrementAge.bind(user2,10,"Z");
// temp();
//greet.call(user2)





// class

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
//Whenever you write new keyword it points to an {} (empty obj)
//this points to empty obj
const p1 = new Person("Harsh" , 21);
console.log(p1)



