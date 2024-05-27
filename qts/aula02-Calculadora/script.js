const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const erase = document.querySelector('.erase');
const percent = document.querySelector('.percent');
const expressionDisplay = document.querySelector('.expressionDisplay');

number.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent == '0'){
            if (display.value == '0') return;
        }
        display.value += button.textContent;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (display.value === "") {
            if (operator.textContent == '-' && display.value != '-') {
                display.value += display.value + operator.textContent;
                if (display.value == '-' && expressionDisplay.value.substring(expressionDisplay.value.length, expressionDisplay.value.length - 1) == '-') {
                    expressionDisplay.value = expressionDisplay.value.slice(0, -1);
                    expressionDisplay.value += '+';
                    display.value = display.value.slice(0, -1);
                }
            }
            return;
        }
        if (display.value == '-') {
            return;
        }
        expressionDisplay.value += display.value + operator.textContent;
        display.value = "";
    });
});

dot.addEventListener("click", () => {
    if (display.value.includes(',')) {
        return;
    }
    display.value += dot.textContent;
});

equal.addEventListener('click', () => {
    if (!display.value == "" && !expressionDisplay.value == "") {
        expressionDisplay.value += display.value;
        let swap = expressionDisplay.value;
        swap = String(swap).replaceAll(',', '.');
        swap = String(swap).replaceAll('x', '*');
        swap = String(swap).replaceAll('÷', '/');
        expressionDisplay.value = "";
        if (swap.substring(swap.length, swap.length - 2) === '/0') {
            divideByZero(swap);
            return;
        }
        display.value = String(eval(swap)).replace('.', ',');
    }
});

clear.addEventListener('click', () => {
    expressionDisplay.value = "";
    display.value = "";
});

erase.addEventListener('click', () => {
    if (!display.value == "") {
        display.value = display.value.slice(0, -1);
        return;
    }
    if (!expressionDisplay.value == "") {
        display.value = expressionDisplay.value.slice(0, -1);
        expressionDisplay.value = "";
    }
});

percent.addEventListener('click', () => {
    if (!display.value == '') { display.value = String(display.value / 100).replace('.', ','); }
});

const divideByZero = (swap) => {
    alert('Você não pode dividir um número por 0.');
    display.value = swap.slice(0, -2);
};