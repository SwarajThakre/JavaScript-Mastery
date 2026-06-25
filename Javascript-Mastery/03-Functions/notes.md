# 📚 Day 3 - Functions in JavaScript

## 📌 What is a Function?

A function is a reusable block of code designed to perform a specific task. Instead of writing the same code multiple times, we write it once and call it whenever needed.

---

# Function Declaration

A function declaration is created using the `function` keyword and has a name.

```javascript
function greet() {
  console.log('Hello');
}

greet();
```

### Output

```
Hello
```

### Key Points

- Fully hoisted
- Can be called before its declaration
- Reusable

---

# Function Expression

A function expression stores a function inside a variable.

```javascript
const greet = function () {
  console.log('Hello');
};

greet();
```

### Key Points

- Not fully hoisted
- Can only be called after initialization

---

# Anonymous Function

An anonymous function is a function without a name.

```javascript
const greet = function () {
  console.log('Hello');
};
```

Anonymous functions are commonly used in callbacks and function expressions.

---

# Arrow Function

Arrow functions provide a shorter syntax for writing functions.

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));
```

### Short Syntax

```javascript
const add = (a, b) => a + b;
```

If the function has only one expression, the value is returned automatically.

---

# Parameters vs Arguments

## Parameters

Parameters are variables declared while defining a function.

```javascript
function add(a, b) {}
```

`a` and `b` are parameters.

---

## Arguments

Arguments are actual values passed while calling a function.

```javascript
add(5, 10);
```

`5` and `10` are arguments.

---

# Return Statement

The `return` keyword sends a value back from the function.

```javascript
function add(a, b) {
  return a + b;
}

const result = add(5, 10);

console.log(result);
```

### Output

```
15
```

Without `return`, the function returns `undefined`.

---

# Default Parameters

Default parameters allow a value to be used if no argument is passed.

```javascript
function greet(name = 'Guest') {
  console.log(name);
}

greet();
```

### Output

```
Guest
```

---

# Rest Parameters

The rest parameter collects multiple arguments into an array.

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

### Output

```
[1, 2, 3, 4]
```

---

# First-Class Functions

JavaScript treats functions as values.

Functions can:

- Be assigned to variables
- Be passed as arguments
- Be returned from other functions

Example:

```javascript
const greet = function () {
  console.log('Hello');
};

function execute(fn) {
  fn();
}

execute(greet);
```

---

# Function Declaration vs Function Expression

| Function Declaration        | Function Expression               |
| --------------------------- | --------------------------------- |
| Fully hoisted               | Not fully hoisted                 |
| Can call before declaration | Cannot call before initialization |
| Declared directly           | Stored in a variable              |

---

# Interview Questions

## What is a Function?

A reusable block of code that performs a specific task.

---

## Difference between Parameters and Arguments?

Parameters are variables in the function definition.

Arguments are values passed during the function call.

---

## Difference between Function Declaration and Function Expression?

Function declarations are fully hoisted.

Function expressions are not.

---

## What are Arrow Functions?

Arrow functions are a shorter syntax for writing functions introduced in ES6.

---

## What are First-Class Functions?

Functions in JavaScript can be treated like values.

---

# Key Takeaways

- Functions help avoid code repetition.
- Function declarations are fully hoisted.
- Function expressions are stored inside variables.
- Arrow functions provide shorter syntax.
- Parameters receive values through arguments.
- `return` sends values back.
- Default parameters prevent `undefined`.
- Rest parameters collect multiple values into an array.
- Functions are first-class citizens in JavaScript.

---

# Status

- [x] Function Declaration
- [x] Function Expression
- [x] Anonymous Function
- [x] Arrow Function
- [x] Parameters vs Arguments
- [x] Return Statement
- [x] Default Parameters
- [x] Rest Parameters
- [x] First-Class Functions

**Day 3 Completed ✅**
