const container = document.querySelector('.container')
const button = document.querySelector('button')

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "blue";
})

container.addEventListener("mouseout", ()=>{
    container.style.backgroundColor = "red";
})

// button.addEventListener('click',()=>{
//     alert("Button clicked!!!")
// })

// retirar eventos

// tendriamos que guardarlo en una funcion para decirle que queremos retirarlo

const buttonClickCallback = ()=> {
    alert('Button Clicked!!!')
    console.log('Hola');
    
}

button.addEventListener('click', buttonClickCallback)

// como retiramos este evento
// button.removeEventListener ('click',buttonClickCallback)

setTimeout(()=>{
    button.removeEventListener('click',buttonClickCallback)
},2000)
