let likeProducts = document.getElementsByClassName("af");
let likeNumber;
if (!localStorage.likeNumber) {
    likeNumber = [0,0,0,0,0,0,0,0];
    localStorage.likeNumber = JSON.stringify(likeNumber);
   
} else {
    likeNumber = JSON.parse(localStorage.likeNumber);
}


for (let i = 0; i < likeProducts.length; i++) {
    likeProducts[i].addEventListener("click", (event) => {
        let sut = +likeProducts[i].innerText;
        likeProducts[i].innerText = ++sut;
        likeNumber[i] = sut
        localStorage.likeNumber = JSON.stringify(likeNumber)
    })
}



for (let i in likeProducts) {
    likeProducts[i].innerText = likeNumber[i]
}

