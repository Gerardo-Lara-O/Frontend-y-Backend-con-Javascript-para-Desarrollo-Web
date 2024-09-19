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

taskList.addEventListener('click',(event)=>{
    // cuando usemos la delegacion tenemos que mandar a llamar el evento por que este nos va a ayudar a tener acceso a los elementos de boton para poder tener ciertas propiedades
    // console.log(event.target);
    
    if(event.target.classList.contains('delete-btn')){
        deleteTask(event.target.parentElement)
    }else if(event.target.classList.contains('edit-btn')){
        editTask(event.target.parentElement)
    }
})

function deleteTask(taskItem){
    if(confirm("Estas seguro de borrar este elemento?")){
        taskItem.remove();
    }
}

function editTask(taskItem){
    const newTask = prompt('Edita la tarea: ', taskItem.firstChild.textContent);
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask
    }
}