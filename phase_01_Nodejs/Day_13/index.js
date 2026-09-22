// // ES6 => Ecmascript 6 => 2015

// // let, const, arrow function,destructing,spread,rest


// // template literals 
// // before this if we want to put variablein string we had to use + sign

// let name = "aman"
// let age = 27

// console.log("My name is" +name+"And My age is " + age) // before ES6
// // too many plus signs here

// console.log(`My name is ${name} and my age is ${age}`) // after ES6


// let student={
//     name:"Kartik",
//     age:28
// }
// console.log(student.name) //"Kartik"

// let {name,age}=student
// console.log(age) // 28

// //Array Destructuring

// let arr=[20,40,60,70]
// //console.log(arr[0])

// let[a,b,c]=arr
// console.log(a) // 20 
// console.log(b)  //  40




// // spread operator(...)
// // It is used to copy elements of array or object into another
// // array or object 

// let arr1=[10,20,30] //101 they share same memory referance
// let arr2=arr1       //101
// arr2.push(90)
// console.log(arr1) //    [10,20,30,90]
// console.log(arr2) //    [10,20,30,90]

// let arr3=[25,50,75,100]         // 101  share different memory reference
// let arr4=[...arr3]      //201
// arr4.push(125)
// console.log(arr3)   //[25,50,75,100]
// console.log(arr4)   //[25,50,75,100,125]




// let fruits=["Apple","Mango"]
// let vegetables=["Potato","Tomato"];
// let food=[...fruits,...vegetables]
// console.log(food);
// //fruits.concat(vegetables)




// let user={
//     naem:"Aman",
//     age:25
// };
// let newUser={
//     ...user
// };
// console.log(newUser) 


// let student={
//     name:"Kartik",
//     age:28,
//     mob_no:1234567890
// }
// let hostelStudent={
//     ...student,
//     city:"Delhi"
// }
// console.log(hostelStudent)  //{name: 'Kartik', age: 28, city: 'Delhi'}

let todo={
    title:"Learn React",
    status:false
}
let newTodo={
    ...todo,
    status:true
}
console.log(newTodo)  //{title: 'Learn React', status: true}