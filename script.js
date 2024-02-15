const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
let displayValue = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
displayOperation.textContent = "0";

function populateDisplay() {
    displayOperation.innerHTML = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    populateDisplay();
}

function performOperation(op) {
    displayValue += ' ' + op + ' ';
    populateDisplay();
}

function clearEntry() {
    displayValue = "";
    populateDisplay();
}

let addNumbers = (firstValue, secondValue) => {
    return firstValue + secondValue;
}

let subtractNumbers = (firstValue, secondValue) => {
    return firstValue - secondValue;
}

let multiplyNumbers = (firstValue, secondValue) => {
    return firstValue * secondValue;
}

let divideNumbers = (firstValue, secondValue) => {
    if (secondValue === 0) {
        return "Error: Division by zero!";
    } else {
        return firstValue / secondValue;
    }
}

function operate(selectedOperator, firstValue, secondValue) {
    switch (selectedOperator) {
        case '+':
            return addNumbers(firstValue, secondValue);
        case '-':
            return subtractNumbers(firstValue, secondValue);
        case '*':
            return multiplyNumbers(firstValue, secondValue);
        case '/':
            return divideNumbers(firstValue, secondValue);
    }
}

document.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('digit')) {
        handleNumberClicked(clickedElement.innerHTML);
    } else if (clickedElement.classList.contains('operation')) {
        handleOperatorClicked(clickedElement.innerHTML);
    } else if (clickedElement.classList.contains('equal-button')) {
        performCalculation();
    }
});

function handleNumberClicked(number) {
    if (operator === '') {
        firstNumber += number;
        updateDisplay();
    } else {
        secondNumber += number;
        updateDisplay();
    }
}

function handleOperatorClicked(op) {
    if (firstNumber !== '' && secondNumber !== '') {
        performCalculation();
    }
    operator = op;
}

function updateDisplay() {
    displayValue = `${firstNumber} ${operator} ${secondNumber}`;
    populateDisplay();
}

function performCalculation() {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayValue = result.toString();
    populateDisplay();
}
