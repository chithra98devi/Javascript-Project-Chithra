const modal = document.createElement("div");
modal.id = "model";
document.body.appendChild(modal);

// modal.classList.add("active");

const images = document.querySelectorAll(".imag");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("active");
    const newImag = document.createElement("img");
    newImag.src = image.src;
    newImag.id = "img";
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.append(newImag);
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});
