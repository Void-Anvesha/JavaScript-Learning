const form = document.querySelector('form');

form.addEventListener('Submit',(e)=>{

    e.preventDefault();
    const income = document.getElementById("#income");
    const amt = parseInt(income.value);

    const result = document.querySelector('h2');
    let totalTax = 0;
    if(amt<=1200000)
        totalTax = 0;
    else if(amt <=1600000)
        totalTax = (amt - 1200000)*0.15;
    else if(amt <=2000000){
        totalTax = (60000) + (amt -1600000)*0.20;
    }else if(amt <=2400000){
        totalTax = (60000) +  80000 +(amt - 2000000)*0.25;
    }else{
        totalTax = 60000 + 80000 + 100000 +(amt - 2400000)*0.30;
    }
    result.textContent = `The total income tax to be paid is ${totalTax} INR`;


     e.reset();


})