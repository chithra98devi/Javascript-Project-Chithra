const boxs = document.querySelectorAll(".box");
const statusTxt = document.querySelector("#status");
const restart = document.querySelector(".restart");

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let x = '<img src="images/x.png">';
let o = '<img src="images/o.png">';

let currentPlayer = x;
let player = "X";

let options = ["", "", "", "", "", "", "", "", ""];
let running = false;

init();

function init() {
  boxs.forEach((box) => box.addEventListener("click", boxClick));
  statusTxt.textContent = `${player} Your turn`;
  restart.addEventListener("click", restartGame);
  running = true;
}

function boxClick() {
  const index = this.dataset.index;
  if (options[index] != "" && !running) {
    return;
  }

  updateBox(this, index);
  checkWinner();
}

function updateBox(box, index) {
  options[index] = player;
  box.innerHTML = currentPlayer;
}

function changePlayer() {
  player = player == "X" ? "O" : "X";
  currentPlayer = currentPlayer == x ? o : x;
  statusTxt.textContent = `${player} Your turn`;
}

function checkWinner() {
  let isWon = false;

  for (i = 0; i < win.length; i++) {
    const conditions = win[i];
    const box1 = options[conditions[0]];
    const box2 = options[conditions[1]];
    const box3 = options[conditions[2]];

    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    }

    if (box1 == box2 && box2 == box3) {
      isWon = true;
      boxs[conditions[0]].classList.add("win");
      boxs[conditions[1]].classList.add("win");
      boxs[conditions[2]].classList.add("win");
    }
  }

  if (isWon) {
    statusTxt.textContent = `${player} won`;
  } else if (!options.includes("")) {
    statusTxt.textContent = `Game Draw..!`;
  } else {
    changePlayer();
  }
}

function restartGame() {
  options = ["", "", "", "", "", "", "", "", ""];
  running = true;
  currentPlayer = x;
  player = "X";
  statusTxt.textContent = `${player} Your Turn`;

  boxs.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("win");
  });
}
