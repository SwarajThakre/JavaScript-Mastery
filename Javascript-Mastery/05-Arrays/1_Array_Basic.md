# JavaScript Arrays (Part 1)

---

# Table of Contents

1. What is an Array?
2. Why Use Arrays?
3. Creating Arrays
4. Accessing Elements
5. Updating Elements
6. Array Length
7. push()
8. pop()
9. shift()
10. unshift()
11. Comparison Table
12. Interview Questions
13. Best Practices
14. Memory Tricks

---

# What is an Array?

An array is a special JavaScript object that stores multiple values in a single variable.

Instead of creating many variables, we can store related data inside one array.

---

# Why Use Arrays?

Without an array:

```javascript
const student1 = 'Rahul';
const student2 = 'Amit';
const student3 = 'Swaraj';
```

With an array:

```javascript
const students = ['Rahul', 'Amit', 'Swaraj'];
```

Arrays make data easier to manage, loop through, search, and modify.

---

# Creating Arrays

## Method 1 (Recommended)

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
```

---

## Method 2

```javascript
const numbers = new Array(10, 20, 30);
```

---

# Array Rules

Arrays can store:

```javascript
const data = ['Swaraj', 24, true, null, { city: 'Virar' }, ['HTML', 'CSS']];
```

Arrays can contain different data types.

---

# Accessing Elements

Arrays use **zero-based indexing**.

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
```

| Index | Value  |
| ----: | ------ |
|     0 | Apple  |
|     1 | Banana |
|     2 | Orange |

Examples:

```javascript
console.log(fruits[0]);
```

Output

```javascript
Apple;
```

```javascript
console.log(fruits[2]);
```

Output

```javascript
Orange;
```

---

# Updating Elements

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

fruits[1] = 'Mango';

console.log(fruits);
```

Output

```javascript
['Apple', 'Mango', 'Orange'];
```

---

# length Property

Returns the total number of elements.

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits.length);
```

Output

```javascript
3;
```

---

Last element shortcut:

```javascript
fruits[fruits.length - 1];
```

Example:

```javascript
console.log(fruits[fruits.length - 1]);
```

Output

```javascript
Orange;
```

---

# push()

## Definition

Adds one or more elements to the **end** of the array.

---

## Syntax

```javascript
array.push(value);
```

---

## Example

```javascript
const fruits = ['Apple', 'Banana'];

fruits.push('Orange');

console.log(fruits);
```

Output

```javascript
['Apple', 'Banana', 'Orange'];
```

---

Multiple Values

```javascript
fruits.push('Mango', 'Grapes');
```

Output

```javascript
['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
```

---

# pop()

## Definition

Removes the **last** element from an array.

---

## Syntax

```javascript
array.pop();
```

---

## Example

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

fruits.pop();

console.log(fruits);
```

Output

```javascript
['Apple', 'Banana'];
```

---

Returned Value

```javascript
const removed = fruits.pop();

console.log(removed);
```

Output

```javascript
Orange;
```

---

# shift()

## Definition

Removes the **first** element from an array.

---

## Syntax

```javascript
array.shift();
```

---

## Example

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

fruits.shift();

console.log(fruits);
```

Output

```javascript
['Banana', 'Orange'];
```

---

Returned Value

```javascript
const removed = fruits.shift();

console.log(removed);
```

Output

```javascript
Apple;
```

---

# unshift()

## Definition

Adds one or more elements to the **beginning** of the array.

---

## Syntax

```javascript
array.unshift(value);
```

---

## Example

```javascript
const fruits = ['Banana', 'Orange'];

fruits.unshift('Apple');

console.log(fruits);
```

Output

```javascript
['Apple', 'Banana', 'Orange'];
```

---

Multiple Values

```javascript
fruits.unshift('Kiwi', 'Mango');
```

Output

```javascript
['Kiwi', 'Mango', 'Apple', 'Banana', 'Orange'];
```

---

# Comparison Table

| Method    | Purpose          | Returns         | Changes Original Array |
| --------- | ---------------- | --------------- | ---------------------- |
| push()    | Add at end       | New length      | ✅ Yes                 |
| pop()     | Remove last      | Removed element | ✅ Yes                 |
| shift()   | Remove first     | Removed element | ✅ Yes                 |
| unshift() | Add at beginning | New length      | ✅ Yes                 |

---

# Interview Questions

## What is an array?

An array is a special JavaScript object used to store multiple values in a single variable.

---

## Difference between push() and unshift()

push()

- Adds element at the end

unshift()

- Adds element at the beginning

---

## Difference between pop() and shift()

pop()

- Removes the last element

shift()

- Removes the first element

---

## Does push() modify the original array?

Yes.

---

## Does pop() return the removed element?

Yes.

---

# Best Practices

✅ Use `push()` to add elements at the end.

✅ Use `pop()` to remove the last element.

✅ Avoid using `shift()` and `unshift()` frequently on very large arrays because they move all remaining elements and can be slower.

---

# Memory Tricks

push()

> Push to the end.

pop()

> Pop from the end.

shift()

> Shift removes the first.

unshift()

> Unshift adds to the first.

---

# Quick Revision

```text
Array

↓

length

↓

push()

↓

pop()

↓

shift()

↓

unshift()
```

---

# Chapter Summary

You learned:

✅ Creating Arrays

✅ Accessing Elements

✅ Updating Elements

✅ length

✅ push()

✅ pop()

✅ shift()

✅ unshift()

Next:

➡️ slice()

➡️ splice()

➡️ concat()

➡️ join()

➡️ includes()

➡️ indexOf()

➡️ lastIndexOf()

➡️ reverse()

➡️ sort()

➡️ at()
