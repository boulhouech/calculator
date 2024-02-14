const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
displayOperation.textContent ="0";
let displayValue = '';


function appendNumber (number) {
    displayValue = number;
    document.querySelector('.operation').innerHTML = displayValue; 
}

function performOperation (operator) {
    displayValue = operator;
    document.querySelector('.operation').innerHTML = displayValue;
}

