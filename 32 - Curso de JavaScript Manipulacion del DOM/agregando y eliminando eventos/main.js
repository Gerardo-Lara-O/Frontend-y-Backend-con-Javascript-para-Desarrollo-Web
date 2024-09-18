const button = document.querySelector('button')

const buttonClick = (event) => {
    console.log(event.target.textContent);
    
}

button.addEventListener('click', buttonClick)