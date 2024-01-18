const myButton = document.getElementById("myButton");
const myLable = document.getElementById("myLable");

// let max = document.getElementById("max").value;
// let min = document.getElementById("min").value;

// let max = window.prompt("enter a max number");
// let min = window.prompt("enter a min number");

// max = Number(max);
// min = Number(min);

const max = 100;
const min = 0;

let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLable.textContent = randomNum;
};
