const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

async function fetchNewData(){ // Vamos empezar con una funcion asincronica
    try{
        for await (let url of urls){ // por cada url que exista en urls, haz lo siguiente
            let response = await fetch(url); // Nos va a traer una url de este array
            let data = await response.json(); 
            console.log(data);
        }
    }
    catch(error){
        console.log(error);
    }
}