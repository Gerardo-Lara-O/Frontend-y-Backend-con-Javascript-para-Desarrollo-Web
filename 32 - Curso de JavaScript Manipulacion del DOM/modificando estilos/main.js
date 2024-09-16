const title = document.querySelector('h1')
const menu = document.querySelector('.menu')
const button = document.querySelector('button')

// primera forma
title.style.color = "red"
menu.style.backgroundColor = "red"
menu.style.fontSize = "25px"

// segunda forma
menu.className = "main-menu"

// tercera forma
button.addEventListener('click', ()=>{
    menu.classList.toggle('invisible')
})


