//Array Destructuring & Spread Operator
/*
Ability to unpack values from arrays or properties from objects into distinct variables
while using the spread operator (...)

Spread operator pulls out all array elements and returns as a standalone list of 
elements
*/

let fullName = ['Paul', 'Niemczyk']

let unpackedFullName = [...fullName]

console.log(unpackedFullName)

let editedFullName = [fullName]

console.log(editedFullName)

let prices = [10.99, 5.99, 22.99, 6.88]
console.log(Math.min(prices)) //will error out because it needs integers to function

console.log(Math.min(...prices)) //unpacks our array vaules

let x = 10
let y = "abc"

let a = x
let b = y

console.log(x,y,a,b)

//JS has 3 data types that are objects which reference to a vaule:
/*
    - array
    - function
    - object
*/
