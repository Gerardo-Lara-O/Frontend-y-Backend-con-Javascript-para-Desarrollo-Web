// 1.
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit',(event)=>{ // mandamos a llamar al evento para que el evento nos de acceso al input y podamos llamar al valor del input

    event.preventDefault()

    const taskInput = document.getElementById('task-input')
    const task = taskInput.value
    console.log(task);
    if(task){
        taskList.append(createTaskElement(task))
        taskInput.value = ''
    }
})

function createTaskElement(task){
    const li = document.createElement('li')
    li.textContent = task
    li.append(createButton('❌','delete-btn'),
    createButton('✏️','edit-btn'))
    return li
}

function createButton(text,className){
    const btn = document.createElement('span')
    btn.textContent = text
    btn.className = className
    return btn
}