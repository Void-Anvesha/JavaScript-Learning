//In js array are resizable & can contain mix of diff data type
//Shallow Copy(Reference)
//Deep copy(copy)

const myArr=[0,1,2,3,4,5]
console.log(myArr[0]); 

const fruits=["orange","guava"]


//New way to declare arr
const arr=new Array(1,2,3,4)



//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

//Inserts the val at starting of the arr
myArr.unshift(0)
console.log(myArr);

//Removes the starting el from arr
myArr.shift()
console.log(myArr);

//If arr contains a particular el
console.log(myArr.includes(8));

//To find the idx of particular el
console.log(myArr.indexOf(5));

//binds the array & converts it into a str
const newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr);


//slice,splice


console.log("A",myArr);

//slice
//can't manipulate original array
const arr1=myArr.slice(1,3)
console.log(arr1);


//splice(Reference)
//Manipulates original array
const arr2=myArr.splice(1,3)
console.log("B",myArr);
console.log(arr2);


