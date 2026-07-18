# JavaScript Arrays (Part 3)

## Advanced Array Concepts

---

# Table of Contents

1. Array Destructuring
2. Spread Operator
3. Rest Operator
4. Shallow Copy
5. Deep Copy
6. structuredClone()
7. Common Mistakes
8. Interview Questions
9. Best Practices
10. Memory Tricks
11. Chapter Summary

---

# Array Destructuring

## Definition

Array destructuring is an ES6 feature that allows you to extract array elements into variables.

---

## Syntax

```javascript
const [variable1, variable2] = array;
```

---

## Example

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

Output

```javascript
Apple;
Banana;
Orange;
```

---

## Skip Elements

```javascript
const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output

```javascript
10;
30;
```

---

## Remaining Elements

```javascript
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
```

Output

```javascript
(10)[(20, 30, 40)];
```

---

# Spread Operator (...)

## Definition

The spread operator expands an iterable into individual elements.

---

## Copy an Array

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);
```

Output

```javascript
[1, 2, 3];
```

---

## Merge Arrays

```javascript
const frontend = ['HTML', 'CSS'];
const backend = ['Node.js', 'Express'];

const fullStack = [...frontend, ...backend];

console.log(fullStack);
```

Output

```javascript
['HTML', 'CSS', 'Node.js', 'Express'];
```

---

## Add New Elements

```javascript
const numbers = [2, 3];

const result = [1, ...numbers, 4];

console.log(result);
```

Output

```javascript
[1, 2, 3, 4];
```

---

# Rest Operator (...)

## Definition

The rest operator collects multiple elements into a single array.

---

## Example

```javascript
const [first, ...others] = [10, 20, 30, 40];

console.log(first);
console.log(others);
```

Output

```javascript
(10)[(20, 30, 40)];
```

---

## Rest Parameters

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30);
```

Output

```javascript
[10, 20, 30];
```

---

# Spread vs Rest

| Spread                        | Rest                        |
| ----------------------------- | --------------------------- |
| Expands elements              | Collects elements           |
| Used while copying or merging | Used while receiving values |

---

# Shallow Copy

## Definition

A shallow copy copies only the first level of an object or array.

Nested objects are still shared.

---

## Example

```javascript
const person = {
  name: 'Swaraj',
  address: {
    city: 'Virar',
  },
};

const copy = { ...person };

copy.address.city = 'Mumbai';

console.log(person.address.city);
```

Output

```javascript
Mumbai;
```

Why?

Because the nested object is still the same reference.

---

# Deep Copy

## Definition

A deep copy creates completely independent copies of all nested objects and arrays.

---

## structuredClone()

The easiest way to create a deep copy in modern JavaScript.

---

## Example

```javascript
const person = {
  name: 'Swaraj',
  address: {
    city: 'Virar',
  },
};

const copy = structuredClone(person);

copy.address.city = 'Mumbai';

console.log(person.address.city);
```

Output

```javascript
Virar;
```

The original object remains unchanged.

---

# Shallow vs Deep Copy

| Shallow Copy                   | Deep Copy                           |
| ------------------------------ | ----------------------------------- |
| Copies first level only        | Copies every level                  |
| Nested objects share reference | Completely independent              |
| Faster                         | More memory usage                   |
| Spread creates shallow copy    | structuredClone() creates deep copy |

---

# Common Mistakes

## Mistake 1

Thinking spread always creates a deep copy.

❌ Wrong

```javascript
const copy = { ...person };
```

Only the first level is copied.

---

## Mistake 2

Using sort() on numbers without a compare function.

❌ Wrong

```javascript
numbers.sort();
```

✅ Correct

```javascript
numbers.sort((a, b) => a - b);
```

---

## Mistake 3

Confusing slice() with splice()

Remember:

slice()

- Copy

splice()

- Change

---

## Mistake 4

Thinking map() changes the original array.

It returns a new array.

---

# Interview Questions

## What is array destructuring?

An ES6 feature used to extract array elements into variables.

---

## Difference between Spread and Rest

Spread

- Expands values

Rest

- Collects values

---

## Difference between Shallow Copy and Deep Copy

Shallow Copy

- Copies only the first level.
- Nested objects still share references.

Deep Copy

- Copies every nested object and array.
- Changes in the copy do not affect the original.

---

## What is structuredClone()?

A built-in JavaScript method used to create a deep copy of an object or array.

---

## Does spread operator create a deep copy?

No.

It creates only a shallow copy.

---

# Best Practices

✅ Use destructuring for cleaner code.

✅ Use spread to copy arrays or merge arrays.

✅ Use rest parameters when accepting an unknown number of arguments.

✅ Use structuredClone() when working with nested objects.

---

# Memory Tricks

Destructuring

→ Extract

Spread (...)

→ Expand

Rest (...)

→ Collect

Shallow Copy

→ One level

Deep Copy

→ Everything

structuredClone()

→ Safe copy

---

# Arrays Chapter Summary

You learned:

✅ Creating Arrays

✅ Accessing Elements

✅ Updating Elements

✅ length

✅ push()

✅ pop()

✅ shift()

✅ unshift()

✅ slice()

✅ splice()

✅ concat()

✅ join()

✅ includes()

✅ indexOf()

✅ lastIndexOf()

✅ reverse()

✅ sort()

✅ at()

✅ Array Destructuring

✅ Spread Operator

✅ Rest Operator

✅ Shallow Copy

✅ Deep Copy

✅ structuredClone()

---

# Quick Revision Table

| Concept           | Purpose                 |
| ----------------- | ----------------------- |
| push()            | Add at end              |
| pop()             | Remove last             |
| shift()           | Remove first            |
| unshift()         | Add first               |
| slice()           | Copy part of array      |
| splice()          | Add, remove, replace    |
| concat()          | Merge arrays            |
| join()            | Convert array to string |
| includes()        | Check if value exists   |
| indexOf()         | First index             |
| lastIndexOf()     | Last index              |
| reverse()         | Reverse array           |
| sort()            | Sort elements           |
| at()              | Access by index         |
| Destructuring     | Extract values          |
| Spread            | Expand values           |
| Rest              | Collect values          |
| Shallow Copy      | First-level copy        |
| Deep Copy         | Full independent copy   |
| structuredClone() | Deep copy               |

---

# Congratulations 🎉

You have completed the **JavaScript Arrays** chapter.

This knowledge is essential for:

- JavaScript Interviews
- React Development
- Node.js
- API Data Handling
- Real-world Projects

Next Chapter:

➡️ Higher-Order Array Methods (forEach, map, filter, find, some, every, reduce)
