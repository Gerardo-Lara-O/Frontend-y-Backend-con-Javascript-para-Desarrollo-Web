const promise = new Promise((resolve,rejected) => {
    setTimeout(() => {
        let operationSuccessfull = true
        if(operationSuccessfull){
            resolve("La operacion fue exitosa")
        }else{
            rejected("Fallo la operacion")
        }
    },2000);
});

promise
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
    
})