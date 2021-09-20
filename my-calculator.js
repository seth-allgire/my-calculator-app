const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector("#operand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

buttons.forEach(() => {
  addEventListener("click", updateDisplay);
});

function updateDisplay(e) {
  if (e.target.classList.contains("number")) {
    let display = e.target.value;
    displayValue.innerText += display;
    console.log(e.target.value);
  } else if (e.target.classList.contains("decimal-point")) {
    let display = e.target.value;
    displayValue.innerText += display;
    console.log(e.target.value, "decimal-point");
  } else if (e.target.classList.contains("operator")) {
    console.log(e.target.value, "operator");
  } else if (e.target.classList.contains("clear-entry")) {
    console.log("clear-entry");
  } else if (e.target.classList.contains("clear-all")) {
    console.log("clear-all");
  }
}
