let numeros = [1, 2, 3, 4, 5];  // Array de números
let frutas = ["manzana", "naranja", "pera"];  // Array de cadenas
let mixto = [1, "dos", { tres: 3 }, [4, 5]];  // Array mixto

// Metodos Mutables
frutas.push('Sandia')
console.log(frutas);


// Metodos inmutables
let nuevosNumeros = numeros.concat([6, 7]);
console.log(numeros);        // [1, 2, 3 ,4 ,5]
console.log(nuevosNumeros);  // [1, 2, 3, 4, 5, 6, 7]

let isArray = Array.isArray(frutas)
console.log(isArray);


// Ejercicio: Sumar todos los elementos de un array
const numberArray = [1,2,3,4,5]
let sum = 0
for(let i = 0; i < numberArray.length; i++){
    sum += numberArray[i]
}
console.log(sum);
