let a = parseInt(prompt("Enter the first number"));
let operator = prompt("Enter the operator");
let b = parseInt(prompt("Enter the second number"));

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

console.log(operate(a,b,operator));