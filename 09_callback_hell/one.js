//zomato application


const orderDetail = {
    orderID : 123123,
    food : ["Pizza" , "Burger" , "Coke"],
    cost : 620,
    customerName : "Anvesha",
    customerLocation : "Rastogi Ganj",
    restaurantLocation: "Chowk"
}


function placeOrder(orderDetail , Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(() =>{
       console.log("Payment is recieved and order get placed");
       orderDetail.status = true;
       Callback(orderDetail);
    },3000)
}


function preparingOrder(orderDetail , Callback){
    console.log(`Your food preparation has started of ${orderDetail.food}`);

    setTimeout(() =>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail);
    },3000);
}


function pickUpOrder(orderDetail , Callback){
    console.log(`Delivery is on a way to pickup order from ${orderDetail.restaurantLocation}`);

    setTimeout(()=>{
        console.log("I've picked uo the order");
        orderDetail.recieved = true;
        Callback(orderDetail);
    },3000);
}


function deliverOrder(orderDetail){
    console.log(`I'm on my way to deliver order ${orderDetail.customerLocation}` );

    setTimeout(()=>{
    console.log("Order delivered successfully");
    orderDetail.deliveryStatus = true;
    },3000);
}


//Callback function

/********** This is knows as Callback Hell **********/
placeOrder(orderDetail , (orderDetail)=>{
    preparingOrder(orderDetail , ()=>{
        pickUpOrder(orderDetail , ()=>{
            deliverOrder(orderDetail);
        });
    });
});

