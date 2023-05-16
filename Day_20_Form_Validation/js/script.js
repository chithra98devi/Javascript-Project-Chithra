const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

String.prototype.isEmail = function () {
  return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

String.prototype.isAlpha = function () {
  return !!this.match(/^[a-zA-Z]*$/);
};

function checkRequiredFields(arrayInputs) {
  arrayInputs.forEach((inputElement) => {
    if (inputElement.value.trim() === "") {
      errorInput(inputElement, `${getName(inputElement)} is Required`);
    } else {
      successInput(inputElement);
    }
  });
}

function getName(inputElement) {
  return inputElement.getAttribute("data-item");
}

function errorInput(inputElement, message) {
  // console.log(message, inputElement);
  const formGroup = inputElement.parentElement;
  formGroup.className = "form-group error";
  const p = formGroup.querySelector("p");
  p.innerHTML = message;
}

function successInput(inputElement) {
  const formGroup = inputElement.parentElement;
  formGroup.className = "form-group success";
  const p = formGroup.querySelector("p");
  p.innerHTML = "";
}

function checkLength(inputElement, min, max) {
  const data = inputElement.value.trim().length;
  if (data < min) {
    errorInput(
      inputElement,
      `${getName(inputElement)} must be greater than ${min} characters`
    );
  } else if (data > max) {
    errorInput(
      inputElement,
      `${getName(inputElement)} must be less than ${max} characters`
    );
  } else {
    successInput(inputElement);
  }
}

function checkConfirmPassword(password, password2) {
  if (password.value != password2.value) {
    errorInput(
      password2,
      "Confirm password should not match the original password"
    );
  }
}

function checkEmail(input) {
  if (!input.value.trim().isEmail()) {
    errorInput(input, `This is not an valid email address`);
  }
}
function checkAlpha(input) {
  if (!input.value.trim().isAlpha()) {
    errorInput(input, `${getName(input)}  Must be Alphabets`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequiredFields([username, email, password, password2]);
  checkLength(username, 5, 10);
  checkLength(password, 5, 10);
  checkConfirmPassword(password, password2);
  checkEmail(email);
  checkAlpha(username);
});
