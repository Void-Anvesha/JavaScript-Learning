const myObj={
    js:'javascript',
    cpp:'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(const key in myObj){
    //console.log(myObj[key]);
}


const programming=["js","ruby","python"]

//returns key because using for in loop
// for (const key in programming){
//      console.log(programming);
// }
 
//To find the value
for (const key in programming){
     console.log(programming[key]);
}