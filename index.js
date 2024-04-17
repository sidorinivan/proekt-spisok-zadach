const mainButton = document.getElementById('add-btn');
mainButton
document.addEventListener('keydown', test)

function test(ev) {
    if (ev.key === 'Enter')
        addNewTask()
}


mainButton.onclick = addNewTask;

function addNewTask() {
    const inpElem = document.getElementById('tsk-inp')
    const taskName = inpElem.value.trim();

    if (taskName) {
        const newItem = document.createElement('li')
        newItem.innerHTML = taskName;
    
    `<div>
        <input type="checkbox" id="task-id-1" name="task-id-1">
        <label>сделать дз</label>

    </div>`


        const listElem = document.getElementById('task-list');
        listElem.prepend(newItem);

        inpElem.value = '';
    }
}