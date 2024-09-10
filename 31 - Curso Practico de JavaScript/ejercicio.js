let parrafo1 = document.querySelector('#parrafo1')
let caja = document.querySelector('.caja')

let ocultar = document.querySelector('#ocultar')
let mostrar = document.querySelector('#mostrar')
let contenido = document.querySelector('#contenido')
let estiloBoton = document.querySelector('#estiloBoton')
let lista = document.querySelector('#lista')
let agregarElemento = document.querySelector('#agregarElemento')
let eliminarUltimoBtn = document.querySelector('#eliminarUltimoElemento')

let lista2 = document.querySelector('#lista2')
let eliminar = document.querySelector('#eliminar')

let imagen = document.querySelector('#imagen')
let cambiarImagen = document.querySelector('#cambiarImagen')

let entrada = document.querySelector('#entrada')
let salida = document.querySelector('#salida')

let contarClics = document.querySelector('#contarClics')
let contador = document.querySelector('#contador')

let nuevaTareaInput = document.getElementById('nuevaTarea');
let agregarTareaBtn = document.getElementById('agregarTarea');
let listaTareas = document.getElementById('listaTareas');



// Codigo
parrafo1.textContent = 'Este es el nuevo texto'
caja.style.backgroundColor = 'tomato';

ocultar.addEventListener('click', function(){
    contenido.style.display = 'none'
})

mostrar.addEventListener('click',function(){
    contenido.style.display = 'block'
})

estiloBoton.addEventListener('click',function(){
    estiloBoton.classList.toggle('nuevo-estilo')
})


agregarElemento.addEventListener('click',function(){
    let nuevoElemento = document.createElement('li')
    nuevoElemento.textContent = "Nuevo elemento"
    lista.appendChild(nuevoElemento)
})

eliminarUltimoBtn.addEventListener('click',function(){
    let ultimoElemento = lista.lastElementChild
    if(ultimoElemento){
        lista.removeChild(ultimoElemento)
    }
})

let elementoAEliminar = document.getElementById('eliminar')
elementoAEliminar.remove()

cambiarImagen.addEventListener('click', function(){
    // verificar la imagen actual
    let srcActural = imagen.getAttribute('src')

    // cambiar entre imagen 1 e imagen 2
    if(srcActural === 'https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid'){
        imagen.setAttribute('src', 'https://img.freepik.com/vector-gratis/lindo-gato-ilustracion-dibujos-animados-mano-signo-amor-concepto-naturaleza-animal-aislado-estilo-dibujos-animados-plana_138676-3419.jpg')
    }else{
        imagen.setAttribute('src','https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid')
    }

    
    
})


entrada.addEventListener('input', function(){
    salida.textContent = entrada.value
})

let numeroClics = 0
contarClics.addEventListener('click', function(){
    numeroClics++
    contador.textContent = numeroClics
})

agregarTareaBtn.addEventListener('click', function() {
    let textoTarea = nuevaTareaInput.value;
    if (textoTarea !== '') { // Si el campo no está vacío, se procede a crear una nueva tarea.
        let nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;

        let eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
            nuevaTarea.remove();
        });

        nuevaTarea.appendChild(eliminarBtn);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = '';
    }
});









