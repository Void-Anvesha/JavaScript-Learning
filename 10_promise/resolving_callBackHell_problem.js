//zomato application


const orderDetail = {
    orderID : 123123,
    food : ["Pizza" , "Burger" , "Coke"],
    cost : 620,
    customerName : "Anvesha",
    customerLocation : "Rastogi Ganj",
    restaurantLocation: "Chowk"
}


function placeOrder(orderDetail ){
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
        setTimeout(() =>{

    if(Math.random() > 0.1){
       console.log("Payment is recieved and order get placed");
       orderDetail.status = true;
       //return karke derha orderDetail
       resolve(orderDetail);}

    else{
        reject("Payment is failed");
       }
    },3000)
    })

}


function preparingOrder(orderDetail ){
    console.log(`Your food preparation has started of ${orderDetail.food}`);


     return new Promise((resolve,reject)=>{
       setTimeout(() =>{
        if(Math.random() > 0.1){
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);}
        else{
            reject("Food item is not prsent at restaurant")
        }
    },3000);
     })
   
}


function pickUpOrder(orderDetail ){
    console.log(`Delivery is on a way to pickup order from ${orderDetail.restaurantLocation}`);
    
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(Math.random() > 0.1){
        console.log("I've picked uo the order");
        orderDetail.recieved = true;
        resolve(orderDetail);}
        else{
            reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
     })
    
}


function deliverOrder(orderDetail){
    console.log(`I'm on my way to deliver order ${orderDetail.customerLocation}` );

     return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Order delivered successfully");
    orderDetail.deliveryStatus = true;
    resolve(orderDetail);
    },3000);
     })
    
}


placeOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickUpOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error :", error);
})


//even if the promise is fulfilled or rejected finally block will always be executed
.finally(() =>{
    console.log("Jai Shree Krishna ")
})