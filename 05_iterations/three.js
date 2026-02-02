//for of loop

const arr=[1,2,3,4]

//returns value because using for of loop
for (const num of arr){
     console.log(num);
}

const greetings="Anvesha Harsh"
for(const greet of greetings){
//    console.log(greet);
}

//Maps
//It is an obj
//remembers the insertion order of keys  
//No duplicate val
const map=new Map()
map.set('IN',"India")
map.set('Fr',"France")
// console.log(map);

for(const [key,value] of map){
    //console.log(key,":- ",value);
}

//Not iterable with for of loop
//But works with for in loop

// const myObj={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for(const [key,value] of myObj){
//     console.log(key,":- ",value);
// }

