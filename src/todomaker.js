export const Todo = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

list = []

let todoForm = document.querySelector('.todo-form');

todoForm.onsubmit = function(){
    title = todoForm.querySelector('#title').value;
    description = todoForm.querySelector('#description').value;
    dueDate = todoForm.querySelector('#duedate').value;
    priority = todoForm.querySelector('#priority').value;

    let newTask = Todo(title, description, dueDate, priority);
    list.push(newTask);
}
 


