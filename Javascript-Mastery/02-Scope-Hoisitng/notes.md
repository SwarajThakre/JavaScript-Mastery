# 📚 Day 2 - Hoisting, `var`, `let`, `const` & Temporal Dead Zone (TDZ)

## 📌 What is Hoisting?

Hoisting is JavaScript's default behavior of processing variable and function declarations before executing the code.

> **Important:** JavaScript does **not** physically move your code to the top. During the **Memory Creation Phase**, it allocates memory for variables and functions.

---

## 🔄 JavaScript Execution Phases

### 1. Memory Creation Phase

* Memory is allocated for variables and functions.
* `var` variables are initialized with `undefined`.
* `let` and `const` are hoisted but remain **uninitialized**.
* Function declarations are stored completely in memory.

### 2. Execution Phase

* Code executes line by line.
* Variables receive their assigned values.
* Functions are called.

---

## 📝 Hoisting Examples

### Example 1 - `var`

```javascript
console.log(a);

var a = 10;
```

**Output**

```text
undefined
```

**Reason:**

`var` is hoisted and initialized with `undefined` during the Memory Creation Phase.

---

### Example 2 - `let`

```javascript
console.log(a);

let a = 10;
```

**Output**

```text
ReferenceError: Cannot access 'a' before initialization
```

**Reason:**

`let` is hoisted but remains inside the **Temporal Dead Zone** until execution reaches its declaration.

---

### Example 3 - Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

**Output**

```text
Hello
```

**Reason:**

Function declarations are completely stored during the Memory Creation Phase.

---

### Example 4 - Function Expression

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

**Output**

```text
TypeError: greet is not a function
```

**Reason:**

`greet` is hoisted as `undefined`.

JavaScript tries to execute:

```javascript
undefined();
```

which throws a `TypeError`.

---

# 🔹 var

### Features

* Function Scoped
* Can be Redeclared
* Can be Reassigned
* Hoisted
* Initialized with `undefined`

Example:

```javascript
var a = 10;
var a = 20;

console.log(a);
```

Output:

```text
20
```

---

# 🔹 let

### Features

* Block Scoped
* Cannot be Redeclared in the same scope
* Can be Reassigned
* Hoisted
* Exists in the Temporal Dead Zone until initialized

Example:

```javascript
let a = 10;

a = 20;

console.log(a);
```

Output:

```text
20
```

---

# 🔹 const

### Features

* Block Scoped
* Cannot be Redeclared
* Cannot be Reassigned
* Must be initialized at the time of declaration
* Exists in the Temporal Dead Zone until initialized

Example:

```javascript
const a = 10;

a = 20;
```

Output:

```text
TypeError: Assignment to constant variable.
```

---

# 🚫 Temporal Dead Zone (TDZ)

## Definition

The **Temporal Dead Zone (TDZ)** is the time between entering a scope and initializing a `let` or `const` variable.

Accessing the variable during this period throws a `ReferenceError`.

Example:

```javascript
console.log(name);

let name = "Swaraj";
```

Output:

```text
ReferenceError: Cannot access 'name' before initialization
```

---

# 📊 Difference Between `var`, `let`, and `const`

| Feature                         | var         | let   | const |
| ------------------------------- | ----------- | ----- | ----- |
| Scope                           | Function    | Block | Block |
| Hoisted                         | ✅           | ✅     | ✅     |
| Initialized During Memory Phase | `undefined` | ❌     | ❌     |
| Temporal Dead Zone              | ❌           | ✅     | ✅     |
| Redeclare                       | ✅           | ❌     | ❌     |
| Reassign                        | ✅           | ✅     | ❌     |

---

# 🎤 Interview Questions

### 1. What is Hoisting?

Hoisting is JavaScript's behavior of allocating memory for variable and function declarations before executing code.

---

### 2. Is `let` hoisted?

Yes.

`let` is hoisted but remains in the **Temporal Dead Zone** until it is initialized.

---

### 3. What is the Temporal Dead Zone?

It is the period between entering a scope and initializing a `let` or `const` variable. Accessing the variable during this time results in a `ReferenceError`.

---

### 4. Why does `var` print `undefined` but `let` throws an error?

`var` is initialized with `undefined` during the Memory Creation Phase, while `let` stays uninitialized in the Temporal Dead Zone until its declaration is executed.

---

### 5. Why do function declarations work before they are defined?

Because the entire function declaration is stored in memory during the Memory Creation Phase.

---

# 🧠 Key Takeaways

* Hoisting happens during the Memory Creation Phase.
* JavaScript executes code in two phases: **Memory Creation** and **Execution**.
* `var` is function scoped and initialized with `undefined`.
* `let` and `const` are block scoped and remain in the Temporal Dead Zone until initialized.
* Function declarations are fully hoisted, while function expressions are not.

---

# ✅ Status

* [x] Hoisting
* [x] Memory Creation Phase
* [x] Execution Phase
* [x] `var`
* [x] `let`
* [x] `const`
* [x] Temporal Dead Zone (TDZ)
* [x] Practice Questions
* [x] Interview Questions

**Day 2 Completed Successfully 🎉**
