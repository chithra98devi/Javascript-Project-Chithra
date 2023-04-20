const containerElement = document.getElementById("container");
const btnAdd = document.getElementsByClassName("btn-add")[0];

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("chithra-app") || "[]");
}

getLocalStorage().forEach((element) => {
  const textElement = createTextElement(element.id, element.content);
  containerElement.insertBefore(textElement, btnAdd);
});

function createTextElement(id, content) {
  const textElement = document.createElement("textarea");
  textElement.classList.add("sticky");
  textElement.value = content;
  textElement.placeholder = "Enter Your notes";

  textElement.addEventListener("change", () => {
    updateNotes(id, textElement.value);
  });

  textElement.addEventListener("dblclick", () => {
    const check = confirm("Are You sure to delete");
    if (check) {
      deleteNotes(id, textElement);
    }
  });
  return textElement;
}

function updateNotes(id, content) {
  const notes = getLocalStorage();
  const updateElement = notes.filter((note) => note.id == id)[0];
  updateElement.content = content;
  saveNotes(notes);
}

function addSticky() {
  const notes = getLocalStorage();
  const noteObject = {
    id: Math.floor(Math.random() * 10000),
    content: "",
  };
  const textElement = createTextElement(noteObject.id, noteObject.content);
  containerElement.insertBefore(textElement, btnAdd);
  notes.push(noteObject);
  saveNotes(notes);
}

function deleteNotes(id, textElement) {
  const notes = getLocalStorage().filter((note) => note.id != id);
  saveNotes(notes);
  containerElement.removeChild(textElement);
}

btnAdd.addEventListener("click", () => addSticky());

function saveNotes(notes) {
  localStorage.setItem("chithra-app", JSON.stringify(notes));
}
