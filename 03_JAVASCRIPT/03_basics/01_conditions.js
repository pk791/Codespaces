// Checking if a number is greater than another number:

let num1 = 4;
let num2 = "4";

if (num1 > num2) {
    console.log("I am a student");
} else if (num1 === num2) {
    console.log("Both are same and both type same");
} else if (num1 == num2) {
    // console.log("Both are same");
} else {
    console.log("I am under else");
}

// Checking if a string is equal to another string:

let username = "Chai"
let anotherUsername = "Chai"

if (username === anotherUsername) {
    // console.log("Pick another username");
} else {
    console.log("Yes, You can pick this username");
}

// Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
    console.log("Tea is ready.");    
} else {
    // console.log("Tea is not ready.");    
}

// Checking if an array is empty or not:

let items = ["item1"]
console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty.");
} else {
    console.log("Array is not empty.");
    
}
