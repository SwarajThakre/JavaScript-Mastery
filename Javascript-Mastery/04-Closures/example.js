// What is lexical scope?

//Example 1 :
let username = "Swaraj";

function greet() {
    console.log(username);
}
greet(); // Output: Swaraj

//Example 2 :

let a = 10;
function first() {
    let b = 20;
    function second() {
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    second();
}

first(); // Output: 10, 20, 30

// Imagine this like rooms in a house 🏠
// Global Room
// │
// ├── a = 10
// │
// └── first()
//       │
//       ├── b = 20
//       │
//       └── second()
//              │
//              └── c = 30

// Example 3 :

// function first() {
//     function second() {
//         let c = 30;
//     }
//     console.log(c);
// }
// first();  // Output: ReferenceError: c is not defined

// Why ? 

// Global Scope
//     │
//     ▼
// first()
//     │
//     ▼
// second()
//         │
//         └── c = 30

//  Rule to remember :

// Child ➜ Parent   ✅ Allowed

// Parent ➜ Child   ❌ Not Allowed

// Golden Rule of Lexical Scope 🧮 

// Child
//    ↑
// Parent
//    ↑
// Global

// Search goes up only.

// Never down.