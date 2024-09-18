// clonar y remplazar elementos

const contentArea = document.querySelector('#contentArea');
console.log(contentArea);

const originalP = contentArea.querySelector('p')

const clonedP = originalP.cloneNode(true)

contentArea.append(clonedP)

clonedP.textContent = "Este es un nuevo texto"

// remplazar elementos
const list = document.getElementById('listArea')

const itemToReplace = list.children[2]

itemToReplace.replaceWith(clonedP)