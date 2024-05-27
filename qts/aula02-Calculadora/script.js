const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector(".dot");
const equal = document.querySelector('equal');
const display = document.querySelector(".display");
var globalExpression = document.querySelector('.expressionDisplay');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("reach");
    display.value += button.textContent;
    console.log(display.value);
  });
});

operators.forEach((operator) => {
    operator.addEventListener('click', ()=>{
        if(display.value === ""){
            return;
        }
        globalExpression.value += display.value + operator.textContent;
        display.value = "";
    });
});


dot.addEventListener("click", () => {
    if (display.value.includes('.')){
        return;
    }
    display.value+= dot.textContent;
});

equal.addEventListener('click', ()=> {
    if (!display.value == "" && !globalExpression.value == ""){
        globalExpression.value += display.value;
        let swap = globalExpression.value;
    } 
})