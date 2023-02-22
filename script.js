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
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multiply(a,b)
        case '÷':
            if (b===0) return null
            else return divide(a,b)
        default:
            return null
    }
}

function addNumberToScreen() {
    const screen = document.querySelector('.screen');
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        screen.textContent += buttonValue;
      });
    });
  }

  window.onload = function() {
    addNumberToScreen();
  }
  