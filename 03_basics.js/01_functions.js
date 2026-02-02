
function sayMyName(){
    //Function scope or definition
    console.log("Anvesha")
}

//sayMyName()

//Defining function
//Param
// function add2Numbers(number1,number2){
//    console.log( number1+number2)
// }


//Method 1
function add2Numbers(number1,number2){
   let res= number1+number2
   return res
}
//Calling
//Arguments
const res=add2Numbers(2,44)
//console.log("Res:",res)

//Method 2
function mul2Numbers(num1,num2){
    return num1*num2
}

const ans=mul2Numbers(2,3)
//console.log(ans)

//If you haven't passed any value then by default it considers usernname as harsh
function loginUserMessage(username="harsh"){
    //If user hasn't provided any value
    if(username===undefined){
       console.log("Please enter a username")
       return 
    }
    return `${username} just loggedIn`
}

console.log(loginUserMessage("Anvesha"))


/*****Rest Operator **/
//(...)
//When u wanto pass args more than params

//Case 1
function calculateCarPrice(...num1){
     return num1
}

//[ 200, 300, 400 ]
console.log(calculateCarPrice(200,300,400))


console.log("Hello")
//Case 2
function calculateSum(val1,val2,...num1){
     return num1
}


console.log(calculateSum(200,300,400,5000))




//How to pass an obj in function
const user={
    username:"anvesha",
    age:20
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`)
}

//Username is anvesha and price is 20
//handleObject(user)


//Calling function by passing obj as args
handleObject({
    name:"harsh",
    age:20
})


//Passing arrays in function
const myArr=[1,2,3,4]

function myFuncArr(getArr){
   return getArr[1];
}

console.log(myFuncArr(myArr))

