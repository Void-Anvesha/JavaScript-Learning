//async await
//async function returns a promise
// async function greet(){
//    // return "Anvesha";

//    return new Promise((resolve,reject)=>{
//     resolve("Anveesha");
//    })
// }

// const response = greet();
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error",error);
// })




// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .them((data)=>console.log(data));


async function github(){
//This task has to wait so it is given to Web API
const response = await fetch("https://api.github.com/users")
const data = await response.json()
//console.log(data)
const parent = document.getElementById("first")
//Loop through each user & print it's photo , name & githubprofile
for(let user of data){
    const element = document.createElement("div");
    element.classList.add("user");

    const image = document.createElement('img');
    image.src= user.avatar_url;

    const userName = document.createElement('h2');
    userName.textContent = user.login

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.textContent = "Visit Profile";
    

    element.append(image,userName,anchor );
    parent.append(element);
}
}

github()

console.log("Jai Shree Krishna")