// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character") // Directamente en el fetch tenemos que poner la url de la API a la que intentamos hacer la peticion
//     .then((response) => response.json // Se va a ejecutar una vez que nuestra promesa se resuleve de mandera satisfactoria / queremos que esa respuesta se pueda pasar a json
//     ())
//     .then((data) => console.log(data))  // Ya que tengamos esa respuesta en json necesitamos otro then() para que esa respuesta se convierta en nuestra data que vamos a utilizar y lo que le vamos a pedir es que de inicio nos impima los datos que nos devuelve
//     .catch(error => console.log(error)
//     ) // Si algo sale mal usamos el catch() para que nos imprima el error e imprimirlo
// }

async function fetchData(){ // Como es un Sync and awaint nuestas funciones que queremos que se conviertan en promesas tendrian que empezar con azync, entonces en automatico nos va a pasar una promesa
    try{    // async and await tiene try y catch es lo que nos va a permitir hacer el manejo de los errores del asyn y el await, el try es el codigo que tiene que pasar y si no funciona entonces el catch nos va a regresar el error de lo que no esta funcionando 
        let response = await fetch("https://rickandmortyapi.com/api/character"); // como es async and await esta es una promesa y entonces esperamos (await) - este indica que este codigo espera a que se resuelva la promesa que es esto (lo del response) entonces el await va a esperar que este codigo resuelva el tema de la promesa, si esto funciona entonces generamos otra variable (que se va a llamar data)
        let data = await response.json() // si esto se termina de resolver entonces queremos que nos devuelva cual es la data que nos trae
        console.log(data);
        
    } catch (error){
        console.log(error);
        
    }
}