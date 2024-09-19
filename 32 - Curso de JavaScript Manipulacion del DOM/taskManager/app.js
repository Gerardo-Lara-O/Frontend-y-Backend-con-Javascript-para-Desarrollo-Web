// Referencia al formulario de tareas en el DOM, identificada por su ID "task-form"
const taskForm = document.getElementById("task-form");

// Referencia a la lista donde se mostrarán las tareas, identificada por su ID "task-list"
const taskList = document.getElementById("task-list");

// Llama a la función loadTasks() para cargar las tareas guardadas en localStorage cuando la página carga
loadTasks();

// Añade un "event listener" al formulario que se dispara cuando se envía el formulario
taskForm.addEventListener("submit", (event) => {
    // Evita que el formulario realice su acción por defecto (recargar la página)
    event.preventDefault();

    // Obtiene el campo de entrada del input de tareas, identificado por su ID "task-input"
    const taskInput = document.getElementById("task-input");

    // Guarda el valor ingresado en el input (la tarea) en una variable
    const task = taskInput.value;
    console.log(task); // Muestra el valor de la tarea en la consola (opcional para depuración)

    // Si la tarea no está vacía
    if (task) {
        // Crea y añade la nueva tarea al elemento de la lista de tareas
        taskList.append(createTaskElement(task));

        // Guarda la tarea en localStorage
        storeTaskInLocalStorage(task);

        // Limpia el input después de añadir la tarea
        taskInput.value = "";
    }
});

// Función para crear un nuevo elemento de lista (<li>) con la tarea y sus botones de eliminar y editar
function createTaskElement(task) {
    // Crea un nuevo elemento <li> para la tarea
    const li = document.createElement("li");

    // Asigna el contenido de texto del <li> con el valor de la tarea
    li.textContent = task;

    // Añade dos botones al <li>: uno para eliminar la tarea (❌) y otro para editarla (✏️)
    li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));

    // Retorna el elemento <li> completo para que sea añadido a la lista de tareas en el DOM
    return li;
}

// Función para crear un botón personalizado
function createButton(text, className) {
    // Crea un nuevo elemento <span> que actuará como botón
    const btn = document.createElement("span");

    // Asigna el texto al botón (por ejemplo, ❌ o ✏️)
    btn.textContent = text;

    // Asigna la clase CSS al botón (por ejemplo, "delete-btn" o "edit-btn")
    btn.className = className;

    // Retorna el botón para ser añadido al <li>
    return btn;
}

// Añade un "event listener" a la lista de tareas para manejar los clics en los botones (delegación de eventos)
taskList.addEventListener("click", (event) => {
    // Verifica si el clic fue en un botón de eliminar (usando la clase "delete-btn")
    if (event.target.classList.contains("delete-btn")) {
        // Llama a la función deleteTask y le pasa el <li> correspondiente para eliminarlo
        deleteTask(event.target.parentElement);
    } 
    // Verifica si el clic fue en un botón de editar (usando la clase "edit-btn")
    else if (event.target.classList.contains("edit-btn")) {
        // Llama a la función editTask y le pasa el <li> correspondiente para editarlo
        editTask(event.target.parentElement);
    }
});

// Función para eliminar una tarea
function deleteTask(taskItem) {
    // Pide confirmación al usuario antes de borrar la tarea
    if (confirm("Estás segura / seguro de borrar este elemento?")) {
        // Elimina la tarea del localStorage antes de removerla del DOM
        removeFromLocalStorage(taskItem.firstChild.textContent);

        // Elimina el elemento <li> de la lista de tareas en el DOM
        taskItem.remove();
    }
}

// Función para editar una tarea
function editTask(taskItem) {
    // Pide al usuario que edite la tarea usando un prompt
    const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);

    // Si el usuario no cancela el prompt, actualiza la tarea
    if (newTask !== null) {
        // Cambia el texto de la tarea en el DOM
        taskItem.firstChild.textContent = newTask;

        // Actualiza las tareas en el localStorage
        updateLocalStorage();
    }
}

// Función para almacenar una nueva tarea en localStorage
function storeTaskInLocalStorage(task) {
    // Recupera las tareas almacenadas en localStorage, o crea un array vacío si no hay ninguna tarea
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Añade la nueva tarea al array de tareas
    tasks.push(task);

    // Almacena el array actualizado en localStorage como una cadena JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Función para cargar las tareas desde localStorage y mostrarlas en la lista
function loadTasks() {
    // Recupera las tareas almacenadas en localStorage, o crea un array vacío si no hay ninguna tarea
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Para cada tarea almacenada, crea un elemento de lista y lo añade al DOM
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task));
    });
}

// Función para actualizar el localStorage cuando se edita o elimina una tarea
function updateLocalStorage() {
    // Convierte todas las tareas actuales en la lista a un array de textos de tareas
    const tasks = Array.from(taskList.querySelectorAll("li")).map(
        (li) => li.firstChild.textContent
    );

    // Almacena el array actualizado en localStorage como una cadena JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Función para eliminar una tarea específica del localStorage
function removeFromLocalStorage(taskContent) {
    // Recupera las tareas almacenadas en localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Filtra las tareas para eliminar la que coincide con el contenido de la tarea eliminada
    const updateTasks = tasks.filter((task) => task !== taskContent);

    // Almacena el array filtrado en localStorage
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
}

// Referencia al botón que alterna entre temas claro y oscuro, identificado por su ID "toggle-theme-btn"
const themeToggleButton = document.getElementById("toggle-theme-btn");

// Recupera el tema actual almacenado en localStorage
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme); // Muestra el tema actual en la consola (opcional para depuración)

// Añade un "event listener" al botón de alternar tema
themeToggleButton.addEventListener("click", () => {
    // Alterna la clase "dark-theme" en el <body> para cambiar el tema
    document.body.classList.toggle("dark-theme");

    // Si el cuerpo tiene la clase "dark-theme", guarda "dark" en localStorage, de lo contrario, guarda "light"
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme); // Almacena el tema seleccionado en localStorage
});

// Si el tema almacenado es "dark", añade la clase "dark-theme" al cuerpo para mantener el tema oscuro
if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
}
