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

// Ejemplo con foreach()
const colors =['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors);
console.log(iteratedColors);


// ejercicio fahrenheit to celsius conversion

const temperatureInFahrenheit = [32,68,95,104,212]
const temperatureInCelsius = temperatureInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log(`Temperatures In Fahrenheit ${temperatureInFahrenheit}`);
console.log(`Temperatures In Celcius ${temperatureInCelsius}`);


// Sum of Elements in Array
let newNumbers = [1, 2, 3, 4, 5];
let suma = 0
newNumbers.forEach(element => {
    suma += element
});

console.log(`La suma de los numeros ${newNumbers} es: ${suma}`);


