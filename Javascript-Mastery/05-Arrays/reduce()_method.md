# Higher Order Functions & Array Methods (Part 3)

## reduce() + Interview Notes

---

# Table of Contents

1. reduce()
2. Accumulator
3. Initial Value
4. How reduce() Works
5. Examples
6. Advanced Examples
7. Master Comparison Table
8. Interview Questions
9. Best Practices
10. Memory Tricks
11. React Examples

---

# reduce()

## Definition

`reduce()` is a Higher Order Array Method that reduces an array into a **single value** by repeatedly executing a callback function.

The final value can be:

- Number
- String
- Object
- Array
- Boolean

---

# Syntax

```javascript
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

---

# Parameters

| Parameter    | Description                   |
| ------------ | ----------------------------- |
| accumulator  | Stores the running result     |
| currentValue | Current array element         |
| initialValue | Starting value of accumulator |

---

# Understanding the Accumulator

Think of the accumulator as a **running result**.

Example:

```javascript
const numbers = [10, 20, 30];
```

Initial Value

```
acc = 0
```

Iteration 1

```
0 + 10 = 10
```

Iteration 2

```
10 + 20 = 30
```

Iteration 3

```
30 + 30 = 60
```

Final Answer

```
60
```

---

# Golden Rule

> Whatever you return becomes the accumulator in the next iteration.

---

# Example 1 : Sum of Numbers

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);
```

Output

```javascript
100;
```

---

# Example 2 : Largest Number

```javascript
const numbers = [5, 10, 2, 30, 8];

const largest = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);

console.log(largest);
```

Output

```javascript
30;
```

---

# Example 3 : Shopping Cart Total

```javascript
const cart = [
  { name: 'Laptop', price: 50000 },
  { name: 'Mouse', price: 1000 },
  { name: 'Keyboard', price: 2000 },
];

const total = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);
```

Output

```javascript
53000;
```

---

# Example 4 : Count Occurrences

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log(count);
```

Output

```javascript
{
    apple:3,
    banana:2,
    orange:1
}
```

---

# Example 5 : Flatten Array

```javascript
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const result = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(result);
```

Output

```javascript
[1, 2, 3, 4, 5, 6];
```

---

# Initial Value Cheat Sheet

Need Total?

```javascript
0;
```

Need Array?

```javascript
[];
```

Need Object?

```javascript
{
}
```

Need String?

```javascript
'';
```

---

# Master Comparison Table

| Method    | Returns                | Purpose                     |
| --------- | ---------------------- | --------------------------- |
| forEach() | undefined              | Perform an action           |
| map()     | New Array              | Transform every element     |
| filter()  | New Array              | Keep matching elements      |
| find()    | First matching element | Find one item               |
| some()    | Boolean                | At least one matches        |
| every()   | Boolean                | All match                   |
| reduce()  | Any value              | Reduce array into one value |

---

# Which Method Should I Use?

Want to print?

```
forEach()
```

Want to modify every value?

```
map()
```

Want matching values?

```
filter()
```

Want first matching value?

```
find()
```

Want to know if one exists?

```
some()
```

Want to check if all satisfy?

```
every()
```

Want one final value?

```
reduce()
```

---

# Common Interview Questions

## What is reduce()?

`reduce()` is a Higher Order Array Method that reduces an array into a single value by repeatedly executing a callback function.

---

## What is an accumulator?

The accumulator stores the running result after each iteration.

Whatever is returned becomes the accumulator for the next iteration.

---

## Why is reduce() powerful?

Because it can solve many problems:

- Sum
- Maximum
- Minimum
- Grouping
- Counting
- Flattening arrays
- Converting arrays into objects

---

## Difference between map() and reduce()

map()

- Returns a new array
- One output for each input

reduce()

- Returns one final value
- Can return any data type

---

# Best Practices

Use reduce() when:

- Calculating totals
- Shopping cart price
- Analytics
- Grouping data
- Counting occurrences
- Building objects
- Aggregating API responses

Avoid using reduce() for simple transformations when `map()` or `filter()` makes the code easier to read.

---

# Memory Tricks

forEach()

> Do something.

map()

> Change everything.

filter()

> Keep matching.

find()

> First match.

some()

> One is enough.

every()

> Everyone must pass.

reduce()

> Combine everything into one result.

---

# React Examples

## Total Cart Price

```javascript
const total = cart.reduce((acc, item) => acc + item.price, 0);
```

---

## Count Completed Todos

```javascript
const completed = todos.reduce(
  (acc, todo) => (todo.completed ? acc + 1 : acc),
  0,
);
```

---

## Group Users by Role

```javascript
const grouped = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }

  acc[user.role].push(user);

  return acc;
}, {});
```

---

# Chapter Summary

## Higher Order Functions

- Callback Function
- Higher Order Function

## Array Methods

- forEach()
- map()
- filter()
- find()
- some()
- every()
- reduce()

---

# Congratulations 🎉

You have completed:

✅ Higher Order Functions

✅ Higher Order Array Methods

These concepts are used extensively in:

- Modern JavaScript
- React
- Next.js
- Node.js

A strong understanding of these methods will make writing cleaner and more efficient code much easier.
