import {Initial} from './initial.js';
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');




Initial()

const newTodoBtn = document.querySelector('.new-todo-btn');


let list = [];


const  todoFormContainer = document.createElement('div');
        todoFormContainer.classList.add('todo-form-container');
        todoFormContainer.classList.add('todo-form-container-hidden');

        rightSide.appendChild(todoFormContainer);
        todoFormContainer.innerHTML = '<form class="todo-form"><button type="button" class="close-form-btn">X</button><label for="title">Title:</label><input type="text" id="title" required><label for="description">Description:</label><input type="text" id="description" required><label for="dueDate">Due Date:</label><input type="date" id="duedate" required></label><label for="priority">Priority:</label><select id="priority" class="priority-select"><option id="normal" value="Normal Priority">Normal</option><option id ="high" value="High Priority">High Priority</option></select><input type="submit" class="submit-btn"></form>';




newTodoBtn.addEventListener('click', function(){

    todoFormContainer.classList.remove('todo-form-container-hidden');
    

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
        e.stopImmediatePropagation();
        todoForm.reset();

        let newTaskTitle = newTask.title;
        let newTaskDescription = newTask.description;
        let newTaskDueDate = newTask.dueDate;
        let newTaskPriority = newTask.priority;
        let newTaskId = newTask.Id;


        mainSectionList.innerHTML += `<li class="list-item" id=${newTaskId}><h1 class="task-title">${newTaskTitle}</h1><p class="task-description">${newTaskDescription}</p><p class ="due-date">${newTaskDueDate}</p><p class="task-priority">${newTaskPriority}</p></li>`


        list.forEach((item, i) => {
            item.id = i + 1;
        }
        );

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
mainSection.innerHTML = '<ul class="main-section-list"></ul>';

const mainSectionList = document.querySelector('.main-section-list');





// Normal priority button

let normalPriorityButton = document.createElement('button');
normalPriorityButton.classList.add('normal-priority-button');
normalPriorityButton.innerHTML = 'Normal Priority';
leftSide.appendChild(normalPriorityButton);

normalPriorityButton.addEventListener('click', function(){
    let normalPriorityTasks = list.filter(function(el){
        if (el.priority === "Normal Priority"){
            return el
        }
    })
    console.log(normalPriorityTasks);



    let normalPrioritySection = document.createElement('div');
    rightSide.removeChild(mainSection);
    rightSide.appendChild(normalPrioritySection;)
    normalPrioritySection.classList.add('normal-priority-section');
    normalPrioritySection.innerHTML = '<ul class="normal-priority-section-list"></ul>';
    let normalPrioritySectionList = document.querySelector('.normal-priority-section-list');
    normalPrioritySection.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = `<li class="list-item" id=${item.id}><h1 class="task-title">${item.title}</h1><p class="task-description">${item.description}</p><p class ="due-date">${item.dueDate}</p><p class="task-priority">${item.priority}</p></li>`;
        normalPrioritySectionList.appendChild(li);
    })

})





