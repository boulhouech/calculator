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
        displayValue += ' ' + operator + ' ';
        updateDisplay();
    }

    function clearEntry () {
        displayValue = "";
        updateDisplay();
    }

    let addNumbers = (firstValue, secondValue) => {
        return firstValue + secondValue;
    }

    let subtractNumbers = (firstValue, secondValue) => {
        return  firstValue - secondValue;
    }

    let multiplyNumbers = (firstValue, secondValue) => {
        return firstValue * secondValue;
    }

    let divideNumbers = (firstValue, secondValue)  => {
        if (num2 === 0) {
            return "Error: Division by zero!";
        } else {
            return firstValue / secondValue;
        }
    }
    

    function operate(operator, firstValue, secondValue) {
        switch (operate) {
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




