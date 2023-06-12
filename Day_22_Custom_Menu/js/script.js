const context = document.querySelector(".context-menu");

function menu(show = true) {
  context.style.display = show ? "block" : "none";
}

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menu(true);

  const topPX =
    e.y + context.offsetHeight > window.innerHeight
      ? window.innerHeight - context.offsetHeight
      : e.y;

  const leftPX =
    e.x + context.offsetWidth > window.innerWidth
      ? window.innerWidth - context.offsetWidth
      : e.x;

  context.style.top = topPX + "px";
  context.style.left = leftPX + "px";
});

window.addEventListener("click", function () {
  menu(false);
});
