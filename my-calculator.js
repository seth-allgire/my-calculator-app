const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector(".operand");
const memoryDisplay = document.querySelector(".first-operand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const calculateButton = document.querySelector(".equals");
const clearEntry = document.querySelector(".clear-entry");
const clearEverything = document.querySelector(".clear-all");
const firstOperand = memoryDisplay.innerText;
const secondOperand = displayValue.innerText;

numberButtons.forEach(() => {
  addEventListener("click", updateDisplay);
});

function updateDisplay(e) {
  if (e.target.classList.contains("number")) {
    let display = e.target.value;
    displayValue.innerText += display;
    console.log(e.target.value);
  }
}

operatorButtons.forEach(() => {
  addEventListener("click", operator);
});

function operator(e) {
  if (
    e.target.classList.contains("operator") &&
    displayValue.innerText !== "" &&
    displayValue.innerText
  ) {
    let display = e.target.value;
    displayValue.innerText += display;
    memoryDisplay.innerText = displayValue.innerText;
    displayValue.innerText = "";
    console.log(e.target.value);
  }
}

clearEntry.addEventListener("click", clearDisplay);

function clearDisplay(e) {
  if (e.target.classList.contains("clear-entry")) {
    displayValue.innerText = "";
    console.log(e.target.value);
  }
}

clearEverything.addEventListener("click", clearAll);

function clearAll(e) {
  if (e.target.classList.contains("clear-all")) {
    displayValue.innerText = "";
    memoryDisplay.innerText = "";
    console.log(e.target.value);
  }
}

// } else if (e.target.classList.contains("decimal-point")) {
//   let display = e.target.value;
//   displayValue.innerText += display;
//   console.log(e.target.value, "decimal-point");
// } else if (e.target.classList.contains("operator")) {
//   console.log(e.target.value, "operator");
// } else if (e.target.classList.contains("clear-entry")) {
//   console.log("clear-entry");
// } else if (e.target.classList.contains("clear-all")) {
//   console.log("clear-all");
// }
