// Funcion expresiva
let suma = function(numero1,numero2){
    return numero1 + numero2;
}

console.log(suma(5,5));


// Funcion declarativa
function calculateDiscountedPrice (price,discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount;
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage)

console.log(`Original Price: $${originalPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Price with discount: $${finalPrice}`);



