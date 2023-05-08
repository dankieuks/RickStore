let addButton = document.getElementsByClassName('add-cart');
const BASE_URL = 'https://636a61ecc07d8f936d9c3114.mockapi.io/Final';
let productList;
if (!localStorage.productList) {
    // Nếu như chưa có thì khởi tạo = []
    localStorage.productList = JSON.stringify([]);
    productList = [];
} else {
    productList = JSON.parse(localStorage.productList);
}

if(localStorage.username == undefined){
    for (let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', (event) => {
            alert("Bạn phải đăng nhập!");
            

        window.location.replace("login.html")
        })
    }
}else{
    for (let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', (event) => {
            alert("Đã thêm sản phẩm vào giỏ hàng!")
            fetch(BASE_URL + `/${i + 1}`)
                .then((response) => response.json())
                .then((product) => {
                    productList.push(product);
                    localStorage.productList = JSON.stringify(productList);
                })
        })
    }
}
