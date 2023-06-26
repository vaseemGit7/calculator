let firstOperand ="";
let secondOperand="";
let operator = null;

const display = document.getElementById("displayScreen");
//console.log(display.textContent);
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {number.addEventListener('click',()=>appendNumber(number.textContent))});


function appendNumber(number){
    //if(displayScreen.textContent === "0")resetDisplay();
    display.textContent = number;
    console.log('called');
}    

function resetDisplay(){
    display.textContent = "";
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    if(operator === "+"){
       return add(a,b);
    }   
    else if(operator === "-"){
        return subtract(a,b);
    }
    else if(operator === "*"){
       return multiply(a,b);
    }
    else if(operator === "/"){
        return divide(a,b);
    }
}
