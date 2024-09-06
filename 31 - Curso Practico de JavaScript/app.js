let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let parrafito = document.querySelector('.parrafito')
let pid = document.querySelector('#pid')
let input = document.querySelector('input')
let div = document.querySelector('div')

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerHTML = 'Nuevo titulo';
h1.innerText = 'Titulo con innerText'

// h1.getAttribute('verde');
// h1.setAttribute('class', 'rojo')
h1.setAttribute('id','nuevoId')

h1.classList.add('rojo')
// h1.classList.remove('rojo')

// h1.classList.toggle('rojo')
h1.classList.contains('rojo')
console.log(h1.classList.contains('rojo'));

let img = document.createElement('img')
img.setAttribute('src', 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Bengal-Cat.jpg?itok=iVh6G_Ef')

console.log(img);

div.append(img)


