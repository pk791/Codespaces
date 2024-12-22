//  Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true) // Not recommended

// Null and Undefined
let firstName = null;
let lastName = undefined;

// console.log(firstName);
// console.log(lastName);

// String

let myString = "Hello"
let yourString = "World"
let userName = "Priyanshu"

let oldGreet = myString + " " + "Priyanshu";
// console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
// let greetMessage = `2 + 2 ${2 + 2} !`;
// console.log(greetMessage);

let sm1 = Symbol("Priyanshu")
let sm2 = Symbol("Priyanshu")
console.log(sm1);
