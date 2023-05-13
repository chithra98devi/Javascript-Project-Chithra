const toggleBtn = document.querySelector("#toggleBtn");
const inputBox = document.querySelector(".input-container input");

let password = true;

toggleBtn.addEventListener("click", function () {
  if (password) {
    inputBox.setAttribute("type", "text");
    password = false;
    toggleBtn.classList.remove("fa-eye");
    toggleBtn.classList.add("fa-eye-slash");
  } else {
    inputBox.setAttribute("type", "password");
    password = true;
    toggleBtn.classList.remove("fa-eye-slash");
    toggleBtn.classList.add("fa-eye");
  }
});
