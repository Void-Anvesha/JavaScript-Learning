function handleClick(){
    const element= document.getElementById("first");
    element.textContent = "Strike is coming";
}

const element = document.getElementById("first");
/**Using this metod the last method overrides the above one **/
// element.onclick = function handleClick(){
//      element.textContent = "Strike is coming";
// }

// element.onclick = function handleClick(){
//      element.textContent = "Hello everyone";
// }


//Best Method
//callback function
//No method is overriden
// element.addEventListener('click',()=>{
//     element.textContent = "Strike is coming";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor = "pink";
// })



// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am Clicked";
// })


// const parent = document.getElementById("parent");
// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//        child.textContent = "I am Clicked";
//     })
// }


/**********Event Bubbling ****** */
const grandParent = document.getElementById("grandparent");
grandParent.addEventListener('click',(e)=>{
     console.log(e);
     //Points out to the element which triggered the event
     console.log(e.target);
    // console.log("GrandParent Clicked");

})

const Parent = document.getElementById("parent");
Parent.addEventListener('click',()=>{
     console.log("Parent Clicked");
})

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
     console.log("child Clicked");
     //To stop bubbling
     e.stopPropagation();
})// to useCapture use third parameter as true


//Capture phase  ON : Top to down event is triggered
//Capture Phase OFF / BUBBLING ON : Bottom to top event is triggered



//How to remove event listener
function handleClick(e){
     console.log("GrandParent Clicked");
     grandParent.removeEventListener('click',handleClick);
}

grandParent.addEventListener('click',handleClick);
