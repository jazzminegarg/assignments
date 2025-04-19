const elementh4=document.querySelectorAll('h4')[1];
counter(elementh4);
function counter(elementh4){
    let count=parseInt(elementh4.innerHTML);
    count+=1;
    elementh4.innerHTML = count;
    setTimeout(() => counter(elementh4), 1000);
}

//todo
function addToDo(){
    const inputel=document.querySelector("input");
    const value=inputel.value;
    console.log(value);
    console.log('hi');
}
var name="harkirat";
//fetching techniques

//but the js engine runs just after rendering html,css so 