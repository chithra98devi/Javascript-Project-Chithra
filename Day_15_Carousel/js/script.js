let slidePosition = 0;
const slideItems = document.querySelectorAll(".slider-item");
const totalSlide = slideItems.length;

const btnPrev = document.querySelector(".slide-prev");
const btnNext = document.querySelector(".slide-next");

btnPrev.addEventListener("click", function () {
  prevSlide();
});

btnNext.addEventListener("click", function () {
  nextSlide();
});

function updatePosition() {
  slideItems.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });

  dots.forEach((dotted) => {
    dotted.classList.remove("dot-active");
  });
  slideItems[slidePosition].classList.add("active");
  dots[slidePosition].classList.add("dot-active");
}

function prevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlide - 1;
  } else {
    slidePosition--;
  }

  updatePosition();
}

function nextSlide() {
  if (slidePosition == totalSlide - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();
}

const dotContainer = document.querySelector(".dots");

slideItems.forEach((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[slidePosition].classList.add("dot-active");

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slidePosition = index;
    updatePosition();
  });
});

setInterval(() => {
  nextSlide();
}, 5000);
