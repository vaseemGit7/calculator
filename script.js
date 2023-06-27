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
const decimalBtn = document.getElementById("decimalBtn");

operators.forEach((operator)=>{operator.addEventListener('click',()=>setOperator(operator.textContent))});
numbers.forEach((number) => {number.addEventListener('click',()=>appendNumber(number.textContent))});
equalBtn.addEventListener('click',evaluate);
decimalBtn.addEventListener('click',addDecimal);

function appendNumber(number){
    if(displayScreen.textContent === "0"||shouldResetDisplay==true){
        resetDisplay();
    }
    display.textContent += number;
    console.log("reset called from append number")
    shouldResetDisplay = false;
}   

function setOperator(symbol){
    if(operator!==null) evaluate();
    firstOperand = display.textContent;
    operator = symbol;
    shouldResetDisplay = true;
}

function addDecimal(){
    if(!display.textContent.match(/^\d*\.\d*$/)){
        display.textContent +="."
    }
}

function evaluate(){
    if((operator === null) || shouldResetDisplay) return;
    secondOperand = display.textContent;
    let result = operate(firstOperand,secondOperand,operator);
    display.textContent = result;
    operator = null;
    console.log(result);
}

function resetDisplay(){
    display.textContent = "";
    console.log("reset called!");
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
        if(b==0){
            return "Error";
        }
        else{
            return a/b;
        }
    }
}
