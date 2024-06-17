document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const task = input.value;
    if (task) {
        addTask(task);
        input.value = '';
    }
});

function addTask(task) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li);
}
