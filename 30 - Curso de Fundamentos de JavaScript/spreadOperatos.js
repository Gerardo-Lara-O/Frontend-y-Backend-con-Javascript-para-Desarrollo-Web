// copy an array
const originalArray = [1,2,3,4,5]
const copyOfAnArray = [ ...originalArray]

console.log(originalArray);
console.log(copyOfAnArray);

// 2 Combining arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1, ...array2]
console.log(combinedArray);

// 3. Creating Arrays with additional elements
const baseArray = [1,2,3]
const arrayWidthAdditionalElements = [...baseArray, 4, 5, 6]
console.log(arrayWidthAdditionalElements);


// 4. Pass elements to functions
function sum(a,b,c){
    return a+b+c
}
const numbers = [1,2,3]
const result = sum(...numbers)
console.log(result);
