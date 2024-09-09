const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

// btn.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   console.log({event});
//   event.preventDefault();
//   const sumaInputs = Number(input1.value) + Number(input2.value);
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

