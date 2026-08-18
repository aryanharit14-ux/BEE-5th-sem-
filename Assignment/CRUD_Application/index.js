//json-server ==>dummy database for your data


let getData=async()=>{
    let resp=await fetch("http://localhost:3000/users",
        {method:"GET"}
    )
    let data=await resp.json()
    // console.log(data)
    displayData(data)
}
getData().then(() => {})

let displayData=(data)=>{
    console.log("Display function data",data)


    data.array.forEach(element => {
        container.innerHTML+=`
        <div>
            <h2>${element.html}</h2>
            <p>{element.eamil}</p>
            <p>{element.age}</p>
            <button onclick="handelDelete(${element.id})">Delete</button>
            <button>Update</button>
        </div>
        `
    });
}

let handelDelete=(userId)=>{
    alert(`User Id is ${userId}`)
}