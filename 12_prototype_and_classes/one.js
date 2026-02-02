const obj ={
    name : "Anvesha",
    age : 20,
    greet : function(){
        console.log("Radhe Radhe")
    }
};
// console.log(obj);

// console.log(obj.toString());
// const arr = [1,2,3];
// console.log(arr.length);

const obj2 = {
    account : 30
};

//By using proto obj2 gets linked to obj1
obj2.__proto__ = obj;

console.log(obj2.name);