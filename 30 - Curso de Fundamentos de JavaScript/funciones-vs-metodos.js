// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> Callback
function a(){
}
function b (a){
}
b(a)

// Retornar funciones

function a (){
    function b(){
        return b
    }
}

// Asignar funciones a variables
const a = function(){}

// Tener propiedades y metodos
function a(){}
const obj = {}
a.call(obj)

// Es posible almacenar funciones en objetos
const rocket = {
    name: 'Falcon9',
    launchMessage: function(){
        console.log('fiuuum 🚗');
        
    }
}

rocket.launchMessage()