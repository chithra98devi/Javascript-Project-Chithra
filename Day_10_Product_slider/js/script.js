const imgs = document.querySelectorAll(".img a");

const imgDiv = document.querySelectorAll(".img");
let imgId = 1;

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;
    imgDiv.forEach((allImg) => {
      allImg.classList.remove("active");
    });
    img.parentElement.classList.add("active");
    moveImagefn();
  });
});

function moveImagefn() {
  const ImgWidth = document.querySelector(
    ".main-image img:first-child"
  ).clientWidth;

  let width = (imgId - 1) * ImgWidth;

  document.querySelector(
    ".main-image"
  ).style.transform = `translateX(${-width}px)`;
}

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const qtnText = document.querySelector("#qtn");

minusBtn.addEventListener("click", () => {
  let qty = parseInt(qtnText.value);

  if (qty > 0) {
    qty--;
  }
  qtnText.value = qty;
});

plusBtn.addEventListener("click", () => {
  let qty = parseInt(qtnText.value);

  if (qty > 0 && qtn < 5) {
    qty++;
  }
  qtnText.value = qty;
});
