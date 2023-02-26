function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '÷':
      if (b === 0) return null;
      else return a / b;
    default:
      return null;
  }
}



let currentValue = "0";
const screen = document.querySelector(".screen");

function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (value === "AC") {
    screen.textContent = "0";
    currentValue = "0";
  } else if (value === "=") {
    // Extract values and operator from the string on the screen
    const expression = screen.textContent;
    const operatorIndex = expression.search(/[\+\-\*÷]/);
    const operator = expression.charAt(operatorIndex);
    const numbers = expression.split(/[\+\-\*÷]/);
    const a = parseFloat(numbers[0]);
    const b = parseFloat(numbers[1]);

    // Perform calculation using stored value and current value on screen
    const result = operate(operator, a, b);

    // Update screen with result
    screen.textContent = result;
    currentValue = result;
  } else {
    // Append value to screen
    if (currentValue === "0") {
      currentValue = value;
    } else {
      currentValue += value;
    }
    screen.textContent = currentValue;
  }
}


const buttons = document.querySelectorAll('.number, .symbols');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
