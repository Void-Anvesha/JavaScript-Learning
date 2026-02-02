const score=400

//To definr number by specifying the type
const balance = new Number(100)
// console.log(balance);

//Convert number to str
// console.log(balance.toString());

//100.00
// console.log(balance.toFixed(2));

//Precision
const otherNumber=23.7899
// console.log(otherNumber.toPrecision(3));

const hundreds=1000000
//console.log(hundreds.toLocaleString('en-IN'));


//console.log(Number.MAX_INTEGER);






/*****************  MATHS    *************/


//Onject
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(-4.3));

//Top value
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));

console.log(Math.min(4,3,6,2));

//Ranges btw (0,1)
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));


//To get the random number from a given range
const min=10
const max=20
//Important
console.log(Math.floor(Math.random()*(max-min+1)+min));