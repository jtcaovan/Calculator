var display = document.querySelector("#display");
const calculator = document.querySelector("calculator");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");

var displayNumber = '0'

function updateDisplay() {
    display.textContent = displayNumber;
}

numbers.forEach((number) => {
    number.addEventListener('click', number => {
        displayNumber += number.target.value;
        updateDisplay();
        console.log(number.target.value);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', operator => {
        console.log(operator.target.value);
    })
});

function clearDisplay() {
    clear.addEventListener('click', (e) => {
        displayNumber = 0;
        updateDisplay();
        console.log(e.target)
    })
}

updateDisplay();
clearDisplay();

function operate() {
// Takes an operator and 2 numbers and then calls 
// one of the above functions on the numbers.

}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}