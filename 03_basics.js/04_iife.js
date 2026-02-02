//Immediately Invoked Function Expression
//A func that is executed as soon as it is defined
//To prevent global scope pollution(allsows creating private scope)


//Named IIFE 
//name of func(chai) is defined
(function chai(){
    console.log(`DB CONNECTED`)
})();

//Arrow func also works in this case
//Unnamed IIFE
( (name) =>{
     console.log(`DB CONNECTED TWO ${name}`);
})("anvesha");


