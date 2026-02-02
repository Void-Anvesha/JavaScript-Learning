// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

//object
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//The month idx starts at 0 & ends at 11
let myCreatedDate=new Date(2025,11,8)
console.log(myCreatedDate.toDateString());


let newDate=new Date(2025,0,12,4);
console.log(newDate.toLocaleString());

//Important
//Customixzation of date
newDate.toLocaleString('default',{
    weekDay:"long",
})

//let newDateOne=new Date("2023-01-14");
//In India we prefer this way to write date
let newDateOne=new Date("01-14-2023");
console.log(newDateOne.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//Gives the date of today 
//Also gives ans in millisec
console.log(Math.floor(Date.now()/1000)); 




let newDateTwo=new Date()
console.log(newDateTwo);
console.log(newDateTwo.getMonth());



