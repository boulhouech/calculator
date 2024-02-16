const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
const resultArray = [];
const operationArray = [];
let displayValue = '';
let resultBeingDisplayed = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

displayOperation.textContent = "0";

function populateResult() {
    displayResult.innerHTML = resultBeingDisplayed;
}

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
    firstNumber = '';
    secondNumber = '';
    operator = '';
    resultBeingDisplayed = '';
    populateDisplay();
    populateResult();
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
    } else if (clickedElement.classList.contains('clear-button')) {
        clearEntry();
    } else if (clickedElement.classList.contains('mr-button')) {
        memoryRecall();
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
        // After calculation, reset secondNumber
        secondNumber = '';
    }
    operator = op;
}

function updateDisplay() {
    displayValue = `${firstNumber} ${operator} ${secondNumber}`;
    populateDisplay();
}

function performCalculation() {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    resultBeingDisplayed = result.toString();

    // Update variables for subsequent operations
    firstNumber = resultBeingDisplayed;
    secondNumber = '';
    operator = '';

    populateResult();
    populateDisplay();

    // Store the result and operation after each calculation
    resultArray.push(resultBeingDisplayed);
    operationArray.push(displayValue);
}

function memoryRecall() {
    // Retrieve the last stored operation and result
    const lastOperation = operationArray[operationArray.length - 1];
    const lastResult = resultArray[resultArray.length - 1];

    // Update the display with the last operation and result
    displayOperation.textContent = lastOperation;
    displayResult.textContent = lastResult;
}
