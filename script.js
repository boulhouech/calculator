    const displayOperation = document.querySelector('.operation');
    const displayResult = document.querySelector('.result');
    let displayValue = '';
    let firstNumber = '';
    let secondtNumber = '';
    let operator = '';
    displayOperation.textContent ="0";
    

    function populateDisplay () {
        displayOperation.innerHTML = displayValue;
    }

    function appendNumber (number) {
        displayValue += number;
        populateDisplay();
    }

    function performOperation (operator) {
        displayValue += ' ' + operator + ' ';
        populateDisplay();
    }

    function clearEntry () {
        displayValue = "";
        populateDisplay();
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

   // fucntion to store the valueof the clicked button inn the operatefunction

   document.addEventListener('click',(event) => {
      const clickedElement = event.target;
     if (clickedElement.contains('digit')) {

     }
     
    
   });

   function hundleNumberClicked (number) {

   }

   function hundleOperatorClicked () {
    
   }

   





   




    






