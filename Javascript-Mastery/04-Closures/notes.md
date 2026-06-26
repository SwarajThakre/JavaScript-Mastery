# 📚 Day 4 - Closures

## What is Lexical Scope?

Lexical Scope means a function can access variables based on **where it is defined**, not where it is called.

JavaScript searches for variables in the following order:

1. Current Scope
2. Parent Scope
3. Global Scope

This searching mechanism is called the **Scope Chain**.

---

## Scope Chain Example

```javascript
let a = 10;

function first() {
  let b = 20;

  function second() {
    let c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  second();
}

first();
```

### Output

```
10
20
30
```

### Explanation

- `second()` first looks for variables inside itself.
- If not found, it searches `first()`.
- If still not found, it searches the Global Scope.

JavaScript always searches **upward**, never downward.

---

## Important Rule

```
Child → Parent ✅

Parent → Child ❌
```

A parent function **cannot** access variables declared inside its child function.

---

# What is a Closure?

## Interview Definition

A **Closure** is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

---

## Closure Example

```javascript
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
```

### Output

```
1
2
3
```

### Why?

Although `outer()` has finished execution, the returned function still remembers the variable `count`.

This behavior is called a **Closure**.

---

# Another Example

```javascript
function outer() {
  let message = 'Hello';

  return function () {
    console.log(message);
  };
}

const greet = outer();

greet();
```

### Output

```
Hello
```

The returned function remembers `message`.

---

# Data Privacy using Closures

Closures allow variables to remain private.

```javascript
function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },

    checkBalance() {
      console.log(balance);
    },
  };
}

const account = createBankAccount();

account.deposit(500);

account.checkBalance();
```

### Output

```
1500
```

Trying to access `balance` directly:

```javascript
console.log(balance);
```

Output:

```
ReferenceError
```

Because `balance` is private inside the closure.

---

# Real-world Uses of Closures

- Data Privacy
- Counters
- Event Listeners
- Timers (`setTimeout`, `setInterval`)
- Callbacks
- React Hooks (`useState`, `useEffect`)
- Module Pattern

---

# Key Takeaways

- JavaScript follows Lexical Scope.
- Variables are searched using the Scope Chain.
- Functions remember their outer variables.
- Closures preserve variables after execution.
- Closures are widely used in modern JavaScript and React.

---

# Interview Summary

### What is Lexical Scope?

A function can access variables from where it is defined.

---

### What is the Scope Chain?

JavaScript searches variables from the current scope to parent scopes until it finds them.

---

### What is a Closure?

A closure is an inner function that remembers variables from its outer scope even after the outer function has finished executing.

---

### Why are Closures useful?

They provide:

- Data Privacy
- State Persistence
- Encapsulation
- Callback support

---

## Status

- [x] Lexical Scope
- [x] Scope Chain
- [x] Closures
- [x] Data Privacy
- [x] Practical Examples
- [x] Interview Questions

**Day 4 Completed Successfully 🎉**
