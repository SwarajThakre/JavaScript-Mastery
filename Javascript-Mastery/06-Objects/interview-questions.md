# 🎤 JavaScript Objects - Interview Questions

## Beginner

### 1. What is an Object?

An object is a collection of key-value pairs used to store related data.

---

### 2. What is an Object Literal?

An object created using curly braces `{}`.

Example:

```javascript
const person = {
  name: 'Swaraj',
};
```

---

### 3. Difference between Dot and Bracket Notation?

**Dot Notation**

```javascript
person.name;
```

**Bracket Notation**

```javascript
person['name'];
```

Use bracket notation when:

- Property name is dynamic.
- Property name contains spaces.

---

### 4. What is a Method?

A function stored inside an object.

---

### 5. Can we add properties after creating an object?

Yes.

```javascript
person.city = 'Virar';
```

---

### 6. Can we delete properties?

Yes.

```javascript
delete person.city;
```

---

### 7. Why are Objects called Reference Types?

Variables store a reference (memory address) to the object, not a separate copy.

---

### 8. Does `const` make an object immutable?

No.

You can modify object properties.

You cannot reassign the object reference.

---

## Most Asked Interview Question

**What is the difference between these two?**

```javascript
const a = {
  name: 'Swaraj',
};

const b = a;
```

`b` does not create a new object.

Both variables point to the same object in memory.

---

## Interview Tip

Always explain **why** an output occurs, not just what the output is. Recruiters often value your reasoning more than memorizing answers.
