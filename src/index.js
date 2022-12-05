import {Initial} from './initial.js';
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');




Initial()

const newTodoBtn = document.querySelector('.new-todo-btn');


let list = [];


const  todoFormContainer = document.createElement('div');
        todoFormContainer.classList.add('todo-form-container', 'todo-form-container-hidden');

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

        // createList(list)


        // mainSectionList.innerHTML += `<li class="list-item" id=${newTaskId}><h1 class="task-title">${newTaskTitle}</h1><p class="task-description">${newTaskDescription}</p><p class ="due-date">${newTaskDueDate}</p><p class="task-priority">${newTaskPriority}</p></li>`;


        list.forEach((item, i) => {
            item.id = i + 1;
        }
        );
        addingNewTask(list);


        


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

    mainSectionList.innerHTML = '';

    
    createList(normalPriorityTasks);
    
})


// High priority

let highPriorityButton = document.createElement('button');
highPriorityButton.classList.add('high-priority-button');
highPriorityButton.innerHTML = 'High Priority';
leftSide.appendChild(highPriorityButton);


highPriorityButton.addEventListener('click', function(){
    let highPriorityTasks = list.filter(function(el){
        if (el.priority === "High Priority"){
            return el
        }
    });

    mainSectionList.innerHTML = '';

    
    createList(highPriorityTasks);

    
})



// All tasks

const allBtn = document.querySelector('.all-btn');
allBtn.addEventListener('click', function(){
    mainSectionList.innerHTML = '';

    
    createList(list);
})






// creating list with priority

function createList(listName){
    listName.forEach((item) =>{
        let li = document.createElement('li');
        li.classList.add('list-item');
        li.setAttribute('id', `${item.id}`)
        li.innerHTML = `<div class='task-info'><h1 class="task-title">${item.title}</h1><p class="task-description">${item.description}</p><p class ="due-date">${item.dueDate}</p><p class="task-priority">${item.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div>`;
        mainSectionList.appendChild(li);
    })
}


// adding new tasks function

function addingNewTask(listName){
    let lastTask = listName.at(-1)
    mainSectionList.innerHTML += `<li class="list-item" id=${lastTask.id}><div class='task-info'><h1 class="task-title">${lastTask.title}</h1><p class="task-description">${lastTask.description}</p><p class ="due-date">${lastTask.dueDate}</p><p class="task-priority">${lastTask.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div></li>`;
};

// Done

document.addEventListener('click', function(e){
    if(e.target && e.target.classList == 'done-btn'){
        let listItem = e.target.parentNode.parentNode;

        //test
        // let doneBtn1 = document.getElementsByClassName('done-btn');
        // console.log(doneBtn1.parentNode);
        console.log(e.target.parentNode.parentNode.parentNode);

        for (let i = list.length -1; i >= 0; --i){
            if (list[i].id == listItem.id) {
                list.splice(i,1);
            }
        };
        mainSectionList.innerHTML = ''
        createList(list);

        // if (doneBtn1.parentNode.classList === highPriorityTasks);
    }
});

// Delete

document.addEventListener('click', function(e){
    if(e.target && e.target.classList == 'delete-btn'){
        let listItem = e.target.parentNode.parentNode;


        for (let i = list.length -1; i >= 0; --i){
            if (list[i].id == listItem.id) {
                list.splice(i,1);
            }
        };
        mainSectionList.innerHTML = ''
        createList(list);

        // let doneBtn1 = document.querySelectorAll('done-btn')
        // if (doneBtn1.parentNode ===)
    }
});

