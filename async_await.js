//Asynchronous JS Functions
/*
- async returns a Promise
- await makes function waits for a Promise
*/

function standardFunction() {   
    return "This is a standard function."
}

standardFunction();

async function asyncFunction() {
    return console.log("This returns a promise.")
}
asyncFunction()

// async function asyncFunction() {
//     return Promise
// }

async function asyncAction() {
    setTimeout(() => {
        console.log("Async finally hit")
    }, 3000);
}
asyncAction()


//Promise
/*
Commit to something
    -completed -> resolved
    -rejected
    */

    let p = new Promise((resolve, reject) => {
        //Promise object with one function with resolve & reject parameters
        let a = 1 + 1
        if (a === 2){
            resolve("Promise successful and Resolved")
        } else{
            reject("Promise failed")
        }
        })

        p.then((message) => {
            console.log(`This is the then ${message}`)
        })
//Now make it reject and use .catch()
        let p = new Promise((resolve, reject) => {
            //Promise object with one function with resolve & reject parameters
            let a = 1 + 2
            if (a === 2){
                resolve("Promise successful and Resolved")
            } else{
                reject("Promise failed")
            }
            })
    
            p.then((message) => {
                console.log(`This is the then ${message}`)
            }) .catch((message)=> {
                console.log(`This is the catch ${message}`)
            })

//Try, Catch, Throw, and Finally
//only used for runtime errors

try {
    //test a block of code
    callingsomeBSFunctionThatDoesntExist()
    console.log("start of the try")
} catch(err){
    //handles the error
    console.log(`Error has occured ` + err)
    //err.name logs the name of the error; err.message logs the message
} finally {
    //executes the code after try/catch regardless of the result
    console.log("Finally ALWAYS runs")
}
//we must catch errors or everything will crash in the event of an error

//Throw is used for custom errors Example
let json = '{"age":30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name')
    }
} catch(e) {
    console.log(`JSON Error: ${e}`)
}

function upperCase(name) {
    if(typeof name !== "string") {
        throw TypeError("Name must be a string")
    }
    return name.toUpperCase();
}