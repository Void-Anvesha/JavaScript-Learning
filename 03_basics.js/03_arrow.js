//this keyword :refers to currennt context
//In Node this refers to {} an empty obj

const user={
    username:"anvesha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()

// user.username="harsh"
// user.welcomeMessage()

// console.log(this)



// function chai(){
//     console.log(this);
// }

// chai()


//this can't work inside a func
function printThisVal(){
    let username="anvesha"
    console.log(this.username)
}

//printThisVal()

//When storing func in a variable
// const chai=function(){
//     let username="anvesha"
//     console.log(this.username)
// }
// chai()




/********** Arrow function  ******/

//Syntax: const a=(n1,n2) =>{}
const chai=() =>{
    let username="anvesha"
    console.log(this.username)
}
//chai()

//Explicit return
//When you write return
const addTwo=(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(2,3))


//Implicit return
//{} curly braces is not used hence, no need to write return keyword
const mulTwo=(num1,num2) => (num1*num2)
console.log(mulTwo(2,3))


