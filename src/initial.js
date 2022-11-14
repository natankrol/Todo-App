export const Initial = () => {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const today = document.createElement('div');
    today.innerHTML = '<h1>Today</h1>';
    leftSide.appendChild(today);

    const newTodoBtn = document.createElement('button');
    newTodoBtn.innerHTML = '<p>New Todo</p>';
    newTodoBtn.classList.add('new-todo-btn');
    rightSide.append(newTodoBtn);
}



