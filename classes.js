//Classes
/*
Templates for creating objects. They encapsulate data with code. As JS is not a class-based
object-oriented-language, it utilizes prototypes to behave like an OOP language

Classes considered special functions and therefore can be defined as:
    - Class declaration
    - Class Expression
*/
// let teacher = {
//     name: "Ms. Lockhart",
//     subject: "Coding",
//     tenure: 1,
//     isPolyglot: true,
// }

// console.log(teacher)

// let Paul = {
//     name: "Paul",
//     subject: "Coding",
//     tenure: 2,
//     isPolyglot: true,
// }

// console.log(Paul)

//Class Declaration
//always capitalize the name of the class

class Teacher {
    constructor(name, subject, tenure, isPolyglot){
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }
}
//constructor is a method that gives us the tool to build the class
//this. is used to call the constructor parameter
console.log(typeof Teacher)

console.log(new Teacher()) //must have new to call it
//this will be an empty (undefined) version
//ways to assign to the template
let kLockhart = new Teacher("Kate Lockhart", "Coding", 1, true)
console.log(kLockhart)

kLockhart.name = "Kate L Lockhart"
console.log(kLockhart)

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
     // Method
     whatHouse() {
        return `Welcome to ${this.address}. Beautiful ${this.bedrooms} bed, ${this.bathrooms} bath house!`
    }
}


    let myHouse = new House("1734 N Penn St", 1, 1)
    console.log(myHouse)
    console.log(myHouse.whatHouse())

    let Garage = class extends House {
        constructor(address, bedrooms, bathrooms, cars, width, height){
            super(address, bedrooms, bathrooms)
            this.cars = cars
            this.width = width
            this.height = height
        }
    }
    console.log(new Garage.whatHouse()) //can use the function inside of the parent class

    //Challenge
    /*
    Create a Car class that takes the make and the model. 
    Instantiate new class object named Porshe with the same make and model of 911
    */

    let Car = class {
        constructor(make, model){
            this.make = make
            this.model = model
        }
    }

    let Porsche = new Car('Porsche','911')
    console.log(Porsche)

    //Challenge
    /*
    Create an Options class that inherits Car parent function. Give it a property of transmission.
    Give your 911 a manual or a PDK
    */

    let Options = class extends Car {
        constructor(make, model, transmission){
        super(make, model)
        this.transmission = transmission 
        }
        startCar() {  //Challenge 3 Update
            return `Your ${this.model} is running`
        }
    }
     let Transmission = new Options('Porsche', '911', 'manual')
     console.log(Transmission)
     
     //Challenge
     /*
        Modify above class and create startCar method that returns string interpolated results of 'Your 911 is running'.
     */
    console.log(Transmission.startCar())