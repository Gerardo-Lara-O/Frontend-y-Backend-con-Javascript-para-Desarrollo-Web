// Arrow function

// expresion de funcion
const greeting = function(name){
    return `Hi, ${name}`
}

// Arrow function - explicit return
const newGreeting = (name) =>{
    return `Hi, ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit =(name) => `Hi, ${name}`


// lexical binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    message: function(message){
        console.log(`${this.name} says: ${message}`);
        
    },
    messageWithArrowFunction: (message) => {
        console.log(`${fictionalCharacter.name} says: ${message}`);
        
    }
}

fictionalCharacter.message('Beware of Doctor Octopus')
fictionalCharacter.messageWithArrowFunction('With great power comes great great responsibility')
