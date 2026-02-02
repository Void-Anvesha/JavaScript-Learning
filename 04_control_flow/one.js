//if
//code will only br executed if the condition is true
if(true){}

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power ${power}`)
// }
// console.log(`User power ${power}`)

//Shorthand notation
//Without scope : Implicit scope
const bal=1000
if(bal>500)console.log("test");


//Nested else-if
// if(balance<500){
//     console.log("Less than 500");
// }else if(balance<750){
//         console.log("Less than 750")
// }else{
//         console.log("Less than 1200")
// }


const userloggedIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromEmail=true
if(userloggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}

