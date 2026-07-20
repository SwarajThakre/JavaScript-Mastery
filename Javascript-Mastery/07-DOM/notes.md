# DOM Introduction

## What is the DOM?

DOM stands for <Bold>Document Object Model</Bold>.

It is a tree-like representation of an HTML document created by the browser.

JavaScript uses the DOM to:

- Read elements
- Change text
- Change styles
- Create elements
- Delete elements
- Handle events

---

## Browser Workflow

HTML File
↓
Browser Parses HTML
↓
Creates DOM Tree
↓
JavaScript Manipulates DOM
↓
Interactive Web Page

---

## DOM Tree Example

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

DOM Tree

Document
└── html
└── body
├── h1
└── p

---

## window vs document

### window

Represents the entire browser window.

### document

Represents the loaded HTML document.

Structure:

window
│
├── document
├── alert()
├── console
└── setTimeout()

---

## Important Point

JavaScript does <Bold>not</Bold> directly modify the HTML file.
It modifies the <Bold>DOM</Bold> created by the browser.

---

## Interview Answer

<Bold>What is the DOM?</Bold>

The DOM is a tree-like representation of an HTML document created by the browser that allows JavaScript to access, modify, create, and delete HTML elements dynamically.

---

# DOM Element Selection

## Sample HTML

```html
<h1 id="title">Hello</h1>
<p class="text">HTML</p>
<p class="text">CSS</p>
<button id="btn">Click</button>
```

---

# getElementById()

Selects one element by ID.

```javascript
const heading = document.getElementById('title');
```

Returns: <Bold>One Element</Bold>

---

# getElementsByClassName()

Selects all elements with the same class.

```javascript
const items = document.getElementsByClassName('text');
```

Returns: <Bold>HTMLCollection</Bold>

---

# getElementsByTagName()

```javascript
const paragraphs = document.getElementsByTagName('p');
```

Returns: <Bold>HTMLCollection</Bold>

---

# querySelector()

Returns the <Bold>first matching element</Bold>.

```javascript
document.querySelector('#title');
document.querySelector('.text');
document.querySelector('button');
```

---

# querySelectorAll()

Returns <Bold>all matching elements</Bold>.

```javascript
const paragraphs = document.querySelectorAll('.text');
```

Returns: <Bold>NodeList</Bold>

---

# Accessing Elements from Collections

```javascript
paragraphs[0];
paragraphs[1];
```

---

# Comparison Table

| Method                   | Returns                |
| ------------------------ | ---------------------- |
| getElementById()         | One element            |
| getElementsByClassName() | HTMLCollection         |
| getElementsByTagName()   | HTMLCollection         |
| querySelector()          | First matching element |
| querySelectorAll()       | NodeList               |

---

# Modern Recommendation

Most modern projects prefer:

```javascript
document.querySelector();
document.querySelectorAll();
```

because they support CSS selector syntax and are more flexible.

---

# DOM Content Manipulation

## Sample HTML

```html
<h1 id="heading">Hello</h1>
<p id="para">JavaScript</p>
```

---

# textContent

Gets or sets <Bold>all text</Bold>, including hidden text.

```javascript
document.getElementById('heading').textContent = 'Welcome';
```

---

# innerText

Gets or sets <Bold>only visible text</Bold>.

```javascript
document.getElementById('heading').innerText = 'Frontend Developer';
```

---

# innerHTML

Gets or sets <Bold>HTML content</Bold>.

```javascript
document.getElementById('para').innerHTML = '<b>React</b>';
```

Output:

<Bold>React</Bold>

---

# Difference Example

```javascript
element.textContent = '<b>Hello</b>';
```

Output:

```
<b>Hello</b>
```

---

```javascript
element.innerHTML = '<b>Hello</b>';
```

Output:

<Bold>Hello</Bold>

---

# Comparison Table

| Property    | Reads Hidden Text | Creates HTML Elements |
| ----------- | ----------------- | --------------------- |
| textContent | Yes               | No                    |
| innerText   | No                | No                    |
| innerHTML   | Yes               | Yes                   |

---

# Best Practice

| Situation         | Use         |
| ----------------- | ----------- |
| Plain text        | textContent |
| Visible text only | innerText   |
| Insert HTML       | innerHTML   |

---

# Security Note

<Bold>textContent</Bold> is safer because it treats HTML tags as plain text.
<Bold>innerHTML</Bold> can insert HTML and should be used carefully with untrusted data.

---

# Memory Trick

textContent → All Text

innerText → Visible Text

innerHTML → HTML

---
