// const parent = document.getElementById('parent') // Consigo el nodo padre
// console.log(parent);

// const children = parent.children; // Metodo para ver los nodos hijos de ese padre
// console.log(children);

// const firstChild = parent.firstElementChild // Metodo para acceder al primer Hijo
// console.log(firstChild);

// const lastChild = parent.lastElementChild // Metodo para acceder al ultimo elemento
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling // Metodo para acceder al familiar anterior (En este caso el elemento <p></p>)
// console.log(previousSibling);

// const nextSibling = parent.nextElementSibling // Metodo para acceder al familiar hermano (En este caso section)
// console.log(nextSibling);



const children2 = document.querySelector('li')
console.log(children2);

// Ejemplo de navegar de hijos a padres
const parent2 = children2.parentNode // Selecciona el padre de este elemento pero es el nodo
console.log(parent2);

const grandParent = children2.parentElement // Selecciona el Elemento padre
console.log(grandParent);

// Este ultimo es el mas utilizado
const grandGrandParent = children2.closest('menu') // Este es el elemento mas cercano y al metodo le tenemos que decir que nos traiga al elemento mas cercano que se parezca a un elemento de menu
console.log(grandGrandParent);




