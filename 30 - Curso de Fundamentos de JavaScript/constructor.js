const persona = {
    nombre: "",
    apellido : ""
}

// Funcion constructora
function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// instancias
const persona1 = new Persona('Gerardo','Lara',30)
console.log(persona1);
