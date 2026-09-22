// JS is a single threaded lang

let resp = fetch("https://dummyjson.com/products")

console.log(resp) 


// for code which takes time we put them in async function due to which furter code will be not kept on hold
// let fetchData = async() => {

//     try{
//         let resp = await fetch("https://dummyjson.com/products")
//         let json_products = await resp.json()
//         console.log(json_products)
//     } catch (error){

//     }
    

// }
// fetchData()

//ES6 => 2015
//Async Await => 2018

// .then 

let fetchData = async() => {

        let resp = await fetch("https://dummyjson.com/products")
        .then((apiresponse) =>{
            return apiresponse.json()
        
        }).then((json_products)=>{
            console.log(json_products)
            return fetch("https://dummyjson.com/products")
        }).then((response)=>{
            return response.json()
        })
        .then((json_recipies)=>{
            console.log(json_recipies)
        }).catch((error) =>{
            console.log(error)
        })

}



//Promise => JS Object which is gives representation of completition or rejection of any operation

// three states response
// 1. Pending => fetching data will take some time
// 2. Success => data is fetched
// 3. Error/Faliure => data will be lost