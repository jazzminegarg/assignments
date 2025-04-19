ctr=1;
function deleteTodo(x){
    const element=document.getElementById('todo-'+x);
    element.parentNode.removeChild(element);
    ctr--;
}


function addTodo(){
    const inp=document.querySelector('input');
    const item=inp.value;
    const newtodo=document.createElement('div');
    newtodo.setAttribute("id","todo-"+ctr);
    newtodo.setAttribute("style","display: flex");
    const text = document.createElement('div');
    text.innerHTML="<div><h4>"+item+"</h4></div>";
    const deletebutton= document.createElement("button");
    deletebutton.textContent='delete this item';
    deletebutton.setAttribute("onclick","deleteTodo("+ctr+")");
    newtodo.appendChild(text);
    newtodo.appendChild(deletebutton);
    ctr++;
    const parent=document.getElementById('todos');
    parent.appendChild(newtodo);


}