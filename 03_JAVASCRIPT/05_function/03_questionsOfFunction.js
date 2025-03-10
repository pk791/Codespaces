// Write a JavaScript function to print the “Hello World” message.
function welcome() {
    console.log("Hello World");    
}
// welcome()

// Write a function that returns the square of a number.
function square(x) {
    return x * x
    // console.log("square of " + x + " is = " + x * x)
}
// console.log( square(11));


// Write a function to convert Celsius to Fahrenheit.
function temperature(celsius) {
    return(celsius * 1.8) + 32;
}
// console.log(temperature(37));


// Write a function to find the area of a given Rectangle.
function area (length, breadth) {
    return length * breadth;
}
// console.log("Area of rectangle = " + area(10,5));


// Write a function to find the area and perimeter of a Circle.
let areaAndPerimeter = 0;
function circle (r) {
    return areaAndPerimeter = (3.14159265 * r * r,  2 * 3.14159265 * r)
    
}
// console.log(circle(5));

// Write a JavaScript function that reverses a number.
function reverseDigits(n) {
    let x = 0;
    while(n > 0)
    {
        x = x * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return x;
}

// function call   
console.log(reverseDigits(54321));

// Write a JavaScript function that checks whether a passed string is a palindrome or not.
// Write a JavaScript function that generates all combinations of a string.
// Write a JavaScript function that returns a string that has letters in alphabetical order.