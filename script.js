const displayOperation = document.querySelector('.operation');
        const displayResult = document.querySelector('.result');
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
            memoeryRecall(resultBeingDisplayed, displayValue);
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
            memoeryRecall(resultBeingDisplayed, displayValue)
        }

        // memoeryReccal : (value) =  equal result and operation 

        function memoeryRecall(result, operation) {
            // for evrey time perfom calculation is called the operation display
            // and the result display should be stored in the array below 
            result = [];
            operation = [];
            performCalculation();
            const calcule = document.querySelector(performCalculation);
            calcule.addEventListener('click', ()=> {
                result.push(resultBeingDisplayed);
                operation.push(displayValue);
            })
        }

        






        // for evrey time equal buttons is clicked stroe the number in somwhere and called when mr
        // fucntion (clickedButton) {
        // saving value += clickedButton;
        // }