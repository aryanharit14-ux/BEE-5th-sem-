// null, undefined, empty string, nan, 0, false -> falsy
// let a=null
// let b=""
// let c=NaN
// let d=0
// let e=false
// console.log(Boolean(e))
// console.log(Boolean(d))
// console.log(Boolean(c))
// console.log(Boolean(b))
// console.log(Boolean(a))
// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(true+6)
// console.log(false+3)

// Except these 6 values, all the values are truthy.

// ------------------------------------------------------------
// Type casting/conversion->
// Implicit or explicit

// let a="5"+10
// console.log(a) //type conversion will be done by js automatically (implicit)
// console.log(typeof(a))
// let b=8-"2" //if string is afterwards, it will convert the string to number and output will be 6
// console.log(b)
// let c=8*"2"
// console.log(c)
// let d = "5"*7
// console.log(d)
// let e ="5"*null
// console.log(e)

// let str = "125ABC"
// console.log(typeof(str)) // string
// let res = Number(str)
// console.log(res) // Nan --> Number
// console.log(typeof(res)) // Number

// let num = 17
// let s = String(num)
// console.log(typeof(s)) // string

// let z = "true"  // string
// let ans = Boolean(z)
// console.log(ans) // Boolean

// let number = "567"
// let r=+(number)
// console.log(typeof(r)) // number

// Logical Operators


// let a = false
// let b = 0
// let c = null
// let z = a||b||c   // if all values are falsy then || will return last falsy value
// console.log(z)

// let a = false
// let b = 'Vivek'
// let c = 'Rishi'
// let z = a||b||c  // this will return first truthy value
// console.log(z)

// let defaultUser = false
// let user = "Akash"
// console.log(defaultUser || user) // Akash

// let a = 'Prachi';
// let b = 'Vivek';
// let c = 'Rishi';
// let z = a && b && c; // if all values are true then && will return last truthy value
// console.log(z);

// is Authentication && is admin && showUI
// apidata --> undefined

// let user
// console.log(user ?? "Anonymous") // Anonymous

// let user = "John";
// console.log(user ?? "Anonymous"); // John (user is not null/undefined)

// Loops

// for(let i=0;i<5;i++)
// {
//     console.log("Hello World")
// }

// let obj={
//     name:"Aman",
//     age:22,
//     address:"Shimla"
// }

// for(let key in obj)
// {
//     console.log(key) //name,age,address
//     console.log(obj[key]) //Aman,22,Shimla
// }

// console.log(key)

const subjects = ['javascript','html','css']
for(let subject of subjects){
    console.log(subject)
}