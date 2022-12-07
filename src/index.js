import {Initial} from './initial.js';
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');




Initial()

const newTodoBtn = document.querySelector('.new-todo-btn');


let list = [];

//test
let allItemsList = document.createElement('ul');
allItemsList.classList.add('all-item-list');
//


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


        



        list.forEach((item, i) => {
            item.id = i + 1;
        }
        );

        mainSection.replaceChildren();

        let allBtnPriorityList = document.createElement('ul');
        allBtnPriorityList.classList.add('all-btn-priority-list');
        mainSection.appendChild(allBtnPriorityList);
        newTodoBtn.classList.remove('hidden-btn');
        
        createList(list, allBtnPriorityList);
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





// Normal priority button

let normalPriorityButton = document.createElement('button');
normalPriorityButton.classList.add('normal-priority-button');
normalPriorityButton.innerHTML = 'Normal Priority';
leftSide.appendChild(normalPriorityButton);


normalPriorityButton.addEventListener('click', normalPriorityBtnFunction);


// High priority

let highPriorityButton = document.createElement('button');
highPriorityButton.classList.add('high-priority-button');
highPriorityButton.innerHTML = 'High Priority';
leftSide.appendChild(highPriorityButton);


highPriorityButton.addEventListener('click', highPriorityBtnFunction);



// All tasks

const allBtn = document.querySelector('.all-btn');
allBtn.addEventListener('click', function(){

    mainSection.replaceChildren();

    let allBtnPriorityList = document.createElement('ul');
    allBtnPriorityList.classList.add('all-btn-priority-list');
    mainSection.appendChild(allBtnPriorityList);
    newTodoBtn.classList.remove('hidden-btn');
    
    createList(list, allBtnPriorityList);
})






// creating list with priority

function createList(listName, priorityListName){
    listName.forEach((item) =>{
        let li = document.createElement('li');
        li.classList.add('list-item');
        li.setAttribute('id', `${item.id}`)
        li.innerHTML = `<div class='task-info'><h1 class="task-title">${item.title}</h1><p class="task-description">${item.description}</p><p class ="due-date">${item.dueDate}</p><p class="task-priority">${item.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div>`;
        priorityListName.appendChild(li);
    })
}





// Done

document.addEventListener('click', function(e){
    if(e.target && e.target.classList == 'done-btn'){
        let listItem = e.target.parentNode.parentNode;


        console.log(e.target.parentNode.parentNode.parentNode.classList.value);

        

        for (let i = list.length -1; i >= 0; --i){
            if (list[i].id == listItem.id) {
                list.splice(i,1);
            }
        };


        let priorityListName = e.target.parentNode.parentNode.parentNode.classList.value;

        if (priorityListName === 'normal-priority-list'){
            normalPriorityBtnFunction();
            console.log(list);  
        }else if(priorityListName === 'high-priority-list'){
            highPriorityBtnFunction();
        }else if(priorityListName === 'all-btn-priority-list'){
            allBtnFunction();
        };  
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
    }
});


// Adding new items

function addingNewItem(){
    let lastItem = list[list.length - 1];

    let li = document.createElement('li');
    li.classList.add('list-item');
    li.setAttribute('id', `${lastItem.id}`);
    li.innerHTML = `<div class='task-info'><h1 class="task-title">${lastItem.title}</h1><p class="task-description">${lastItem.description}</p><p class ="due-date">${lastItem.dueDate}</p><p class="task-priority">${lastItem.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div>`;
    allItemsList.appendChild(li);
}       



// normal priority button function


 function normalPriorityBtnFunction(){
    let normalPriorityTasks = list.filter(function(el){
        if (el.priority === "Normal Priority"){
            return el
        }
    })

    mainSection.replaceChildren();

    let normalPriorityList = document.createElement('ul');
    normalPriorityList.classList.add('normal-priority-list');
    mainSection.appendChild(normalPriorityList);
    
    newTodoBtn.classList.add('hidden-btn');

    createList(normalPriorityTasks, normalPriorityList);
};


// high priority button function

function highPriorityBtnFunction(){
    let highPriorityTasks = list.filter(function(el){
        if (el.priority === "High Priority"){
            return el
        }
    })

    mainSection.replaceChildren();

    let highPriorityList = document.createElement('ul');
    highPriorityList.classList.add('high-priority-list');
    mainSection.appendChild(highPriorityList);
    
    newTodoBtn.classList.add('hidden-btn');

    createList(highPriorityTasks, highPriorityList);
};

// all button function


function allBtnFunction (){
    mainSection.replaceChildren();

    let allBtnPriorityList = document.createElement('ul');
    allBtnPriorityList.classList.add('all-btn-priority-list');
    mainSection.appendChild(allBtnPriorityList);
    newTodoBtn.classList.remove('hidden-btn');
    
    createList(list, allBtnPriorityList);
}
