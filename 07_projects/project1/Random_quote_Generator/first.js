const quotes = [
  "Less is more.",
  "Keep going.",
  "This too shall pass.",
  "Be here now.",
  "Choose kindness.",
  "Dream, then do.",
  "Progress over perfection.",
  "Stay curious.",
  "Breathe and believe.",
  "Begin again."
];

const button =document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click",()=>{
   const index = Math.floor(Math.random()*20);
   quote.textContent = quotes[index];
});
