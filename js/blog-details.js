let post = document.getElementById("commentbox");
let siteBtn = document.getElementById("site-btn");
let errorMessage = document.getElementsByClassName("error-message");
let showComment = document.getElementById("show-info");
const BASE_API = "https://6367c74bd1d09a8fa61a557c.mockapi.io/Comments";
let liList;
let liList_user;

if (!localStorage.liList) {
  localStorage.liList = JSON.stringify([]);
  liList = [];
} else {
  liList = JSON.parse(localStorage.liList);
}

if (!localStorage.liList_user) {
  localStorage.liList_user = JSON.stringify([]);
  liList_user = [];
} else {
  liList_user = JSON.parse(localStorage.liList_user);
}
render(liList_user, liList);

siteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userComment = post.usercomment.value;
  let emailComment = post.emailcomment.value;

  let textComment = post.textcomment.value;
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].innerText = "";
  }

  if (userComment.length < 1) {
    errorMessage[0].innerText = "Vui lòng nhập Usename ";
    return;
  }

  if (emailComment.length < 8) {
    errorMessage[1].innerText = "Email qua ngan chưa đúng form";
    return;
  }

  if (textComment.length < 1) {
    errorMessage[2].innerText = "Vui lòng thêm comment ";
    return;
  } else {
  }
  liList_user.push(userComment);
  localStorage.liList_user = JSON.stringify(liList_user);
  liList.push(textComment);
  localStorage.liList = JSON.stringify(liList);

  render(liList_user, liList);
});

function render(liList_user, liList) {
  showComment.innerHTML = "";

  for (let i in liList) {
    showComment.innerHTML += `           
      <ul style="list-style: none;">   
           <hr>
          <li  >
                 
            <img style="width: 60px; height:60px; border: 3px solid salmon; border-radius:50%;align-items: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-P-QgnxBA38dF20HP9434f6AQcySJn1C1g&usqp=CAU" alt="">
            <span style="  font-weight: bold ; font-size: 20px; margin-left:10px;"> ${liList_user[i]}</span><br>
            <span style="margin-left:75px"> ${liList[i]}</span>
            <hr>
          </li>
      </ul>    
             `;
  }
}
