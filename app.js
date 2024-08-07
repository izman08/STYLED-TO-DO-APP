

document.getElementById('addTaskBtn' ).addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
document.getElementById('removeAllBtn').addEventListener('click', function() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
});
