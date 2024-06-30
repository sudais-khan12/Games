let button = document.querySelectorAll(".but");
let you = document.querySelector(".you");
let comp = document.querySelector(".com");
let result = document.querySelector(".result");
let userPoint = 0;
let compPoint = 0;
let btn = document.querySelector(".switch");
let body = document.querySelector("body");
let navbar = document.querySelector(".nav");
let fir = document.querySelector("#paper");
let sec = document.querySelector("#rock");
let trd = document.querySelector("#scissor");
let all1 = document.querySelector(".new1");
let all2 = document.querySelector(".new2");
let mode = "light";
let winner = (userwin) => {
  if (userwin) {
    userPoint++;
    you.innerHTML = userPoint;
    result.innerHTML = "YOU WIN!!!!";
    result.style.backgroundColor = "blue";
    console.log("you win");
  } else {
    compPoint++;
    comp.innerHTML = compPoint;
    result.innerHTML = "YOU LOSE * - *";
    result.style.backgroundColor = "red";
    console.log("you lose");
  }
};

let draw = () => {
  result.innerHTML = "DRAW ^ ! ^";
  result.style.backgroundColor = "black";
  console.log("draw");
};

let playGame = (userChoice) => {
  let compChoice = gencompChoice();
  console.log(`user choice is = ${userChoice}`);
  console.log(`computer choice is = ${compChoice}`);
  if (userChoice == compChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice == "paper") {
      userwin = compChoice == "scissor" ? false : true;
    } else if (userChoice == "rock") {
      userwin = compChoice == "paper" ? false : true;
    } else {
      userwin = compChoice == "rock" ? false : true;
    }
    winner(userwin);
  }
};

button.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

let gencompChoice = () => {
  let name = ["paper", "rock", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return name[num];
};

// let dark = () => {
//     body.style.backgroundColor = "black";
//     navbar.classList.add("nav-changer");
//     fir.classList.add("nav-changer");
//     sec.classList.add("nav-changer");
//     trd.classList.add("nav-changer");
//     result.classList.add("nav-changer");
//     you.classList.add("color");
//     comp.classList.add("color");
//     all1.classList.add("color");
//     all2.classList.add("color");
// }
// if ( mode == "light" ){
//     mode = "dark";
//     btn.addEventListener("click", dark() );
// } else {
//     mode = "light";
//     btn.removeEventListener("click", dark() );
// }

btn.addEventListener("click", () => {
  if (mode == "light") {
    mode = "dark";
    body.style.backgroundColor = "black";
    navbar.classList.add("nav-changer");
    fir.classList.add("nav-changer");
    sec.classList.add("nav-changer");
    trd.classList.add("nav-changer");
    result.classList.add("nav-changer");
    you.classList.add("color");
    comp.classList.add("color");
    all1.classList.add("color");
    all2.classList.add("color");
  } else {
    mode = "light";
    body.style.backgroundColor = "white";
    navbar.classList.remove("nav-changer");
    fir.classList.remove("nav-changer");
    sec.classList.remove("nav-changer");
    trd.classList.remove("nav-changer");
    result.classList.remove("nav-changer");
    you.classList.remove("color");
    comp.classList.remove("color");
    all1.classList.remove("color");
    all2.classList.remove("color");
  }
});
