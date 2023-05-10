const inputBox = document.querySelector("#searchText");
const suggestBox = document.querySelector(".suggest-box");

inputBox.addEventListener("keyup", filterSuggestions);

inputBox.addEventListener("click", () => {
  inputBox.select();
});

async function filterSuggestions() {
  const jsonResponse = await fetch("./data/data.json");
  const keyWordlist = await jsonResponse.json();
  const inputLength = this.value.trim();
  let suggest = [];

  if (inputLength) {
    suggest = keyWordlist.filter((keywords) => {
      return keywords.search.toLowerCase().includes(inputLength.toLowerCase());
    });
  }
  display(suggest);
  if (!suggest.length) {
    suggestBox.innerHTML = "";
  }
}

function display(suggest) {
  const content = suggest.map((maplist) => {
    return `<li onclick="selectInput(this)">${maplist.search}</li>`;
  });
  suggestBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  suggestBox.innerHTML = "";
}
