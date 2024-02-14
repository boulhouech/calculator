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

let adding = (firstValue, secondValue) => {
    return firstValue + secondValue;
}

let substracting = (firstValue, secondValue) => {
    return  firstValue - secondValue;
}

let multiply = (firstValue, secondValue) => {
    return firstValue * secondValue;
}

let division = (firstValue, secondValue)  => {
    return firstValue / secondValue;
}


