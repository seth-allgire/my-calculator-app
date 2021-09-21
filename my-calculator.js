const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector(".operand");
const memoryDisplay = document.querySelector(".first-operand");
const operationDisplay = document.querySelector(".operation");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const calculateButton = document.querySelector(".equals");
const clearEntry = document.querySelector(".clear-entry");
const clearEverything = document.querySelector(".clear-all");
let mathOperator = "";
let resultValue = "";
let firstOperandValue = "";
let secondOperandValue = "";

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
    displayValue.innerText !== ""
  ) {
    mathOperator = e.target.value;
    memoryDisplay.innerText = displayValue.innerText;
    operationDisplay.innerText += e.target.value;
    displayValue.innerText = "";
    console.log(e.target.value);
  }
}

calculateButton.addEventListener("click", calculate);

function calculate() {
  firstOperandValue = parseInt(memoryDisplay.innerText);
  secondOperandValue = parseInt(displayValue.innerText);
  memoryDisplay.innerText = "";
  operationDisplay.innerText = "";

  switch (mathOperator) {
    case "+":
      resultValue = firstOperandValue + secondOperandValue;
      displayValue.innerText = resultValue;
      break;
    case "-":
      resultValue = firstOperandValue - secondOperandValue;
      displayValue.innerText = resultValue;
      break;
    case "*":
      resultValue = firstOperandValue * secondOperandValue;
      displayValue.innerText = resultValue;
      break;
    case "/":
      resultValue = firstOperandValue / secondOperandValue;
      displayValue.innerText = resultValue;
      break;
    case "**":
      resultValue = firstOperandValue ** secondOperandValue;
      displayValue.innerText = resultValue;
      break;
    default:
      resultValue = secondOperandValue;
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
    operationDisplay.innerText = "";
    console.log(e.target.value);
  }
}
