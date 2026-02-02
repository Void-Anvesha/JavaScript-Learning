// Primitive (Call by value )
// Call by value (Original data is not given copy of data is provided)
//whatever changes are made : made in the copy

//7 types :
// str,number,boolean,null,undefined,symbol,BigInt
//typeof(null) is obj
const score=100
const scoreVal=10.3

const loggedIn=false
const outsideTemp=null
//undefined val
//typeof(undefined):undefined
let userEmail;
//symbol
const id=Symbol('123')
const anotherId=Symbol('123')
//Val is same but the return val is not same
//***** Important *****/
console.log(id===anotherId);
//BingInt
const bigNumber=353735373879288
console.log(typeof bigNumber);


//Non Primitive (Reference)
//changes are made in original value
// Values are directly allocated in memory
// typeof them is an obj
//Array,Objects,Functions

const heros=['shaktiman','nagraj']
//Object
let myObj={
   name:'anvesha',
   age:20
}

//Function
const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof myFunction);





//********  Stack & Heap Memory   *****/

//Stack(Primitive) , Heap(Non-Primitive)

let myName="anvesha"

let anotherName=myName
anotherName="harsh"
console.log(myName)
console.log(anotherName);


let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne
//The value of both the obj will be changed
userTwo.email="harsh@gmail.com"

console.log(userOne.email);
console.log(userOne.email);

