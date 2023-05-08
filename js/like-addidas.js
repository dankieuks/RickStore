let likeProducts = document.getElementsByClassName("af");
let likeAddidas;
if (!localStorage.likeAddidas) {
    likeAddidas = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    localStorage.likeAddidas = JSON.stringify(likeAddidas);
   
} else {
    likeAddidas = JSON.parse(localStorage.likeAddidas);
}


for (let i = 0; i < likeProducts.length; i++) {
    likeProducts[i].addEventListener("click", (event) => {
        let sut = +likeProducts[i].innerText;
        likeProducts[i].innerText = ++sut;
        likeAddidas[i] = sut
        localStorage.likeAddidas = JSON.stringify(likeAddidas)
    })
}



for (let i in likeProducts) {
    likeProducts[i].innerText = likeAddidas[i]
}

