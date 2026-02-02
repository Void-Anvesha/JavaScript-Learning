console.log("Hello World Start");


// const p1 = fetch("https://api.github.com/users");
// //console.log(p1); 


// //fulfilled , rejected
// const p2 = p1.then((response) =>{
//     //To convert the data returned by server in json format
//     return response.json();
// })
// console.log(p2);

// p2.then((data) =>{
//     console.log(data);
// })


// console.log("Hello World End");



/**************A better way to do that is Chaining  ****** */
/************Promise Chaining **** */
fetch("https://api.github.com/users")
//response is a Response object (HTTP response from the server)
// It contains status, headers, body, etc.
//response is the value automatically passed by the fetch()
.then((response)=>{
    //When the req is rejected 
    if(!response.ok){
        throw new Error("Data is not present in server");
    }
   return response.json();
})
//To display the data returned by server
//data is the value returned from response.json()
.then((data)=>{
    // console.log(data)
    

    const parent = document.getElementById("first");
//To display the image of all the users  
    for(let i = 0; i < data.length; i++){
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "30px";
    image.style.width = "40px";

    parent.append(image);
    }
})
//To handle the error
.catch((error) =>{
    const parent =  document.getElementById("first");
    parent.textContent = error.message;

})





//How promise is created { resolved(fulfilled) or rejected}?
const p1 = new Promise((resolve , reject) =>{
    resolve("fulfillled")
})
p1.then((response) =>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})