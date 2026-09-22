// console.log(name)
// console.log(age)
// let age =30
// let name = "John"

// let num =10
// const n=10
// // n=200
// console.log(num)


// // sync.js

// let name = "John"
// let age = 30

// console.log(`Name is ${name} and age is ${age}`)

// Promise

// callback function

// function greet(callback){
//     console.log("Welcome to Chitkara")
//     callback()
// }

// function greetMorning(){
//     console.log("Good Morning")
// }

// greet(greetMorning)

// blinkit

// function paymentFunction(orderFun) {
//     console.log("Payment is getting started");

//     setTimeout(function () {
//         console.log("Payment is confirmed");
//         orderFun();
//     }, 3000);
// }

// function orderFunction(deliverFun) {
//     console.log("Order is getting packed");

//     setTimeout(function () {
//         console.log("Order is ready");
//         deliverFun();
//     }, 3000);
// }

// function deliverFunction(otpFun) {
//     console.log("Delivery Partner is getting assigned");

//     setTimeout(function () {
//         console.log("Order Picked Up");
//         otpFun();
//     }, 3000);
// }

// function otpFunction() {
//     console.log("OTP: 1234");
// }

// paymentFunction(function () {
//     orderFunction(function () {
//         deliverFunction(function () {
//             otpFunction();
//         });
//     });
// });
// callback hell

// // promises

// paymentFunction.then(orderFunction).then(deliverFunction).then(otpFunction)


// api --> it is an interface to communicate between two systems or between server and client.

// https://dummyjson.com/products
// get


// let response = fetch('https://dummyjson.com/products').then(function(res){
// return res.json()
// }).then(function(data){
//     console.log(data.products)
// })


