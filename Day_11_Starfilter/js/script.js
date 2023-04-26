const stars = document.querySelectorAll(".star");
const ratingText = document.querySelector(".current-rating");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const starRating = index + 1;
    ratingText.innerText = `${starRating} out of 5`;

    stars.forEach((star, i) => {
      if (starRating >= i + 1) {
        star.innerHTML = "&#9733;";
      } else {
        star.innerHTML = "&#9734;";
      }
    });
  });
});
