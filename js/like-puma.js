let likeProducts = document.getElementsByClassName("af");
let likePuma;
if (!localStorage.likePuma) {
    likePuma = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    localStorage.likePuma = JSON.stringify(likePuma);
   
} else {
    likePuma = JSON.parse(localStorage.likePuma);
}


for (let i = 0; i < likeProducts.length; i++) {
    likeProducts[i].addEventListener("click", (event) => {
        let sut = +likeProducts[i].innerText;
        likeProducts[i].innerText = ++sut;
        likePuma[i] = sut
        localStorage.likePuma = JSON.stringify(likePuma)
    })
}



for (let i in likeProducts) {
    likeProducts[i].innerText = likePuma[i]
}

