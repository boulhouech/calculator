const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
displayOperation.textContent ="0";
let displayValue = '';

function updateDisplay () {
    displayOperation.innerHTML = displayValue;
}

function appendNumber (number) {
    displayValue += number;
    updateDisplay();
}

function performOperation (operator) {
    displayValue += operator;
    updateDisplay();
}

function clearEntry () {
    displayValue = "";
    updateDisplay();
}

