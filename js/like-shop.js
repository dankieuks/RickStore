let likeProducts = document.getElementsByClassName("af");
let likeShop;
if (!localStorage.likeShop) {
    likeShop = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    localStorage.likeShop = JSON.stringify(likeShop);
   
} else {
    likeShop = JSON.parse(localStorage.likeShop);
}


for (let i = 0; i < likeProducts.length; i++) {
    likeProducts[i].addEventListener("click", (event) => {
        let sut = +likeProducts[i].innerText;
        likeProducts[i].innerText = ++sut;
        likeShop[i] = sut
        localStorage.likeShop = JSON.stringify(likeShop)
    })
}



for (let i in likeProducts) {
    likeProducts[i].innerText = likeShop[i]
}

