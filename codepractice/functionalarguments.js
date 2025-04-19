//FUNCTIONAL ARGUMENTS- Passing a function as an argument to another function
function calculator(operation,a ,b){
    let val=operation(a,b);
    return val;
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
let a=calculator(add,5,3);
console.log(a); 