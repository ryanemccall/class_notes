//Arrays and Objects

// temporary way to store your data without a database

//ARRAYS
/*
High Level List like object used to be traversed and mutated
uses integers as element index and start at ZERO
can be accessed by bracket notation (index) or dot notation (method)
last object at array length -1
*/

//create an array

let british = ['Rolls Royce', 'Bentley', 'Caterham', 'Aston Martin'];
console.log(british);

console.log(british[0]);
console.log(british[british.length -1]); //calls last item

//Array Methods

british.length //length gives us the length of the array
british.push //adds something to an array and returns new length

british.push('MINI');

british.splice//can remove elements from an array and replace them with something new if needed

british.splice(0,1,'Jaguar');//goes to Item 0, next number is how many we want to replace (can be zero if you do not want to remove) and then what to replace it with

british.pop //removes and returns the last item if empty it will return undefined

.shift //removes the first element of the array
.unshift //adds elements to array start and returns new length
.includes //will return true or false if the item/element is a apart of the array


//Adavanced array manipulations

let german = ['BMW','Mercedes', 'Audi', 'Porshe', 'Alpina', 'VW'];

for (cars of german){
    console.log(cars);
}

//array.forEach() runs a function for each function element in an array
//most powerful tool for arrays 
//will appear in interviews

german.forEach(car => console.log(car));

//array.map() -> transforms elements in original array by callback function

let germanUpperCase = german.map(car => car.toUpperCase()); //.map does not change the original array only returns a new one
console.log(germanUpperCase);

//array.filter() -> creates a new array with elements that pass the test in a given function

console.log(german.filter(car => car.startsWith('A')));

//Objects
//containers for values in a JSON format
//JSON stands for JavaScript Object Notation
//exists as a string
//has properties and methods
//.property
//.method
//associative arrays (each property is associated with a string value)

//define JS object with an object literal

let car = {
    // key : value pair (properties) that are comma separated
    make: 'Porshe',
    model: '911',
    country: 'Germany',
    driver: 'Walter Rohl'
}

//accessing object values
console.log(car.make);

//cannot use fat arrow functions inside objects
//DRY Do Not Repeat Yourself
let manager ={
    firstName: 'Brad',
    lastName: 'Titus',
    birthYear: 1993,
    setAge: function() {
        return 2021 - this.birthYear  //'this' refers to the object it belongs to. for more go to w3schools for this
    }
}
console.log(manager.setAge()); //returns NaN because of scope (before we add the 'THIS' function)