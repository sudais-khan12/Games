let boxes = document.querySelectorAll(".learn-more");
let reset = document.querySelector(".button");
let msg = document.querySelector(".winner");
let turnO = true;

let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", () => {
  turnO = true;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
  msg.style.display = "none";
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let showWinner = (fir) => {
  msg.style.display = "inline-block";
  msg.innerHTML = `${fir} Wins`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
  document.getElementById("myNav").style.height = "100%";
};

const checkWinner = () => {
  for (const pattern of patterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerHTML,
    //   boxes[pattern[1]].innerHTML,
    //   boxes[pattern[2]].innerHTML
    // );

    let fir = boxes[pattern[0]].innerHTML;
    let sec = boxes[pattern[1]].innerHTML;
    let thi = boxes[pattern[2]].innerHTML;
    if (fir != "" && sec != "" && thi != "") {
      if (fir == sec && sec == thi) {
        showWinner(fir);
      } 
    }
  }
};

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
}

let draw = () => {
  msg.style.display = "inline-block";
  msg.innerHTML = `DRAW`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
  document.getElementById("myNav").style.height = "100%";
};
