const coding=["js","ruby","python","cpp"]

//For each doesn't returns any value
const values=coding.forEach((item) =>{
    //console.log(item);
})

//undefined
//console.log(values);

/******Filter ** */
const myNums=[1,2,3,4,5,6,7,8,9,10]
//returns value
//const newNums=myNums.filter((num) =>num>4)
//console.log(newNums);


//Using this in forEach
const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

//console.log(newNums);




