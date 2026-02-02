const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const Boy = document.getElementById("Boy");
   const Girl = document.getElementById("Girl");
   const length1 = Boy.value.length;
   const length2 =Girl.value.length;
   const result = Math.pow((length1 + length2),3) % 100;
   document.getElementById("result").textContent = `Love Percentage is ${result}%`;
   form.reset();

});