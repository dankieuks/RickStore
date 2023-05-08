let listProduct = document.getElementById("cartBody");
let productList = [];
productList = JSON.parse(localStorage.productList);

let apply = document.getElementById('apply');
let subTotal = document.getElementById("subTotal");
let total = document.getElementById("total");
let priceSum = 0;
localStorage.subTotal = 0;
localStorage.total = 0;
showListProduct(productList);
function showListProduct(productList) {
    listProduct.innerHTML = "";
    for (let i in productList) {
        listProduct.innerHTML += `
    <tr>
    <td class="product__cart__item">
        <div class="product__cart__item__pic">
            <img src=${productList[i].img} alt="">
        </div>
        <div class="product__cart__item__text">
            <h6>${productList[i].name}</h6>
            <h5>${productList[i].price}</h5>
        </div>
    </td>
    <td class="quantity__item">
        <div class="quantity">
            <div class="pro-qty-2">
                <input type="text" placeholder="0" class='amount'>
            </div>
        </div>
    </td>
    <td class="cart__price">${productList[i].price}</td>
    <td class="cart__close"><input type="checkbox" class='checkBox'></td>
</tr>
            `;
    }
}
let amountList = document.getElementsByClassName('amount')
let checkBox = document.getElementsByClassName("checkBox");
console.log(checkBox);
for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("change", (e) => {

        if (e.target.checked) {
            let amount = +amountList[i].value
            let price = productList[i].price;
            price = price.slice(1);
            console.log(amount)
            priceSum += +price * amount;
            total.innerHTML = `${priceSum.toFixed(2)}`;
            subTotal.innerText = `${priceSum.toFixed(2)}`;
            localStorage.total = priceSum;
            localStorage.subTotal = priceSum
        } else {
            let amount = +amountList[i].value
            let price = productList[i].price;
            price = price.slice(1);
            priceSum -= +price * amount;
            if (priceSum < 1) {
                priceSum = 0
            }
            total.innerHTML = `${priceSum.toFixed(2)}`;
            subTotal.innerText = `${priceSum.toFixed(2)}`;
            amountList[i].value = 0;
        }
    });
}

apply.addEventListener('click', (e) => {
    e.preventDefault();
    let coupon = document.getElementById('coupon').value;
    if (coupon == 'mindX800k') {
        priceSum = priceSum * 0.8;
        priceSum = priceSum.toFixed(3)
        total.innerHTML = `${priceSum}`;
        localStorage.total = priceSum;
    }
})