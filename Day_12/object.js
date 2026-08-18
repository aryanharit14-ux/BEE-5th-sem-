let person={
    Name:"Aman",
    age:28,
    address:"Shimla"

}

console.log(Name)
console.log(Name.address)
console.log(person['age'])

let subject = new Object()
subject.sub_name = "BED"
subject.credit= 4
subject.duration = "6 Months"
console.log(subject)

delete subject['duration']
console.log(subject)


// CHecking existig properties

// let obj = {model : "Tesla"};
console.log("color" in obj); //False
console.log(obj.hasOwnProperty("model")); // True

let obj = {name:"sorav",age:23}

for(let key in obj){
    console.log(key + ": " + obj[key])
}

console.log(Object.keys(obj))   //['name', 'age']
console.log(Object.values(obj)) //['sorav', 23]

console.log(Object.keys(obj).lenghth) // 2

let student = {
    name:"Rahul",
    age:21,
    city:"Delhi",
    id:{
        adhar:"5230 xxxx xxxx xxxx",
        pan:"JpxxxxP"
    }
}
console.log(student.name)
console.log(student.age)
console.log(student.city)
// let {name,age,city} = student

console.log(name)
console.log(age)

let {name:Username,age,city,id:{adhar,pan}} = student

console.log(name)
console.log(age)
console.log(username)
console.log(pan)