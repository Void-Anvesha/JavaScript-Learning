//singleton obj
//uses constructor
//A constructor is a function (or class) used to create multiple objects with the same structure.
const user=new Object()


//Non singleton obj
//uses obj literals
//The object literal is a direct way to create an object
const Newuser={}

Newuser.id="123abc"
Newuser.name="anvesha"

//Nested objects
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anvesha",
            lastname :"rastogi"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//To kknow all the keys in an obj
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
//Key val is stored in an arr
console.log(Object.values(regularUser));
//To knwo whether a particular key exists
console.log(regularUser.hasOwnProperty('fullname'))


//Combining obj
const obj1={1:"a" , 2:"b"}
const obj2={3:"c" , 4:"d"}
//Method 1
const obj3={obj1,obj2}
console.log(obj3);

//Method 2
//This {} obj stores the 2 new obj1 & obj2
//1st val is traget & evreything else is source
//{}-> target & obj1,obj2 are source
//const obj4=Object.assign({},obj1,obj2)
//console.log(obj4)

//Copies everything from obj2 & stores in obj1
//const obj5=Object.assign(obj1,obj2);
//console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Thid id the better way
const newObj={...obj1,...obj2}
console.log(newObj)

//obj inisde arr
const users=[
    {
      user_id:"23"
    }
]


//De-srtructuring object
const course={
    coursename:"js",
    price:"999",
    courseInstructor:"anvesha"
}

//Method3 to print value of a particular key
const{courseInstructor} = course
console.log(courseInstructor)

//Instead of courseInstructor call it instructor
const{courseInstructor:instructor}=course
console.log(instructor)


//Obj should be sent in form of json
//JSON : similar to obj but keys are also str
// {
//     "name":"anvesha",
//     "age":"20"
// }





