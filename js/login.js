let loginForm = document.getElementById("login-form");
let loginBtn = document.getElementById("login-btn");
let errorMessage = document.getElementsByClassName("error-message");

console.dir(loginForm)

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // reset error
    for (let i = 0; i < errorMessage.length; i++) {
        errorMessage[i].innerText = "";
    }
    // GET VALUE FROM INPUT
    let username = loginForm.username.value;
    let email = loginForm.email.value;
    let password = loginForm.password.value;

    if (username.length < 5) {
        
        errorMessage[0].innerText = "Tên tài khoản quá ngắn";
        return;
    }

    if (email.length < 8) {
        
        errorMessage[1].innerText = "Email quá ngắn";
        return;
    }

    if (password.length < 8) {
       
        errorMessage[2].innerText = "Mật khẩu quá ngắn";
        return;
    }
    localStorage.username = username;
    window.location.replace('index.html')
});