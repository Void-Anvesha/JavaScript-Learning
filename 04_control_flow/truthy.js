const userEmail="anvesha.ai"


if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//Falsy values{ which val are assumed to be false}
//false,0,-0,BigInt (0n),null,undefined,NAN
//except the above one all are truthy val

//truthy values
//everything inside a str is always truthy
//"0" , 'false' , " " , [] , { } , function(){}


const name=""
if(name.length ===0)
{
    console.log("Array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


/*****  Nullish Coalescing   ***** */
//provides a default value for a variable or expression only when its left-hand side operand is strictly null or undefined
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 10
//Takes the 2nd value
val1=null ?? 10 ?? 20
console.log(val1);



//Ternary Operator
//condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less tahn 80") : console.log("More than 80")

