// 1.
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit',(event)=>{ // mandamos a llamar al evento para que el evento nos de acceso al input y podamos llamar al valor del input

    event.preventDefault()

    const taskInput = document.getElementById('task-input')
    const task = taskInput.value
    console.log(task);
    
})