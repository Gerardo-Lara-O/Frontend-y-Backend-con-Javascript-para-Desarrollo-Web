let h1 = document.querySelector('h1')
let input1 = document.querySelector('#calculo1')
let input2 = document.querySelector('#calculo2')
let btnCalcular = document.querySelector('#btnCalcular')
let result = document.querySelector('#result')

function btnOnClick(){
    let sumaInputs = Number(input1.value) + Number(input2.value)
    result.innerText = "El resultado es: " + sumaInputs
    
    
}

