// Functions; Scope; Hoisting; and Literals

//LITERALS

let butlerMascot = 'Bulldog';
let myAge = 30;
let arr = [];//not hardcoded because it is empty

//these have been 'hard' coded meaning they exist because we coded them vs inputs from a user 

//Hoisting
//Basically a glitch in the language
//All var variables and function declarations get pulled to the top does not happen with let
console.log(name);
var name = 'Ryan';
//will report undefined instead of an error
console.log(name); //this will return Ryan

//FUNCTIONS
//block of code designed to perform a specific task

//Scope
//hierarcy of variables in our code can be global, local, parent, and child

let coffeeOrigin = 'Ethiopia' //global scope

var x = 12; //global
function scope(){
    x = 33; //local
    console.log(x);
}