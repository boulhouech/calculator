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
    displayResult.removeAttribute('data-error-message');

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

let percentage = (firstValue, secondValue) => {
    return (firstValue * secondValue) / 100; 
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
        case '%': 
        return percentage(firstValue, secondValue)    ;

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
    else if (clickedElement.classList.contains('memory-plus')) {
        memoryPlus();
    }
    else if (clickedElement.classList.contains('memory-clear')) {
        memoryClear()
    }
    else if (clickedElement.classList.contains('memory-minus')) {
        memoryMinus();
    }
    else if (clickedElement.classList.contains('backspace-button')) {
        backspace();
    }
});

function handleNumberClicked(number) {
    if (number === ',') {
        // Check if the comma is valid to be added
        if ((operator === '' && !firstNumber.includes(',')) || (operator !== '' && !secondNumber.includes(','))) {
            if (operator === '') {
                // Append comma to firstNumber if no operator is selected
                firstNumber += number;
            } else {
                // Append comma to secondNumber if an operator is selected
                secondNumber += number;
            }
            updateDisplay();
        }
    } else {
        if (operator === '') {
            firstNumber += number;
            updateDisplay();
        } else {
            secondNumber += number;
            updateDisplay();
        }
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
    // Replace commas with periods and convert to numbers
    const firstNum = parseFloat(firstNumber.replace(',', '.'));
    const secondNum = parseFloat(secondNumber.replace(',', '.'));

    const result = operate(operator, firstNum, secondNum);

    if (!isNaN(result)) {
        // If the result is a valid number, update accordingly
        resultBeingDisplayed = result.toLocaleString('en-US'); // Format the result with commas
    } else {
        // If the result is not a number, it's an error message
        resultBeingDisplayed = '';
        displayResult.setAttribute('data-error-message', result); // Set the data-error-message attribute
    }

    // Update variables for subsequent operations
    firstNumber = resultBeingDisplayed.replace(',', '.'); // Update firstNumber with the result
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

    function backspace() {
        if (secondNumber !== '') {
            // If there is a second number, delete the last character from it
            secondNumber = secondNumber.slice(0, -1);
        } else if (operator !== '') {
            // If there is an operator, reset it
            operator = '';
        } else if (firstNumber !== '') {
            // If there is a first number, delete the last character from it
            firstNumber = firstNumber.slice(0, -1);
        }
    
        updateDisplay();
    }
  

    
      
    

 
    


