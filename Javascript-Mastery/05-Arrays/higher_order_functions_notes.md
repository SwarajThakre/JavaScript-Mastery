# Higher Order Functions & Array Methods (Part 1)

---

# Table of Contents

1. Callback Function
2. Higher Order Function
3. forEach()
4. map()
5. forEach() vs map()
6. Interview Questions
7. Best Practices
8. Memory Tricks

---

# Callback Function

## Definition

A callback function is a function that is passed as an argument to another function and is executed later.

## Syntax

```javascript
function greet(callback) {
  callback();
}

function sayHello() {
  console.log('Hello');
}

greet(sayHello);
```

## Output

```
Hello
```

## Why use Callback Functions?

- Code reusability
- Asynchronous programming
- Event handling
- Array methods

---

# Higher Order Function (HOF)

## Definition

A Higher Order Function is a function that:

- accepts another function as an argument, OR
- returns another function.

## Example

```javascript
function greet(callback) {
  callback();
}
```

Here, `greet()` is a Higher Order Function.

---

# forEach()

## Definition

`forEach()` executes a callback function once for every element in the array.

It is mainly used to perform an action.

---

## Syntax

```javascript
array.forEach((element, index, array) => {});
```

---

## Parameters

| Parameter | Description    |
| --------- | -------------- |
| element   | Current value  |
| index     | Current index  |
| array     | Original array |

---

## Example

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log(num);
});
```

Output

```
10
20
30
```

---

## Example with Index

```javascript
numbers.forEach((value, index) => {
  console.log(index, value);
});
```

Output

```
0 10
1 20
2 30
```

---

## Real World Uses

- Logging
- Updating UI
- DOM manipulation
- API response iteration

---

## Important Points

✅ Loops through every element

✅ Returns undefined

✅ Does not create a new array

✅ Original array remains unchanged

---

# map()

## Definition

`map()` creates a new array by transforming every element of the original array.

---

## Syntax

```javascript
const newArray = array.map((element) => {
  return element;
});
```

---

## Example

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output

```
[2,4,6]
```

---

## Example

```javascript
const users = [{ name: 'Rahul' }, { name: 'Amit' }];

const names = users.map((user) => user.name);

console.log(names);
```

Output

```
["Rahul","Amit"]
```

---

## Important Points

✅ Returns new array

✅ Original array remains unchanged

✅ Used for transformation

---

# forEach() vs map()

| forEach()          | map()                 |
| ------------------ | --------------------- |
| Performs an action | Transforms data       |
| Returns undefined  | Returns new array     |
| Cannot chain       | Can chain             |
| No return value    | Return value required |

---

# Interview Questions

### What is a callback function?

A callback function is a function passed as an argument to another function and executed later.

---

### What is a Higher Order Function?

A function that accepts another function as an argument or returns another function.

---

### Difference between forEach() and map()

forEach()

- Performs an action
- Returns undefined

map()

- Creates new array
- Transforms data

---

# Best Practices

Use forEach()

- Logging
- Printing
- Side effects

Use map()

- Creating new arrays
- Transforming API data
- Rendering React lists

---

# Memory Tricks

Callback

> Function passed into another function.

Higher Order Function

> Function that accepts or returns another function.

forEach()

> Do something.

map()

> Change everything.
