const submit_button = document.querySelector('button');
const todo_input = document.querySelector('input');
const todo_list = document.querySelector('div.todos');

submit_button.addEventListener('click',addTodo);
todo_list.addEventListener('click',removeTodo);
console.log(todo_list);
var val = 0
function addTodo() {
    const para = document.createElement('p');
    para.innerText=todo_input.value;
    para.setAttribute('key',val);
    val = val+1
    todo_list.append(para);
    todo_input.value="";
}
function removeTodo(e) {
    const item=e.target
    item.remove()
}