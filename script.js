const myButton = document.getElementById("myButton");
const myLable = document.getElementById("myLable");


let randomNum;
let max;
let min;

myButton.onclick = function () {
  max = document.getElementById("max").value;
  min = document.getElementById("min").value;
  max = Number(max);
  min = Number(min);
  randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  myLable.textContent = randomNum;
};
