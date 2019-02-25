function addTodo() {
    let item = document.getElementById('todoBox').value;
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(item));
    let list = document.getElementById('todoList');
    list.appendChild(node);
    document.getElementById('todoBox').value = 'TodoItem';
}