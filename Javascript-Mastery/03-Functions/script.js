// Function Declaration

function greet() {
    console.log("Hello!");
}

greet(); // Call the function - output: Hello!

// Function Expression

const greetExpression = function() {
    console.log("Hi there!");
};

greetExpression(); // Call the function - output: Hi there!

// Function decalaration vs Function Expression hoisting

// Example 

hello(); // Call the function before its declaration - output: Hello!

function hello() {
    console.log("Hello!");
}

// Example 2
helloExpression(); // Call the function before its declaration - output: TypeError: helloExpression is not a function

const helloExpression = function() {
    console.log("Hi there!");
};

// Anonymous Function

const anonymousFunction = function() {
    console.log("I am an anonymous function!");
};
anonymousFunction(); // Call the function - output: I am an anonymous function!

// Arrow Function
// Instead of
function add(a, b) {
    return a + b;
}

// We write 

const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5

// Parameters and Arguments

// parameters - variables writte while defining a function
// function add (a, b) - here a and b are parameters
// arguments - values passed to a function when calling it
// add(2, 3) - here 2 and 3 are arguments

// Return keyword

function multiply(a, b) {
    return a * b; // The function will return the product of a and b
}
console.log(multiply(4, 5)); // Output: 20

// Default Parameters

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser(); // Output: Hello, Guest!

// Rest Parameters

function sum(...numbers) {
    console.log;(numbers); 
}
sum(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]

// First-Class Functions
// Functions can be assigned to variables, passed as arguments, and returned from other functions

const greet = function () {
    console.log("Hello"); // Function assigned to a variable
};

function execute(fn) {
    fn(); // Function passed as an argument and executed
}

execute(greet);// Output: Hello

// Higher-Order Functions
// Functions that take other functions as arguments or return functions

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier; // Function returned from another function
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Practice Exercises

// Q1 

sayHi(); // Output: Hi!

function sayHi() {
    console.log("Hi!");
}

// Q2

sayHello(); // TypeError: sayHello is not a function

const sayHello = function() {
    console.log("Hello!");
};

// Q3 

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Q4

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser(); // Output: Hello, Guest!


// Q5 

function sum(...numbers) {
    console.log(numbers.length); // Output: 5
}

sum(1, 2, 3, 4, 5);

//  Q6 

// difference between

// function hello() {} - Function Declaration

// const hello = function() {} - Function Expression