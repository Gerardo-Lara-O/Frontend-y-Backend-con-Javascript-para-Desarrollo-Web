let persona = {
    nombre : 'Gerardo',
    apellido : 'Lara',
    edad : 27,
    fechaNacimiento: '27/01/1997',
    direccion : {
        calle : 'xxx',
        ciudad : 'Mexico'
    },
    saludar : function(){
        console.log(`Hola mi nombre es ${this.nombre}`);
        
    }
}

persona.saludar()

persona.telefono = 5533223311;
console.log(persona.telefono);

persona.despedir = ()=>{
    console.log("Adios");
    
};

persona.despedir();

// boorar propiedades de nuesto objeto
delete persona.telefono;
