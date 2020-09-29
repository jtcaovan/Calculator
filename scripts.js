var display = document.querySelector("#display");
const calculator = document.querySelector("calculator");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal")

var displayNumber = 0;
var storedValue = ''
var currentValue = ''
var currentOperator = ''

function displayValue() {
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

// Operates when equal button is clicked
equal.addEventListener('click', operate);

// Adds decimal to display
decimal.addEventListener('click', () => {
    if (displayNumber === 0 || !displayNumber.includes('.')) {
        displayNumber += decimal.value;
        updateDisplay();
    }
});

updateDisplay();
clearDisplay();
displayValue();
storeOperator();
operate();

function add(a,b) {
    result = parseFloat(a) + parseFloat(b);
    return parseFloat(result.toFixed(7));
}

function subtract(a,b) {
    result = parseFloat(a) - parseFloat(b);
    return parseFloat(result.toFixed(7));
}

function multiply(a,b) {
    result = parseFloat(a) * parseFloat(b);
    return parseFloat(result.toFixed(7));
}

function divide(a,b) {
    result = parseFloat(a)/parseFloat(b);
    return parseFloat(result.toFixed(7));
}