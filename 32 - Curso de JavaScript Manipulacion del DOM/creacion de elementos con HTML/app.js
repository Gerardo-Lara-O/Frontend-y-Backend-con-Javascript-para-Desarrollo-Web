const contentArea = document.getElementById('contentArea')
const listArea = document.getElementById('listArea')

// contentArea.innerHTML = "<p>Este es un nuevo parrafo.</p>"
// contentArea.insertAdjacentHTML("beforeend", "<p>Esta es otro parrafo nuevo</p>")

// concatenar a elemento ya existentes, lo hacemos con un +=, con esto le decimos que nos agregue el elemnto a la cadena que ya existe
// listArea.innerHTML += "<li>item 5</li>"
// listArea.insertAdjacentHTML("beforeend","<li>item 5</li>")

const newPElement = document.createElement("p")
newPElement.textContent = "Este es un nuevo parrafo creado"

contentArea.append(newPElement)

contentArea

// Eliminar elementos

const firstItem = document.querySelector('li')
// firstItem.remove()


// segunda forma
const list = document.querySelector('#listArea')
list.removeChild(list.lastElementChild)
