const btnCopy = document.querySelector("#btnCopy");
const outputElement = document.querySelector("#output");

const lengthElement = document.querySelector("#length");
const numberElement = document.querySelector("#number");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const symbolElement = document.querySelector("#symbol");
const frm = document.querySelector("#frm");

// print
// console.log(frm);

btnCopy.addEventListener("click", async () => {
  const pass = outputElement.value;
  if (pass) {
    await navigator.clipboard.writeText(pass);
    alert("Copy to clipboard");
  } else {
    alert("There is no copy to clipboard");
  }
});

function generateRandomumber(max, min) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function capitalValue() {
  return generateRandomumber(65, 90);
}

function smallValue() {
  return generateRandomumber(97, 122);
}

function numberValue() {
  return generateRandomumber(48, 57);
}

function symbolValue() {
  const symbols = "!@#$%^&*(){}[]<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const functionArray = [
  {
    element: numberElement,
    fun: numberValue,
  },
  {
    element: capitalElement,
    fun: capitalValue,
  },
  {
    element: smallElement,
    fun: smallValue,
  },
  {
    element: symbolElement,
    fun: symbolValue,
  },
];

// console.log(functionArray);

frm.addEventListener("submit", (e) => {
  const limit = lengthElement.value;

  e.preventDefault();

  const funArray = functionArray.filter(({ element }) => element.checked);

  let passWordGenerate = "";

  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    passWordGenerate += funArray[index].fun();
  }

  outputElement.value = passWordGenerate;
});
