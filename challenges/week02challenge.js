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

//THURSDAY

// Bronze
/* Create for loop that runs until it has reached the end of the alphabet array, and prints each letter to the console */
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//for (letter in alphabet){
    ///console.log(alphabet[letter]);
//}

//Silver
//Write a conditional nested inside of for loop that checks if the index of each character in the alphabet arrary is even or odd. If the index is even, console.the letter if the index is odd console "index is an odd number"

for (i in alphabet){
    if (i % 2 === 0){
        console.log(alphabet[i]);
    } else {
        console.log(`index is an odd number`);
    }
 }
//GOLD
//Convert conditional into a ternary
for (i in alphabet){
    i % 2 === 0 ? console.log(alphabet[i]) : console.log(`index is an odd number`);
}

/* Platinum
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, 
    and then console.log the array.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
let vowels = ['A','E','I','O','U'];
let arr = [];

for (i in fellowshipOfTheRing.members){
    if (vowels.includes(i[0])){
        console.log('No ring for you');
    } else {
        arr.push([i])
        console.log(arr);
    }
}
