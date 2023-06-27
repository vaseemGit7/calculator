let firstOperand ="";
let secondOperand="";
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById("displayScreen");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equalBtn =  document.getElementById("equalBtn");
const clear = document.getElementById("clearBtn");
const allClear = document.getElementById("allClearBtn");

operators.forEach((operator)=>{operator.addEventListener('click',()=>setOperator(operator.textContent))})
numbers.forEach((number) => {number.addEventListener('click',()=>appendNumber(number.textContent))});
equalBtn.addEventListener('click',evaluate)

function appendNumber(number){
    if(displayScreen.textContent === "0"||shouldResetDisplay==true){
        resetDisplay();
    }
    display.textContent += number;
}   

function setOperator(symbol){
    if(operator!==null) evaluate();
    console.log("before:"+operator);
    firstOperand = display.textContent;
    operator = symbol;
    console.log("after:"+operator);
    shouldResetDisplay = true;
}

function evaluate(){
    secondOperand = display.textContent;
    let result = operate(firstOperand,secondOperand,operator);
    display.textContent = result;
    operator = null;
    console.log(result);
}

function resetDisplay(){
    display.textContent = "";
}

function operate(a,b,operator){

    a=Number(a);
    b=Number(b);

    if(operator === "+"){
       return a+b;
    }   
    else if(operator === "-"){
        return a-b;
    }
    else if(operator === "×"){
       return a*b;
    }
    else if(operator === "÷"){
        return a/b;
    }
}
