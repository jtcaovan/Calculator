var display = document.querySelector("#display");
const calculator = document.querySelector("calculator");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal")

//Global Variables

var displayNumber = 0
var storedValue = ''
var currentValue = ''
var currentOperator = ''

function displayValue() {
    // Populates display when numbers are clicked
    numbers.forEach((number) => {
        number.addEventListener('click', number => {
            if (displayNumber === 0) {
                displayNumber = number.target.value;
            } else {
                displayNumber += number.target.value
            }
            updateDisplay();
        });
    });
}

function addDecimal() {
    decimal.addEventListener('click', () => {
        if (displayNumber === 0 || !displayNumber.includes('.')) {
            displayNumber += decimal.value;
            updateDisplay();
        }
    });
}

function storeOperator () {
    operators.forEach((operator) => {
        operator.addEventListener('click', operator => {
            if (currentOperator !== '') { 
                operate();
                storeValue();
                displayNewValue();
                currentValue = 0;
                currentOperator = operator.target.value;
            } else {
                currentOperator = operator.target.value;
                storeValue();
                displayNewValue();
            }
        })
    });
}

function operate() {
    // Stores Current Value from display to get calculated
    currentValue = displayNumber;
    switch(currentOperator) {
        case '+':
            displayNumber = add(storedValue, currentValue);
            break;
        case '-':
            displayNumber = subtract(storedValue, currentValue);
            break;
        case 'x':
            displayNumber = multiply(storedValue, currentValue);
            break;
        case '/':
            if (currentValue == 0) {
                displayNumber = '(╯°□°）╯';
            } else {
                displayNumber = divide(storedValue, currentValue);
            }
            break;
    }

    updateDisplay();
    // Test
    console.log(`Current value is ${displayNumber}`);
};

function operateWithEqualSign() {
    equal.addEventListener('click', operate);
};

function displayNewValue() {
    // Populate display with new Current Value
    if (currentOperator != '' && storedValue != '') {
        displayNumber = 0
    }
}

function storeValue() {
    storedValue = displayNumber;
}

function updateDisplay() {
    display.textContent = displayNumber;
}

function clearDisplay() {
    clear.addEventListener('click', () => {
        displayNumber = 0;
        storedValue = '';
        currentValue = '';
        currentOperator = ''
        updateDisplay();
    })
}

updateDisplay();
clearDisplay();
displayValue();
storeOperator();
operate();
operateWithEqualSign();
addDecimal();

// Mathematical Functions

function add(a,b) {
    return parseFloat(a + b);
}

function subtract(a,b) {
    return parseFloat(a - b);
}

function multiply(a,b) {
    return parseFloat(a * b)
}

function divide(a,b) {
    return parseFloat(a / b);
}