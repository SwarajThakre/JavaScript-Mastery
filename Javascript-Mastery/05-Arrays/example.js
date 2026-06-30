// Creating Arrays
//Numbers
const numbers = [10, 20, 30, 40];
// Strings
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
// Mixed Values
const mixed = [10, 'Apple', 20, 'Banana', 30, 'Mango', 40, 'Orange'];

// Array Index
// Every value has an index.
// Index

// 0      1      2
// ↓      ↓      ↓

// ["Apple","Banana","Mango"]
// The first element always starts at 0.

// Accessing Array Elements
console.log(fruits[0]); // Output: Apple

// Updating Elements
const fruits2 = ['Apple', 'Banana', 'Mango'];

fruits2[1] = 'Orange';

console.log(fruits2); // Output: ["Apple", "Orange", "Mango"]

// Array Length
const fruits3 = ['Apple', 'Banana', 'Mango'];

console.log(fruits3.length); // Output: 3

// Last Element Trick ⭐
const fruits4 = ['Apple', 'Banana', 'Mango'];
console.log(fruits4[fruits4.length - 1]); // Output: Mango

// Array Methods

// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()

// 1️⃣ push() — Add at the End

const fruits5 = ['Apple', 'Banana'];

fruits5.push('Mango');

console.log(fruits5); // Output: ["Apple", "Banana", "Mango"]

// 2️⃣ pop() — Remove at the End

const fruits6 = ['Apple', 'Banana', 'Mango'];

fruits6.pop();

console.log(fruits6); // Output: ["Apple", "Banana"]

// 3️⃣ shift() — Remove at the Beginning

const fruits7 = ['Apple', 'Banana', 'Mango'];

fruits7.shift();

console.log(fruits7); // Output: ["Banana", "Mango"]

// 4️⃣ unshift() — Add at the Beginning

const fruits8 = ['Banana', 'Mango'];

fruits8.unshift('Apple');

console.log(fruits8); // Output: ["Apple", "Banana", "Mango"]

// 🧠 Easy Memory Trick

// push("D") ➜ Add a new coach at the back.
// pop() ➜ Remove the last coach.
// unshift("Z") ➜ Add a new coach at the front.
// shift() ➜ Remove the first coach.

// What is Array Destructuring?
// Array destructuring lets us extract array elements into variables

const fruits9 = ['Apple', 'Banana', 'Mango'];

const [a, b, c] = fruits9;

console.log(a); // Output: Apple
console.log(b); // Output: Banana
console.log(c); // Output: Mango

// Skipping Elements

const fruits10 = ['Apple', 'Banana', 'Mango'];

const [a, , c] = fruits10;

console.log(a); // Output: Apple
console.log(c); // Output: Mango

// Default Values

const fruits11 = ['Apple', 'Banana'];

const [a, b, c = 'Mango'] = fruits11;

console.log(a); // Output: Apple
console.log(b); // Output: Banana
console.log(c); // Output: Mango

// Spread Operator with Arrays

const fruits12 = ['Apple', 'Banana', 'Mango'];

const newFruits = [...fruits12, 'Orange'];

console.log(newFruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Creating a Copy of an Array

const fruits13 = ['Apple', 'Banana', 'Mango'];

const newFruits2 = [...fruits13];

console.log(newFruits2); // Output: ["Apple", "Banana", "Mango"]

// Memory trick

// Destructuring
// Array
// ↓

// ["Apple", "Banana", "Mango"]

// ↓

// first = "Apple"
// second = "Banana"

// Spread Operator

// Old Array

// [10,20,30]

// ↓

// Spread

// [10,20,30]
//         ↓

// New Array

// CallBack Function : A callback function is a function that is passed as an argument to another function, and is executed later.
function greet(name) {
  console.log('Hello ' + name);
}

greet('Swaraj'); // Hello Swaraj

// function greet(callback) {
//     callback();
// }

// function sayHello() {
//     console.log("Hello");
// }

// greet(sayHello); // Hello

// Higher-Order Functions are functions that take other functions as arguments or return functions

// function greet(callback) {
//     callback();
// }
// Since greet() accepts a function as an argument, it is a higher-order function. The sayHello() function is passed as an argument to greet(), and it is executed inside the greet() function.

//Easy Memory Trick
// Higher Order Function
//         │
//         │ receives
//         ▼
// Callback Function

// forEach ()
const numbers = [10, 20, 30];

numbers.forEach(function (number) {
  console.log(number);
});

// Output: 10
//         20
//         30

// Javascript does this internally
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// Arrow function version

const numbers2 = [10, 20, 30];

numbers2.forEach((number) => {
  console.log(number);
});

// What can forEach() Give us?
// 1. Access to the current element
// 2. Access to the current index
// 3. Access to the entire array

// 1. Value

const numbers3 = [10, 20, 30];

numbers3.forEach((number) => {
  console.log(number);
});

// Output: 10
//         20
//         30

// 2. Index

const numbers4 = [10, 20, 30];

numbers4.forEach((number, index) => {
  console.log(index);
});

// Output: 0
//         1
//         2

// 3. Entire Array

const numbers5 = [10, 20, 30];

numbers5.forEach((number, index, array) => {
  console.log(array);
});

// Output: [10, 20, 30]

// When to use forEach()

// 1. Print values
// 2. Update UI
// 3. Call an API for each item
// 4. perform an action on each item

// map ()
// Take every value and return a new value
// example
// Original:

// [1,2,3]
// ↓
// Multiply by 2
// ↓
// New Array
// [2,4,6]

// without map
// const numbers = [1, 2, 3, 4];

// const doubled = [];

// for (let i = 0; i < numbers.length; i++) {
//     doubled.push(numbers[i] * 2);
// }

// console.log(doubled); // Output: [2, 4, 6, 8]

// with map
// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(function (number) {
//     return number * 2;
// });

// console.log(doubled); // Output: [2, 4, 6, 8]

// How does map() work?
// 1. Create a new array
// 2. Run a function for each value
// 3. Add the returned value to the new array

// eg :
const names = ['swaraj', 'rahul', 'amit'];

const upper = names.map((name) => {
  return name.toUpperCase();
});

console.log(upper); // Output: ["SWARAJ", "RAHUL", "AMIT"]

// eg : 2

const nums = [1, 2, 3, 4];

const updated = nums.map((num) => {
  return num + 2;
});

console.log(updated); // Output: [3, 4, 5, 6]

// foreach() vs map ()

// | `forEach()`                               | `map()`                          |
// | ----------------------------------------- | -------------------------------- |
// | Performs an action                        | Transforms data                  |
// | Returns `undefined`                       | Returns a new array              |
// | Used for logging, API calls, side effects | Used to create a modified array  |
// | Original array remains unchanged          | Original array remains unchanged |

//  memory trick

Original;

// [1] [2] [3]
//       │
//       ▼
// Multiply by 2
//       │
//       ▼
// [2] [4] [6]
