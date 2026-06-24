// Q1 : 

console.log(a);
var a = 10;

// a
// ↓
// undefined because var gets initialized

// Q2 :

console.log(b);
let b = 20;

// ReferenceError: Cannot access 'b' before initialization

// Q3 :

greet();
function greet() {
  console.log("Hello!");
}

// Hello! - function declaration is hoisted to the top of the scope, so it can be called before its definition.

// Q4 :

greet2();

var greet2 = function () {
  console.log("Hello!");
};

// TypeError : greet2 is not a function

// Q5 :

const c = 10;
Type
c = 20;

// TypeError : Assignment to constant variable.
