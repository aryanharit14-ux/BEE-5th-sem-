let h1=document.getElementById("title")
h1.innerText="This will change after 4 seconds"
setTimeout(function() {
    h1.innerText="Maa, Mai Aagaya"
},4000)

console.log("End")    