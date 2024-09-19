// 1. Obtenemos los elementos del formulario y la lista de tareas por su ID
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

// Añadimos un event listener para el evento 'submit' del formulario
// Esto nos permitirá capturar el valor del input cuando se envíe el formulario
taskForm.addEventListener('submit', (event) => { 
    // Prevenimos el comportamiento por defecto del formulario (que es recargar la página)
    event.preventDefault()

    // Obtenemos el input de la tarea y su valor
    const taskInput = document.getElementById('task-input')
    const task = taskInput.value

    // Mostramos el valor de la tarea en la consola (opcional para depurar)
    console.log(task);

    // Si el campo de la tarea no está vacío, creamos y añadimos la tarea a la lista
    if(task){
        taskList.append(createTaskElement(task)) // Añadimos la tarea a la lista
        taskInput.value = '' // Limpiamos el campo de entrada después de añadir la tarea
    }
})

// Función que crea un nuevo elemento de lista (<li>) para la tarea
function createTaskElement(task){
    const li = document.createElement('li') // Creamos un nuevo <li> para la tarea
    li.textContent = task // Asignamos el contenido de texto con el nombre de la tarea

    // Añadimos dos botones (borrar y editar) a cada tarea usando la función createButton
    li.append(
        createButton('❌','delete-btn'), // Botón para eliminar la tarea
        createButton('✏️','edit-btn')   // Botón para editar la tarea
    )

    return li // Retornamos el elemento <li> para que se añada al DOM
}

// Función para crear un botón con texto y clase específica
function createButton(text, className){
    const btn = document.createElement('span') // Creamos un <span> para simular un botón
    btn.textContent = text // Asignamos el texto del botón (❌ o ✏️)
    btn.className = className // Asignamos la clase (delete-btn o edit-btn)
    return btn // Retornamos el botón para ser añadido a la tarea
}

// Añadimos un event listener para la lista de tareas, usando delegación de eventos
// Esto nos permitirá escuchar eventos de clic en los botones de borrar y editar
taskList.addEventListener('click', (event) => {
    // Verificamos si el clic fue en un botón de borrar (usando la clase 'delete-btn')
    if(event.target.classList.contains('delete-btn')){
        deleteTask(event.target.parentElement) // Llamamos a deleteTask y le pasamos el <li> correspondiente
    }
    // Verificamos si el clic fue en un botón de editar (usando la clase 'edit-btn')
    else if(event.target.classList.contains('edit-btn')){
        editTask(event.target.parentElement) // Llamamos a editTask para editar la tarea
    }
})

// Función para eliminar una tarea
function deleteTask(taskItem){
    // Pedimos confirmación al usuario antes de borrar la tarea
    if(confirm("¿Estás seguro de borrar este elemento?")){
        taskItem.remove(); // Eliminamos el <li> de la lista de tareas
    }
}

// Función para editar una tarea
function editTask(taskItem){
    // Pedimos al usuario que edite la tarea con un prompt, el valor inicial será el contenido de la tarea actual
    const newTask = prompt('Edita la tarea: ', taskItem.firstChild.textContent);

    // Si el usuario no canceló el prompt (es decir, el valor no es null), actualizamos la tarea
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask // Actualizamos el texto de la tarea con el nuevo valor
    }
}

