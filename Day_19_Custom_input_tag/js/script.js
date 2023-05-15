const tagContainer = document.querySelector(".tag-container");
const inputText = document.querySelector(".tag-container input");

const btnClose = document.querySelector(".btnclose");
const btnCopy = document.querySelector(".btncopy");

let tags = [];

function createTag(tagName) {
  const div = document.createElement("div");
  div.setAttribute("class", "tag");
  const span = document.createElement("span");
  span.innerHTML = tagName;
  const icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle-outline");
  icon.setAttribute("data-item", tagName);
  div.appendChild(span);
  div.appendChild(icon);
  return div;
}

function reset() {
  const tagElement = document.querySelectorAll(".tag");
  tagElement.forEach((tag) => {
    tag.parentElement.removeChild(tag);
  });
}

function addTag() {
  reset();
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      tagContainer.prepend(createTag(tag));
    });
}

inputText.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const data = inputText.value.trim();
    if (data.includes(",")) {
      const list_of_tags = data.split(",");
      tags.push(...list_of_tags);
    } else {
      tags.push(data);
    }
    // console.log("before", tags);
    // tags = [...new Set(tags)];
    // console.log(tags);
    inputText.value = "";
    addTag();
  }
});

btnClose.addEventListener("click", function () {
  tags = [];
  reset();
});

document.addEventListener("click", function (event) {
  if ((event.target.tagName = "ION-ICON")) {
    const data = event.target.getAttribute("data-item");
    const filterTags = tags.filter((taglist) => {
      return taglist != data;
    });
    tags = filterTags;
    addTag();
  }
});

btnCopy.addEventListener("click", function () {
  if (tags.length) {
    navigator.clipboard
      .writeText(tags.toString())
      .then(() => {
        alert("Tag Copied to Clipboard !");
      })
      .catch(() => {
        console.error("Failed to Copy", error);
      });
  } else {
    alert("Please enter the text");
  }
});
