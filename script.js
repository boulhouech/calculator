const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
const OpHisContainer = document.querySelector('.operation-history-container');
const resultArray = [];
const operationArray = [];
const historySize = 10; // Set the  max size of history = 10 
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
    OpHisContainer.innerHTML = '';

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
        displayResult.setAttribute('data-error-message', result); // Set the data-error-message attribute

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
        subDisplya();
        
    }
    else if (clickedElement.classList.contains('memory-plus')) {
        memoryPlus();
    }
    else if (clickedElement.classList.contains('memory-clear')) {
        memoryClear()
    }
    else if (clickedElement.classList.contains('memory-minus')) {
        memoryMinus();
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

    if (typeof result === 'number') {
        // If the result is a number, display it
        resultBeingDisplayed = result.toString();
    } else {
        // If the result is not a number, it's an error message
        resultBeingDisplayed = ''; // Clear the result display
        displayResult.setAttribute('data-error-message', result); // Set the data-error-message attribute
    }

    // Update variables for subsequent operations
    firstNumber = resultBeingDisplayed;
    secondNumber = '';
    operator = '';

    populateResult();
    populateDisplay();
}



function memoryRecall() {
    // Select the container where you want to display the operation history
    const operationHistoryContainer = document.querySelector('.display .operation-history-container');
    
    // Clear the container before populating with new operation history
    operationHistoryContainer.innerHTML = '';

    // Concatenate and display the operation history
    for (let i = 0; i < Math.min(operationArray.length, historySize); i++) {
        const operation = operationArray[i];
        const result = resultArray[i];
        
        // Create a new div element for each operation
        const newOperationDiv = document.createElement('div');
        newOperationDiv.textContent = operation + ' = ' + result;
        
        // Append the new div element to the container
        operationHistoryContainer.appendChild(newOperationDiv);
    }
}


 function memoryPlus () {
     // Store the result and operation after each calculation
     resultArray.push(resultBeingDisplayed);
     operationArray.push(displayValue);
 
     // Keep only the last 10 operations and results
     if (resultArray.length > historySize) {
         resultArray.shift();
         operationArray.shift();
      }
    

    }

    function memoryClear() {
        operationArray.length = 0;
        resultArray.length = 0;
        
    }

    function memoryMinus() {
        operationArray.pop()
        resultArray.pop();
    }

    
      
    

 
    


