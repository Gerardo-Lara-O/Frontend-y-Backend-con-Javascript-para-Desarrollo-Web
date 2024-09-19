const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    // de esta forma evitamos el evento del formulario
    event.preventDefault()
    const name = form.elements["name"].value
    console.log(name);

    
})
