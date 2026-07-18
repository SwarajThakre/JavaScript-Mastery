# Array Methods (Part 2)

---

# Table of Contents

1. filter()
2. find()
3. some()
4. every()
5. Comparison Tables
6. Interview Questions
7. Best Practices
8. Memory Tricks

---

# filter()

## Definition

`filter()` is a non-mutating array method that creates a **new array** containing only the elements that satisfy a given condition.

---

## Syntax

```javascript
const result = array.filter((element) => {
  return condition;
});
```

---

## Parameters

| Parameter | Description               |
| --------- | ------------------------- |
| element   | Current element           |
| index     | Current index (optional)  |
| array     | Original array (optional) |

---

## Example 1

```javascript
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter((num) => num > 20);

console.log(result);
```

### Output

```javascript
[25, 30];
```

---

## Example 2

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);
```

Output

```javascript
[2, 4, 6];
```

---

## Example 3

```javascript
const names = ['Rahul', 'Amit', 'Swaraj'];

const result = names.filter((name) => name.length > 5);

console.log(result);
```

Output

```javascript
['Swaraj'];
```

---

## Important Points

✅ Returns a new array

✅ Original array remains unchanged

✅ Returns all matching elements

---

# find()

## Definition

`find()` returns the **first element** that satisfies the given condition.

If no element matches, it returns `undefined`.

---

## Syntax

```javascript
const result = array.find((element) => {
  return condition;
});
```

---

## Example

```javascript
const users = [
  { name: 'Rahul', age: 20 },
  { name: 'Amit', age: 25 },
  { name: 'Swaraj', age: 25 },
];

const result = users.find((user) => user.age === 25);

console.log(result);
```

Output

```javascript
{ name: "Amit", age: 25 }
```

---

## If no match

```javascript
const result = users.find((user) => user.age === 50);

console.log(result);
```

Output

```javascript
undefined;
```

---

## Important Points

✅ Returns only the first matching element

✅ Stops searching after first match

✅ Returns undefined if no match exists

---

# filter() vs find()

| filter()                      | find()                               |
| ----------------------------- | ------------------------------------ |
| Returns all matching elements | Returns first matching element       |
| Returns array                 | Returns single value/object          |
| Returns [] if nothing matches | Returns undefined if nothing matches |

---

# some()

## Definition

`some()` checks whether **at least one element** satisfies a condition.

Returns only:

- true
- false

---

## Syntax

```javascript
const result = array.some((element) => {
  return condition;
});
```

---

## Example

```javascript
const numbers = [1, 3, 5, 8];

const result = numbers.some((num) => num % 2 === 0);

console.log(result);
```

Output

```javascript
true;
```

---

## Example

```javascript
const numbers = [1, 3, 5];

const result = numbers.some((num) => num % 2 === 0);

console.log(result);
```

Output

```javascript
false;
```

---

## Important Points

✅ Returns Boolean

✅ Stops after first true

---

# every()

## Definition

`every()` checks whether **every element** satisfies the condition.

Returns only:

- true
- false

---

## Syntax

```javascript
const result = array.every((element) => {
  return condition;
});
```

---

## Example

```javascript
const numbers = [2, 4, 6, 8];

const result = numbers.every((num) => num % 2 === 0);

console.log(result);
```

Output

```javascript
true;
```

---

## Example

```javascript
const numbers = [2, 4, 5];

const result = numbers.every((num) => num % 2 === 0);

console.log(result);
```

Output

```javascript
false;
```

---

## Important Points

✅ Returns Boolean

✅ Stops after first false

---

# some() vs every()

| some()                            | every()                    |
| --------------------------------- | -------------------------- |
| At least one element must satisfy | Every element must satisfy |
| Stops after first true            | Stops after first false    |
| Returns Boolean                   | Returns Boolean            |

---

# Master Comparison Table

| Method    | Returns                | Purpose                |
| --------- | ---------------------- | ---------------------- |
| forEach() | undefined              | Perform an action      |
| map()     | New Array              | Transform data         |
| filter()  | New Array              | Keep matching elements |
| find()    | First matching element | Find one item          |
| some()    | Boolean                | At least one match?    |
| every()   | Boolean                | All match?             |

---

# Interview Questions

### What is filter()?

A non-mutating array method that returns a new array containing only the elements that satisfy a condition.

---

### Difference between filter() and find()

filter()

- Returns all matching elements
- Returns an array

find()

- Returns first matching element
- Returns one value or undefined

---

### Difference between some() and every()

some()

- At least one element satisfies the condition.

every()

- All elements must satisfy the condition.

---

# Best Practices

Use filter()

- Search results
- Active users
- Completed tasks

Use find()

- Get one object
- Find one user
- Find one product

Use some()

- Check permissions
- Validate conditions
- Detect duplicates

Use every()

- Form validation
- Verify all users are active
- Check all products are in stock

---

# Memory Tricks

filter()

> Keep matching elements.

find()

> Find the first one.

some()

> At least ONE.

every()

> EVERYONE.

---

# Quick Revision

forEach()

→ Perform an action

map()

→ Transform

filter()

→ Keep matching

find()

→ First matching

some()

→ One is enough

every()

→ Everyone must pass
