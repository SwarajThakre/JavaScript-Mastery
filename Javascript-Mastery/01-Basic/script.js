// Global Execution Context

// let x ;

// function greet (){
//     console.log("hello");
// }
// console.log(x);

// Phase 1 : Memory Creation Phase
// console.log(a);

// var a = 10;

// function sayHi(){
//     console.log("hi");
// }

// Memory looks like 🧮
//  a -> undefined
//  sayHi -> function

// Phase 2 : Execution Phase
// Now the code is executed line by line

// console.log(a); 
// Output : undefined
// Then 
//  a = 10;
// Memory becomes
//  a -> 10

// Function Execution Context

// let x =5;

// function add () {
//     let y = 10;
//     console.log(x + y);
// }

// add();

// Global Context
// ↓
// Function Context (add)

// Variables
// y = 10

// Q1 : 

let a = 20;

function show(){
    console.log(a);
}

show();

// Q2 : 

function one(){
    two();
}

function two(){
    console.log("hello");
}

one();

// Q3 : 
function demo (){
    let x = 10;
}

console.log (x);

// Q4 : 
if (true){
    let x = 5 ;
}

console.log(x);

// let a = 10;

// function first (){
//     let b = 20; 

//     function second(){
//         console.log(a );
//         console.log(b);
//     }

//     second();

// }

// first();