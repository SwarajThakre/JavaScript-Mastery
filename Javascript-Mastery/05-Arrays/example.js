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
const fruits2 = ["Apple", "Banana", "Mango"];

fruits2[1] = "Orange";

console.log(fruits2); // Output: ["Apple", "Orange", "Mango"]

// Array Length
const fruits3 = ["Apple", "Banana", "Mango"];

console.log(fruits3.length); // Output: 3

// Last Element Trick ⭐
const fruits4 = ["Apple", "Banana", "Mango"];
console.log(fruits4[fruits4.length - 1]); // Output: Mango

// Array Methods 

// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()

// 1️⃣ push() — Add at the End

const fruits5 = ["Apple", "Banana"];

fruits5.push("Mango");

console.log(fruits5); // Output: ["Apple", "Banana", "Mango"]

// 2️⃣ pop() — Remove at the End

const fruits6 = ["Apple", "Banana", "Mango"];

fruits6.pop();

console.log(fruits6); // Output: ["Apple", "Banana"]

// 3️⃣ shift() — Remove at the Beginning

const fruits7 = ["Apple", "Banana", "Mango"];

fruits7.shift();

console.log(fruits7); // Output: ["Banana", "Mango"]

// 4️⃣ unshift() — Add at the Beginning

const fruits8 = ["Banana", "Mango"];

fruits8.unshift("Apple");

console.log(fruits8); // Output: ["Apple", "Banana", "Mango"]

// 🧠 Easy Memory Trick

// push("D") ➜ Add a new coach at the back.
// pop() ➜ Remove the last coach.
// unshift("Z") ➜ Add a new coach at the front.
// shift() ➜ Remove the first coach.

// What is Array Destructuring?
// Array destructuring lets us extract array elements into variables

const fruits9 = ["Apple", "Banana", "Mango"];

const [a, b, c] = fruits9;

console.log(a); // Output: Apple
console.log(b); // Output: Banana
console.log(c); // Output: Mango

// Skipping Elements

const fruits10 = ["Apple", "Banana", "Mango"];

const [a, , c] = fruits10;

console.log(a); // Output: Apple
console.log(c); // Output: Mango

// Default Values

const fruits11 = ["Apple", "Banana"];

const [a, b, c = "Mango"] = fruits11;

console.log(a); // Output: Apple
console.log(b); // Output: Banana
console.log(c); // Output: Mango

// Spread Operator with Arrays

const fruits12 = ["Apple", "Banana", "Mango"];

const newFruits = [...fruits12, "Orange"];

console.log(newFruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Creating a Copy of an Array

const fruits13 = ["Apple", "Banana", "Mango"];

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