export const Initial = () => {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const today = document.createElement('div');
    today.innerHTML = '<h1>All</h1>';
    leftSide.appendChild(today);

    const newTodoBtn = document.createElement('button');
    newTodoBtn.innerHTML = '<p>New Task</p>';
    newTodoBtn.classList.add('new-todo-btn');
    rightSide.append(newTodoBtn);
}



