const newElement = document.createElement("h2");
newElement.textContent = "This is a created node using JavaScript";
newElement.id = "createdNode";

//select element
const element = document.getElementById("first");
//append new element after the selected element
element.after(newElement);

//to insert before the selected element
//element.before(newElement);


const newElement2 = document.createElement("h3");
newElement2.textContent = "This is another created node using JavaScript"
newElement2.id = "anotherCreatedNode";

/****Adding class ****** */
//can be overriden by another class
//newElement2.className = "anotherClass";

newElement2.classList.add("anotherClass");
newElement2.classList.add("anotherClass2");


/********Adding style ********* */
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";
element.before(newElement2)

/********To know the info about specific element */
console.log(newElement2.getAttribute("class"));

/*******Setting atribute******* */
newElement2.setAttribute("hello","ji");

/********Adding el in an ul */
const list = document.createElement("li");
list.textContent ="Fatehpur"
const list2 = document.createElement("li");
list2.textContent ="Kanpur"
const list3 = document.createElement("li");
list3.textContent ="Varanasi"


//const unorderElement = document.getElementById("places");
unorderElement.append(list);
unorderElement.append(list2);

//For pushing in the front of list
unorderElement.prepend(list3);

//To convert arr into list & appending them to ul
const arr=["Agra","Delhi","Gorakhpur"];
const unorderElement = getElementById("places");
const fragment = document.createDocumentFragment();
for(let place of arr){
   const li =document.createElement("li");
   li.textContent= place;
   fragment.append(li);
}
//Updating the ul at once instead of updating in a loop one by one
unorderElement.append(fragment);


/************Without using fragment ***** */
const arrFragment=[];
for(let place of arr){
     const li =document.createElement("li");
     li.textContent = place;
     arrFragment.push(li);
}

unorderElement.append(...arrFragment);



/*********Removing an element *****/

const s1 = document.getElementById("second");
s1.remove();


/**********Children of an element **********/
const month = document.getElementById("ten")
console.log(month.children);

