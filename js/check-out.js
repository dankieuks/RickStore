let total= document.getElementById('total')
let subTotal=document.getElementById('subTotal')
let checkout__total__products=document.getElementById('checkout__total__products');

let productList=[];
productList=JSON.parse(localStorage.productList);


total.innerText=localStorage.total;
subTotal.innerText=localStorage.subTotal;
checkout__total__products.innerHTML='';
for(let i=0;i<productList.length;i++){
    checkout__total__products.innerHTML+=`
    <li>0${i+1}. ${productList[i].name} <span>${productList[i].price}</span></li>
    `
}



