// callback function
// A function which is passed as an argument is called callback

// function greetStudents(callback){
//     callback() ----> callback function
// }

// higher order function
// A function which takes another function as an argument 

// forEach, map,filter,reduce,sort
// array methods

// let arr = [2,4,6,7,8,9]
// // length --> 6

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// less lines of code
// easy to read
// mostly used in react, angular

// let arr = [2,4,6,7,8,9]
// arr.forEach((el)=>console.log(el*2))

//don't have to give conditions
// you can't reverse array here

// map --> It will return array in result

// console.log("Map Method")

// let ages=[20,30,40,50]
// let result = ages.map((item)=>item+1)
// console.log(result)

// let ages=[20,30,40,50]
// let result = ages.map((item)=>{
//     let a=15
//     return item+1
// })
// console.log(result)

// let products = [
//     {name:"iphone-14",price:70000,qty:4},
//     {name:"S-24",price:120000,qty:3},
//     {name:"Realme",price:20000,qty:4}
// ]
// // 
// let prices = products.map((el)=>el.price)
// console.log("Prices ",prices)

// filter
//console.log("Filter Method")
//let numbers = [3,4,5,6,7,8,9,10,11,12]
// even numbers

// let even=numbers.filter((el)=>{
//     return el%2==0
// })
// console.log("Even: ",even)

// reduce-
// It will return single value
// by doing some mathematical operation
// on whole array

// console.log("Reduce Method")

// let ages = [10,30,40,50]

// let result = ages.reduce((acc,el)=>{
//     return acc+el
// },4)

// accumulator --> starting value

// console.log(result)


// sort

// let num =[2,1,3,4,5]
// num.sort()
// console.log(num)

// num.sort((a,b)=>b-a)
// console.log(num)


// If you want to run javascript outside of browser then we need node js

// v8 engine(node) --> chrome

// json -->