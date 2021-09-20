const buttons = document.querySelectorAll(".button");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const output = document.querySelector("#operand");
let screenDisplay = output.innerText;

// const displayValue = document.querySelector("#operand").innerText;

buttons.forEach(() => {
  addEventListener("click", updateDisplay);
});

function updateDisplay(e) {
  if (e.target.classList.contains("number")) {
    let display = e.target.value;
    document.querySelector("#operand").innerText += display;
    console.log(e.target.value);
  } else if (e.target.classList.contains("decimal-point")) {
    let display = e.target.value;
    document.querySelector("#operand").innerText += display;
    console.log(e.target.value, "decimal-point");
  } else if (e.target.classList.contains("operator")) {
    console.log(e.target.value, "operator");
  } else if (e.target.classList.contains("clear-entry")) {
    console.log("clear-entry");
  } else if (e.target.classList.contains("clear-all")) {
    console.log("clear-all");
  }
}
