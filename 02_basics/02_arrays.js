const fruits=["orange","guava","apple"]
const vegetable=["potato",'tomato']

//This method is not preferred
// Output : [ 'orange', 'guava', 'apple', [ 'potato', 'tomato' ] ]
// fruits.push(vegetable)
// console.log(fruits);


//Return new arr by merging 2 arr
const all=fruits.concat(vegetable)
console.log(all);

//spread
//This basially spreads the array and which works similarly to the concat which has syntax as ...
// we can concat multiple arrys at the same point
const all_new=[...fruits,...vegetable]
console.log(all_new);


const another_arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
//flat
//Returns a new array with all sub arr el concatenated based on depth of subarray
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 8,
//   9
// ]
const real_another_arr= another_arr.flat(Infinity)
console.log(real_another_arr);

//To check a str
console.log(Array.isArray("Anvesha"));

//To convert into str
console.log(Array.from("Anvesha"));

//Confused?
//what arr should be made? (keys or val)
// O/p : []
console.log(Array.from({name:"Anvesha"}))

let score1=100
let score2=200
let score3=300

//Converts el into array
console.log(Array.of(score1,score2,score3))

