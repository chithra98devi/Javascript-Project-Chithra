const radioElement = document.querySelectorAll("input");
const feedBack = document.querySelector(".feedback");

radioElement.forEach((radio) => {
  radio.addEventListener("click", () => {
    let value = radio.value;
    feedBack.innerHTML = `${value} out of 5`;
  });
});
