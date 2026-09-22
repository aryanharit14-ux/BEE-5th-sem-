let cart=JSON.parse(localStorage.getItem("cart"))||[];

let container=document.getElementById("cartContainer");

display(cart);

function display(data){

container.innerHTML="";

data.forEach(function(ele,index){

let card=document.createElement("div");
card.className="card";

let h3=document.createElement("h3");
h3.innerText=ele.name;

let p=document.createElement("p");
p.innerText=ele.email;

let btn=document.createElement("button");
btn.innerText="Delete";

btn.onclick=function(){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

display(cart);

}

card.append(h3,p,btn);

container.append(card);

})

}