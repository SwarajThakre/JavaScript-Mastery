# 📘 JavaScript Objects - Notes

## What is an Object?

An **Object** is a collection of related data stored in the form of **key-value pairs**.

Instead of storing related values in separate variables, we group them together inside an object.

### Example

```javascript
const person = {
  name: 'Swaraj',
  age: 24,
  city: 'Virar',
};
```

Here,

- `name`, `age`, and `city` are **keys (properties)**.
- `"Swaraj"`, `24`, and `"Virar"` are **values**.

---

# Why Do We Use Objects?

Without an object:

```javascript
const name = 'Swaraj';
const age = 24;
const city = 'Virar';
```

With an object:

```javascript
const person = {
  name: 'Swaraj',
  age: 24,
  city: 'Virar',
};
```

Objects help us organize related data, making code cleaner and easier to manage.

---

# Accessing Object Properties

## 1. Dot Notation

Used when the property name is known.

```javascript
console.log(person.name);
console.log(person.age);
```

Output

```
Swaraj
24
```

---

## 2. Bracket Notation

Used when:

- Property names contain spaces.
- Property names are stored in variables.
- Property names are generated dynamically.

```javascript
console.log(person['name']);
```

Example:

```javascript
const key = 'city';

console.log(person[key]);
```

Output

```
Virar
```

---

# Adding Properties

New properties can be added at any time.

```javascript
person.country = 'India';
```

Result

```javascript
{
    name: "Swaraj",
    age: 24,
    city: "Virar",
    country: "India"
}
```

---

# Updating Properties

Existing properties can be modified.

```javascript
person.age = 25;
```

---

# Deleting Properties

Properties can also be removed.

```javascript
delete person.city;
```

---

# Methods

A **Method** is simply a function stored inside an object.

```javascript
const person = {
  name: 'Swaraj',

  greet() {
    console.log('Hello');
  },
};

person.greet();
```

Output

```
Hello
```

---

# Object References

Objects are **Reference Types**.

Example:

```javascript
const person = {
  name: 'Swaraj',
};

const user = person;

user.name = 'Rahul';

console.log(person.name);
```

Output

```
Rahul
```

Both variables point to the same object in memory.

Changing one affects the other.

---

# const with Objects

`const` prevents **reassignment**, not **modification**.

Allowed

```javascript
const person = {
  age: 24,
};

person.age = 25;
```

Not Allowed

```javascript
person = {};
```

Reason:

The object reference cannot change, but its properties can.

---

# Object Destructuring

Object Destructuring extracts properties into variables.

Without Destructuring

```javascript
const name = person.name;
const age = person.age;
```

With Destructuring

```javascript
const { name, age } = person;
```

JavaScript internally treats it like:

```javascript
const name = person.name;
const age = person.age;
```

### Rename Variables

```javascript
const { name: fullName } = person;
```

Now,

`fullName` stores the value of `person.name`.

---

### Default Values

```javascript
const { city = 'Mumbai' } = person;
```

If `city` doesn't exist, JavaScript uses `"Mumbai"`.

---

# Spread Operator (...)

The Spread Operator copies properties into a new object.

```javascript
const copy = {
  ...person,
};
```

Equivalent to:

```javascript
const copy = {
  name: person.name,
  age: person.age,
};
```

It is commonly used to:

- Copy objects
- Update objects
- Merge objects

Example

```javascript
const updated = {
  ...person,
  city: 'Mumbai',
};
```

---

# Rest Operator (...)

The Rest Operator collects the remaining properties into a new object.

```javascript
const { name, ...rest } = person;
```

If

```javascript
const person = {
  name: 'Swaraj',
  age: 24,
  city: 'Virar',
};
```

Then

```javascript
console.log(rest);
```

Output

```javascript
{
    age: 24,
    city: "Virar"
}
```

---

# Spread vs Rest

| Spread                      | Rest                                     |
| --------------------------- | ---------------------------------------- |
| Copies properties           | Collects remaining properties            |
| Used while creating objects | Used during destructuring                |
| Creates a shallow copy      | Creates an object of leftover properties |

---

# Optional Chaining (?.)

Optional Chaining safely accesses nested properties.

Without Optional Chaining

```javascript
user.address.city;
```

If `address` doesn't exist,

JavaScript throws:

```
TypeError
```

Using Optional Chaining

```javascript
user.address?.city;
```

If `address` doesn't exist,

Output

```
undefined
```

instead of an error.

This is widely used in React when working with API responses.

---

# Shallow Copy

A Shallow Copy creates a **new outer object**, but nested objects are still shared.

```javascript
const copy = {
  ...person,
};
```

If the object contains nested objects,

both copies point to the same nested object.

---

# Deep Copy

A Deep Copy creates a completely independent copy of the object, including all nested objects.

```javascript
const copy = structuredClone(person);
```

Now changes made to the copied object do not affect the original object.

---

# Shallow Copy vs Deep Copy

| Shallow Copy                 | Deep Copy                        |
| ---------------------------- | -------------------------------- |
| Copies only the first level  | Copies every level               |
| Nested objects are shared    | Nested objects are independent   |
| Spread Operator creates this | `structuredClone()` creates this |

---

# Interview Points

- Objects store data as key-value pairs.
- Objects are reference types.
- `const` prevents reassignment, not property modification.
- Destructuring extracts object properties into variables.
- Spread creates a shallow copy.
- Rest collects remaining properties.
- Optional Chaining prevents runtime errors.
- `structuredClone()` creates a deep copy.
