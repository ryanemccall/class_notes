//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that: 
//* Prints out "Fizz" if the number is divisible by 3
//* Prints out "Buzz" if the number is divisible by 5
//* Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//* Bronze: Write as a If else
//* Silver: Write as a Switch,
//* Gold: Write as a Ternary

let FB = 15;
 
//BRONZE
if (FB % 3 === 0 && FB % 5 === 0){
    console.log("Fizz Buzz");
} else if (FB % 3 === 0){
    console.log('Buzz');
} else if (FB % 5 === 0){
    console.log('Fizz');
} else {
    console.log('number is not divisible by 3 or 5');
}
// 
//SILVER
let FB = 15;

switch(true){
    case (FB % 15 === 0):
        console.log('Fizz Buzz');
        break;
    case FB % 3 === 0:
        console.log('Fizz');
        break;
    case FB % 5 === 0:
        console.log('Buzz');
        break;
    default: console.log('number is not divisible by 3 or 5');
}

//GOLD
let FB = 15;
FB % 15 === 0 ? console.log('Fizz Buzz') : FB % 3 === 0 ? console.log('Fizz') : FB % 5 === 0 ? console.log('Buzz') : console.log('Nope');


