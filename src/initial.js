export const Initial = () => {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const allBtn = document.createElement('button');
    allBtn.classList.add('all-btn')
    allBtn.innerHTML = 'All';
    leftSide.appendChild(allBtn);

    const newTodoBtn = document.createElement('button');
    newTodoBtn.innerHTML = '<p>New Task</p>';
    newTodoBtn.classList.add('new-todo-btn');
    rightSide.append(newTodoBtn);
}



