// let a=[1,2,3,4]
// let s=a.length;
// console.log(s)

// let a=["HTML","CSS","JS","React"]
// let s=a.toString();
// console.log(s)

// let a=["HTML","CSS","JS","React"]
// let s=a.join("?");
// console.log(s)

// join is used to combine array of strings with specified delimiter

// let a1=["HTML,CSS,JS"]
// let a2=["PA","DSA"]
// let a3=["BEE","NALR"]
// let newArr=a1.concat(a2,a3) // [11,12,13,14,15,16.....]
// console.log(newArr)

// let a1=["HTML","CSS","JS"]
// let s=a1.push("REACT")
// console.log(a1)

// push -- add elements at the end of array

// let array = [1, 2, 3];
// array.push(4, 5);
// console.log(array);

// let arr = [10, 20];
// let len = arr.push(30);
// console.log(arr); // [10, 20, 30]
// console.log(len); // 3

// unshift -- add elements at the beginning of array

// let array = [3, 4, 5];
// array.unshift(1, 2);
// console.log(array);

// let arr = ["CSS", "JS"];
// let len = arr.unshift("HTML");
// console.log(arr); // ["HTML", "CSS", "JS"]
// console.log(len); // 3

// shift -- remove first element from array

// let array = [3, 4, 5];
// array.shift();
// console.log(array);

// pop - remove last element from array

// let array = [3, 4, 5];
// array.pop();
// console.log(array);

// let num = [30,40,50,60,70]
// // from 1st index I want delete 3 elements
// num.splice(1,3) //(a,b) => a=index, b=number of elements to delete
// // [30,70]

// let num = [30,40,50,60,70]
// num.splice(1,0,110,120,130) //(a,b,...c) => c will add elements at custom index
// // [ 30, 110, 120, 130, 70 ]
// console.log(num)

// let numbers = [20,50,70,80,40]
// let piece = numbers.slice(1,4) //(start,end)
// console.log(piece)

// let arr = ["HTML","css","js"]
// arr.splice(1,0)  // [ 'HTML', 'css', 'js' ]
//arr.splice(1,1,"Angular","Node")
// console.log(arr)  // [ 'HTML', 'Angular', 'Node', 'js' ]