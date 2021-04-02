//IF STATEMENTS
//Checks for a boolean value, if something is true its truthy or its falsey
//Truthy -  if condition is or can be true
//Falsely - if condition is false or can be false
// some falsey expressions: null, NaN (not a number), 0, an empty string (" "), and undefined

// if a condition is true, JS will execute code block
// if checks one, singular, condiiton

//Declare a variable

let isOpen = true;

//the condition to be checked is within the ( )
if (isOpen === true){
    //the code we perform if the condition is met is held in the {}
    console.log('The door is open.');
}

//Can test false values

if (isOpen === false){
    console.log('The door is shut.');
}

//IF ELSE
//If Else is used to check a condition, but run a code block for either the met condition or a separate code block if it does not meet the condition

let isOpen = false;

if( isOpen === true){
    console.log('You can go inside');
}else {
    console.log('The door is not open to enter');
}

let temp = 70;

if (temp >= 65){
    console.log('What a nice day!');
} else {
    console.log('I need a sweater');
}

// ELSE IF is used to check more than 2 conditions
//Examples: Day 2 challenge, Fizz Buzz challenge

let temp = 68;

if (temp >= 80){
    console.log('Wear your shorts');
} else if (temp >= 65){
    console.log('T-shirt weather');
} else if (temp >= 50){
    console.log('Grab a sweater');
} else {
    console.log('Damn it is cold');
}

let userName = "myUsername";
let password = "myPassword";

if (userName === "myUsername" && password === "myPassword"){
    console.log(`Welcome back, ${userName}.`)
}else if (userName ==="myUsername") {
    console.log('your username is correct but password is not')
} else {
    console.log('You are not in our database, want to sign up?')
}

//SWITCH STATEMENTS
//Execute a block of code depending on the "cases"; condition met? check against cases 
//use case (condition) : - starts code block
//break ends the code
//Example Fizz Buzz
//Default -code that runs if no case is met

let favColor = 'green';

switch (favColor){
    case 'blue':
        console.log('Blue like the sky');
        break;
    case 'red':
        console.log('Red like a rose');
        break;
    default:
        console.log(`${favColor} is beautiful too`);
}

//we do not have to have to have a break after each case
//example

let doYouLikePizza = 'yes';

switch (doYouLikePizza){
    case 'yes':
    case 'yeah':
    case 'duh':
        console.log('Me too! Pizza is dope');
        break;
    case 'no':
    case 'nope':
    case 'nah':
        console.log('Ohh I will order something else');   
        break;
    default:
        console.log('I cannot tell if that is a yes or a no');  
}

// TERNARY
//Concise way to check two (or more) conditions using the syntax of ? and :
//structure
// condition ? codeToRunIfTrue : codeToRunIfFalse
// can put things in () for clarity and easier reading

let temp = 70;

(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temps');

let num = 13;

(num > 0) ? console.log('Positive number') : (num < 0) ? console.log('Negative number') : console.log('Number is 0');

//LOOPS
//For Loop - a quick way to iterate or 'loop' over something to do it repeatedly
//Infinite loops are possible (best to avoid)
// ctrl + C to stop or close VSCode
// Loops have 3 parameters
// 1. initial expression
// 2. condition
// 3. increment (or decrement) expression

//count to ten
//     1      2       3
for (i = 0; i <= 10; i++){
    console.log(i);
}

// countdown from 10
for (i = 10; i >= 0; i--){
    console.log(i);
}

//Challenge using a for loop to count to 20 but by 2

for (i = 0; i <= 20; i=i+2){
    console.log(i);
}
//decrease
for (i = 20; i >= 0; i=i-2){
    console.log(i);
}

//Printing each letter with a loop
let word = 'Fantastic';

for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}