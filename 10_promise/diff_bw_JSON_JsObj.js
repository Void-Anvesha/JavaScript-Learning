//JS Object
const j1={
    name : "Anvesha",
    age : 20,
    address : "Fatehpur",
    c : undefined
}

//convert to JSON
 const jsonFormat = JSON.stringify(j1);
 console.log(jsonFormat);



 //This is actual JSON format (It is in a string format)
 const jsonFormat2 =` {
    "name" : "Rohit",
    "age" : 20,
    "address" : "fatehpur"
}`;


///Now converting above JSON Format2 to JS object
const jsObj = JSON.parse(jsonFormat2);
console.log(jsObj);