// Ejemplo 1

// const listItems = document.querySelectorAll("li")

// listItems.forEach((item)=> {
//     item.addEventListener("click", (event)=>{
//         event.target.classList.toggle('highlight')
//     })
// })

// Ejemplo 2

const list = document.querySelector('ul')

list.addEventListener('click',(event)=>{
    event.target.closest("li").classList.toggle("highlight")
})