//Arrow : (this doesn't exists for arrow function)

// const greet2 =()=>{
//     console.log(this);
// }

// greet2()

// 'use strict'

// const user={
//      name: "Harsh",
//      greet : function(){
//         // console.log(this);
//         function meet(){
//             console.log(this);
//         }
//         meet();
//      }
// }

// user.greet();




const stopWatch ={
    second : 0,
    start : function(){
      

        setInterval(() =>{
            this.second++;
            console.log(this.second);
        },1000);
    }
}
stopWatch.start();