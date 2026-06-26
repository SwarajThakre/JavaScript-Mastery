# 🎤 Day 4 - Interview Questions

## Basic Questions

### 1. What is Lexical Scope?

A function can access variables from the scope where it is defined.

---

### 2. What is Scope Chain?

JavaScript searches variables from the current scope to parent scopes until it finds the variable.

---

### 3. What is a Closure?

A closure is created when an inner function remembers variables from its outer scope even after the outer function has finished executing.

---

### 4. Why do we use Closures?

- Data Privacy
- Counters
- Event Listeners
- Callbacks
- React Hooks

---

### 5. Can a parent function access a child's variables?

No.

A child can access parent variables, but a parent cannot access variables declared inside its child.

---

### 6. What is Data Privacy?

Keeping variables inaccessible from outside the function by exposing only controlled methods.

---

### 7. Where are Closures used in React?

- `useState`
- `useEffect`
- Event handlers
- Async callbacks

---

### 8. Difference between Scope and Closure?

- Scope defines where variables are accessible.
- Closure allows a function to remember variables after the outer function has finished.
