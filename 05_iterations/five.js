//for each
//wwith forEach we give callBack function to it

const coding=["js","ruby","python","cpp"]

// coding.forEach( function (val){
//      console.log(val);
// })

coding.forEach( (item)=>{
    //console.log(item);
})


function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


//Array with multiple obj
const myCoding=[
 {
     languageName : "javascript",
     languageFileName : "js"
 },
  {
     languageName : "java",
     languageFileName : "java"
 },
  {
     languageName : "python",
     languageFileName : "py"
 }
]

myCoding.forEach((item)=>{
    //Accessing obj
    console.log(item.languageName)
})



