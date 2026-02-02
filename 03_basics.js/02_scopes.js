//{} : scope in function or if-else block
//var is function scoped {completely global}
//No matter you declare it outside or inside the scope it would be accessible from everywhere
//Global scope

let a=300
if(true){
//Block scope
//You can't access anything out of block scope 
//Accept in the case of var
    let a=10
    const b=20
    var c=30
    console.log("Inner",a)
}

// console.log(a)
// console.log(b)
console.log(c)
console.log("Outer",a)



/******Nested scope*****/

function one(){
    const user="anvesha"
//Child func can access parent var 
//It can access var of func one()
    function two(){
        const age=20
        console.log(user)
    }
   // console.log(age)

    two()
}
one()


//Scope in if-else block
if(true){
    const username="website"
    if(username==="website"){
        const website="yt"
        //console.log(website)
    }
    //console.log(website)
}
//console.log(username)


/*********  Interesting  *********/



console.log(addOne(5))

function addOne(num){
    return num+1
}

//In this case we can't use addTwo before declaration
//Can't access the value becuse it is stored in a new var

const addTwo=function(num){
    return num+2
}
addTwo(5)

