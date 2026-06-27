# 📚 JavaScript Objects

## What is an Object?

An object is a collection of related data stored as **key-value pairs**.

Example:

```javascript
const person = {
    name: "Swaraj",
    age: 24,
    city: "Virar"
};
```

Here,

* `name`, `age`, and `city` are **keys (properties)**.
* `"Swaraj"`, `24`, and `"Virar"` are **values**.

---

# Why Do We Need Objects?

Without objects:

```javascript
const name = "Swaraj";
const age = 24;
const city = "Virar";
```

With objects:

```javascript
const person = {
    name: "Swaraj",
    age: 24,
    city: "Virar"
};
```

Objects keep related information together, making code easier to read and maintain.

---

# Object Literal

The simplest way to create an object.

```javascript
const car = {
    brand: "BMW",
    model: "X5"
};
```

---

# Accessing Properties

## Dot Notation

```javascript
console.log(person.name);
console.log(person.age);
```

Output:

```
Swaraj
24
```

---

## Bracket Notation

```javascript
console.log(person["name"]);
```

Useful when:

* Property name is stored in a variable.
* Property contains spaces.
* Property is generated dynamically.

Example:

```javascript
const key = "name";

console.log(person[key]);
```

---

# Properties with Spaces

```javascript
const person = {
    "full name": "Swaraj"
};

console.log(person["full name"]);
```

Dot notation does not work with property names containing spaces.

---

# Adding Properties

```javascript
person.city = "Virar";
```

---

# Updating Properties

```javascript
person.age = 25;
```

---

# Deleting Properties

```javascript
delete person.age;
```

---

# Methods

A function inside an object is called a **method**.

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};
```

Calling the method:

```javascript
person.greet();
```

Output:

```
Hello
```

---

# Object References

Objects are **reference types**.

```javascript
const a = {
    name: "Swaraj"
};

const b = a;

b.name = "Rahul";
```

Both `a` and `b` point to the same object.

Output:

```javascript
console.log(a.name); // Rahul
```

---

# const with Objects

Allowed:

```javascript
const person = {
    age: 24
};

person.age = 25;
```

Not Allowed:

```javascript
person = {};
```

Reason:

`const` protects the **reference**, not the contents of the object.

---

# Key Takeaways

* Objects store data as key-value pairs.
* Dot notation is used for known property names.
* Bracket notation is used for dynamic property names or names with spaces.
* Methods are functions inside objects.
* Objects are reference types.
* `const` prevents reassignment, not property modification.
