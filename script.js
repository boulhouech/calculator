const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
let displayValue = ""; 

function appendNumber (number) {
    displayValue = number;
    document.querySelector('.operation').innerHTML = displayValue; 
}

