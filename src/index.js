import {Initial} from './initial.js';
const rightSide = document.querySelector('.right-side');



Initial()

const newTodoBtn = document.querySelector('.new-todo-btn');


let list = [];





newTodoBtn.addEventListener('click', function(){
    const todoFormContainer = document.createElement('div');
    todoFormContainer.classList.add('todo-form-container');

    rightSide.appendChild(todoFormContainer);
    todoFormContainer.innerHTML = '<form class="todo-form"><button type="button" class="close-form-btn">X</button><label for="title">Title:</label><input type="text" id="title"><label for="description">Description:</label><input type="text" id="description"><label for="dueDate">Due Date:</label><input type="date" id="duedate"></label><label for="priority">Priority:</label><select id="priority" class="priority-select"><option value="normal">Normal</option><option value="high">High Priority</option></select><input type="submit" class="submit-btn"></form>';

    let todoForm = document.querySelector('.todo-form');

    const Todo = (title, description, dueDate, priority) => {
        return {
            title,
            description,
            dueDate,
            priority,
        }
    }


    todoForm.addEventListener('submit', function(e){
        
        let title = todoForm.querySelector('#title').value;
        let description = todoForm.querySelector('#description').value;
        let dueDate = todoForm.querySelector('#duedate').value;
        let priority = todoForm.querySelector('#priority').value;  
        let id = '';

        let newTask = Todo(title, description, dueDate, priority, id);
        list.push(newTask);
        e.preventDefault();
        todoForm.reset();

        let newTaskTitle = newTask.title;
        let newTaskDescription = newTask.description;
        let newTaskDueDate = newTask.dueDate;
        let newTaskPriority = newTask.priority;
        let newTaskId = newTask.Id;

        mainSectionList.innerHTML += `<li class="list-item" id=${newTaskId}><h1 class="task-title">${newTaskTitle}</h1><p class="class-description">${newTaskDescription}</p></li>`


        list.forEach((item, i) => {
            item.id = i + 1;
        }
        );

        // populateTodo()

        console.log(list);

    })

    



    // close form
    const closeFormBtn = todoFormContainer.querySelector('.close-form-btn');

    closeFormBtn.addEventListener('click', function(){
        todoFormContainer.classList.add('todo-form-container-hidden');
    })
})

let mainSection = document.createElement('div');
rightSide.appendChild(mainSection);
mainSection.classList.add('main-section');
mainSection.innerHTML = '<ul class="main-section-list"><li>To Do</li></ul>';

const mainSectionList = document.querySelector('.main-section-list');

function populateTodo(){
    list.forEach(function(li){
        mainSectionList.innerHTML += `<li id="${li.id}">${li.title}</li>`
    })
}

