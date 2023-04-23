const boxes = document.querySelectorAll(".box");
const searchFood = document.getElementById("search");
const buttons = document.querySelectorAll(".btn");

searchFood.addEventListener("keyup", (e) => {
  const searchText = e.target.value.toLowerCase().trim();

  boxes.forEach((box) => {
    const data = box.dataset.item;
    if (data.includes(searchText)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  buttons[0].classList.add("btn-clicked");
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveBtn(e);

    const btnFilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      if (btnFilter == "all") {
        box.style.display = "block";
      } else {
        const boxFilter = box.dataset.item;
        if (btnFilter == boxFilter) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      }
    });
  });
});

function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}
