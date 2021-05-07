//  CHALLENGE 1 Write a function that accepts two names as parameters, and then returns the full name to the console.
// return using string interpolation
function printName(first, last) {
    // console.log(first,last)
    return `${first} ${last}`
}
//return using concatenation
function printName(first, last) {
    let fullName = first + " " + last
    return fullName
}
//return an array of strings
function printName(first, last) {
    return [first, last]
}
// In JavaScript a function can only have one return statement.
// CHALLENGE 2 Write a program that prints all numbers from 0-100.
// for multiples of 6, instead of the number, print 'Fizz'
// for multiples of 8, instead of the number, print 'Buzz'
// for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
for (i = 0; i <= 100; i ++) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log(i, "FizzBuzz")
    } else if (i % 6 === 0) {
        console.log(i, "Fizz")
    } else if (i % 8 === 0) {
        console.log(i, "Buzz")
    } else {
        console.log(i)
    }
}
// CHALLENGE 3  Write a function called findParameter() that accepts 2 parameters called: "length" and "width".
// The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
// The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.  
// This function should be active.
function findParameter(length, width) {
    let result = ((2*length) + (2*width))
    if (result >= 20) {
        return `True, the perimeter is ${result}`
    } else if (result < 20) {
        return `False, the perimeter is ${result}`
    }
}
console.log(findParameter(9, 0))
// CHALLENGE 4  Create an object literal called "library".
// The library object will contain 3 properties: name, address, sections.
// Name and address will both hold values that are strings.  This information can be fabricated.
// Sections will be an object that will store a property called "collections", which is an array of more objects.  You should include at least 2 objects inside the collections array.
// the objects stored in the collections array will hold properties of classification, count, and aisle.
// both the classification and aisle properties should hold strings as values, and count should hold a value that is a number   
let library = {
    name: "Chris",
    address: "Indianapolis",
    sections: {
        collections: [
        {
            classification: "blah",
            count: null,
            aisle: "Blah"
        },
        {
            classification: "blah",
            count: 5,
            aisle: "Blah"
        }
    ]
    },
}
console.log(library.sections.collections[0].count)
function addInteger(integer) {
    if (Number.isInteger(integer)) {
        library.sections.collections[0].count = integer
    } else {
        console.log("You crazy man!")
    }
}
addInteger(25)
console.log(library.sections.collections[0].count)