const navTab = document.querySelector(".nav-tab");

navTab.addEventListener("click", tabClick);

function tabClick(event) {
  const activeTab = document.querySelectorAll(".active");
  const pages = document.querySelectorAll(".page");
  activeTab.forEach((tab) => {
    tab.classList.remove("active");
  });

  pages.forEach((page) => {
    page.classList.remove("page-active");
  });

  event.target.parentElement.classList.add("active");
  const id = event.target.href.split("#")[1];
  pageList = document.getElementById(id);
  pageList.classList.add("page-active");
}
