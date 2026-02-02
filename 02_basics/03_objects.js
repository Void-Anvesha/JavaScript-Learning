//singleton(If constructor se obj bana)
Object.create



//obj literals
//keys &  val are both defined
const mySym=Symbol("key1")

const JsUser={
    name: "Anvesha",
    "full name":"Anvesha Rastogi",
    //This is how we can define a symbol inside an obj
    [mySym]:"myKey1",
    age:20,
    location:"Fatehpur",
    email:"anvesha@gmail.com"
}

console.log(typeof mySym)


//Methods to access obj
//can't access obj when datatype mentioned
console.log(JsUser.email);
//Gives error
//console.log(JsUser.full name);

//while this can access
console.log(JsUser["email"])
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

//Too change the obj val
JsUser.email="anvesha@chatgpt.com"

//To lock the obj 
//Object.freeze(JsUser)

//Adding function
JsUser.greeting=function(){
   console.log("Hello Js User")
}


JsUser.greetingTwo = function(){
      console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())