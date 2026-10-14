# JavaScript Document Object Model (DOM) Tutorial and Reference

A clear, beginner-friendly, and comprehensive guide to learning the Document Object Model (DOM) in JavaScript. This repository contains practical examples, structured exercises, and code patterns covering DOM selection, manipulation, and event handling.

---

## Table of Contents

- [Overview: What is the DOM?](#overview-what-is-the-dom)
- [The DOM Tree Architecture](#the-dom-tree-architecture)
- [DOM Selectors Comparison](#dom-selectors-comparison)
- [Detailed Selector Guides](#detailed-selector-guides)
  - [1. getElementById](#1-documentgetelementbyid)
  - [2. getElementsByClassName](#2-documentgetelementsbyclassname)
  - [3. getElementsByTagName](#3-documentgetelementsbytagname)
  - [4. getElementsByName](#4-documentgetelementsbyname)
  - [5. querySelector](#5-documentqueryselector)
  - [6. querySelectorAll](#6-documentqueryselectorall)
- [HTMLCollection vs NodeList](#htmlcollection-vs-nodelist)
- [Modifying Elements](#modifying-elements)
  - [Changing Content: textContent vs innerText vs innerHTML](#changing-content-textcontent-vs-innertext-vs-innerhtml)
  - [Modifying Styles](#modifying-styles)
  - [Form Inputs and Values](#form-inputs-and-values)
- [Handling Events](#handling-events)
- [Repository Project Structure](#repository-project-structure)
- [Hands-on Practice and Exercises](#hands-on-practice-and-exercises)
- [Quick Reference Cheat Sheet](#quick-reference-cheat-sheet)

---

## Overview: What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. When a web page loads, the browser parses the HTML document and creates an object-oriented representation of it known as the DOM tree.

With JavaScript, the DOM enables developers to:
- Read and update text or HTML content dynamically.
- Change element CSS styles and inline attributes.
- Add, remove, or reorder elements on the page.
- Listen and respond to user interactions (clicks, inputs, submissions, key presses).

```
Window (Global Browser Object)
  └── document (The DOM entry point)
        └── <html> (Root element)
              ├── <head>
              │     ├── <title>
              │     └── <link>
              └── <body>
                    ├── <header>
                    ├── <main>
                    │     ├── <h1>
                    │     └── <p>
                    └── <button>
```

---

## The DOM Tree Architecture

In the DOM, every piece of an HTML document is represented as a **Node**:
- **Document Node**: The top-level root object (`document`).
- **Element Node**: HTML tags like `<div>`, `<p>`, `<h1>`, `<button>`.
- **Text Node**: The textual content inside an element.
- **Attribute Node**: Attributes such as `class="course"`, `id="title"`, or `type="radio"`.

---

## DOM Selectors Comparison

| Method | Syntax | Return Type | Live or Static | Description |
| :--- | :--- | :--- | :--- | :--- |
| `getElementById` | `document.getElementById('id')` | `Element` or `null` | N/A | Finds the single element with the specified ID. |
| `getElementsByClassName` | `document.getElementsByClassName('class')` | `HTMLCollection` | Live | Finds all elements containing the given class name. |
| `getElementsByTagName` | `document.getElementsByTagName('tag')` | `HTMLCollection` | Live | Finds all elements matching the given HTML tag name. |
| `getElementsByName` | `document.getElementsByName('name')` | `NodeList` | Live | Finds all elements matching the given `name` attribute. |
| `querySelector` | `document.querySelector('selector')` | `Element` or `null` | Static | Returns the first element matching a standard CSS selector. |
| `querySelectorAll` | `document.querySelectorAll('selector')` | `NodeList` | Static | Returns all elements matching a standard CSS selector. |

---

## Detailed Selector Guides

### 1. document.getElementById()

Selects a single element by its unique `id` attribute. Returns `null` if no match is found.

#### Example:
```html
<h1 id="title">Hello DOM</h1>
<button id="changeBtn">Change Text</button>
```

```javascript
// Select elements
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

// Event listener to change text
changeBtn.addEventListener("click", function () {
  title.textContent = "JavaScript DOM Changed";
});
```

#### Key Characteristics:
- Fastest DOM selection method because IDs are unique in valid HTML.
- Always returns a single element object (never a list/array).

---

### 2. document.getElementsByClassName()

Selects all elements that possess a specific class name. Returns a **live `HTMLCollection`**.

#### Example:
```html
<ul>
  <li class="course">HTML</li>
  <li class="course">CSS</li>
  <li class="course">JavaScript</li>
  <li class="course">React JS</li>
</ul>
<button id="styleBtn">Highlight</button>
```

```javascript
// Select all elements with class="course"
const courses = document.getElementsByClassName("course");

// Access elements by index
courses[0].textContent = "HTML5";

// Iterate over HTMLCollection using for...of
const styleBtn = document.getElementById("styleBtn");
styleBtn.addEventListener("click", function () {
  for (let c of courses) {
    c.style.backgroundColor = "lightblue";
    c.style.fontSize = "20px";
  }
});
```

#### Key Characteristics:
- Does not require a dot prefix (`.`): pass `"course"`, not `".course"`.
- Returns an `HTMLCollection`. It does not support `.forEach()` directly unless converted to an array.

---

### 3. document.getElementsByTagName()

Selects all elements in the document that have a specified HTML tag name (e.g., `p`, `div`, `li`). Returns a **live `HTMLCollection`**.

#### Example:
```html
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
<button id="showBtn">Show Text</button>
```

```javascript
// Select all paragraph tags
const paragraphs = document.getElementsByTagName("p");

// Check count
console.log("Total paragraphs:", paragraphs.length);

// Iterate through elements
const showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", function () {
  for (let p of paragraphs) {
    console.log(p.textContent);
  }
});
```

#### Key Characteristics:
- Useful for batch styling or reading text across repeated elements.
- Case-insensitive for standard HTML elements.

---

### 4. document.getElementsByName()

Selects all elements with a given `name` attribute. Commonly used for HTML form controls such as radio buttons and checkboxes. Returns a **live `NodeList`**.

#### Example:
```html
<label>
  <input type="radio" name="language" value="JavaScript"> JavaScript
</label>
<label>
  <input type="radio" name="language" value="Python"> Python
</label>
<button name="btnSubmit">Submit</button>
<div name="output"></div>
```

```javascript
const btn = document.getElementsByName("btnSubmit")[0];
const output = document.getElementsByName("output")[0];
const languages = document.getElementsByName("language");

btn.addEventListener("click", () => {
  let selected = false;

  // NodeList supports forEach natively
  languages.forEach((item) => {
    if (item.checked) {
      selected = true;
      output.innerText = `You selected: ${item.value}`;
    }
  });

  if (!selected) {
    output.innerText = "Please select a programming language.";
  }
});
```

#### Key Characteristics:
- Accesses elements using their `name="..."` attribute.
- Built-in `.forEach()` loop support on modern browsers.

---

### 5. document.querySelector()

Uses standard **CSS Selector syntax** to find the **first** element that matches the query.

#### Selectors Syntax Reference:
- By ID: `document.querySelector("#studentName")`
- By Class: `document.querySelector(".desc")`
- By Tag: `document.querySelector("p")`
- By Attribute: `document.querySelector('input[type="text"]')`
- Universal: `document.querySelector("*")`

#### Example:
```javascript
const studentName = document.querySelector("#studentName");
const desc = document.querySelector(".desc");
const nameInput = document.querySelector("#nameInput");
const submitBtn = document.querySelector("#changeNameBtn");

submitBtn.addEventListener("click", () => {
  if (nameInput.value.trim() !== "") {
    studentName.textContent = nameInput.value.trim();
  }
});
```

#### Key Characteristics:
- Very flexible: accepts any valid CSS selector string.
- Returns only the first matching element, or `null` if none match.

---

### 6. document.querySelectorAll()

Uses CSS selector syntax to return **all** matching elements as a **static `NodeList`**.

#### Example:
```javascript
// Select all paragraphs
const paragraphs = document.querySelectorAll("p");

// Direct forEach iteration
paragraphs.forEach((p, index) => {
  console.log(`Paragraph ${index + 1}:`, p.textContent);
});

// Select by compound CSS selectors
const activeCards = document.querySelectorAll(".card.active > h3");
```

#### Key Characteristics:
- Returns a static `NodeList` (changes to the DOM afterwards do not alter this collection).
- Direct support for `.forEach()`.

---

## HTMLCollection vs NodeList

Understanding the difference between an `HTMLCollection` and a `NodeList` is critical for working with the DOM:

| Feature | HTMLCollection | NodeList |
| :--- | :--- | :--- |
| **Returned By** | `getElementsByClassName`, `getElementsByTagName` | `querySelectorAll`, `getElementsByName`, `childNodes` |
| **Content** | Only Element nodes | Element nodes, text nodes, comment nodes |
| **Liveness** | Live (updates automatically if DOM changes) | Static (for `querySelectorAll`) or Live (for `getElementsByName`) |
| **Built-in `forEach`** | No | Yes (in modern browsers) |
| **Looping Approaches** | `for...of`, or convert via `Array.from()` | `for...of`, `.forEach()`, or `Array.from()` |

#### Converting an HTMLCollection to an Array:
```javascript
const items = document.getElementsByClassName("course");

// Method 1: Array.from()
const itemsArray = Array.from(items);
itemsArray.forEach(item => console.log(item.textContent));

// Method 2: Spread operator
[...items].forEach(item => {
  item.style.color = "blue";
});
```

---

## Modifying Elements

### Changing Content: textContent vs innerText vs innerHTML

```javascript
const el = document.getElementById("demo");

// 1. textContent: Returns all raw text, including hidden elements. Fast and secure.
el.textContent = "Plain text content";

// 2. innerText: Takes styling into account (ignores text hidden with display:none).
el.innerText = "Visible text only";

// 3. innerHTML: Parses and renders HTML tags inside the element.
// Note: Never use innerHTML with untrusted user input to avoid XSS vulnerabilities.
el.innerHTML = "<strong>Bold Text</strong> with a <span class='badge'>Badge</span>";
```

### Modifying Styles

Elements have a `style` property allowing direct manipulation of inline CSS. Use camelCase for CSS properties with hyphens:

```javascript
const heading = document.getElementById("title");

// Setting CSS properties
heading.style.color = "#ff7070";
heading.style.backgroundColor = "lightgray";
heading.style.fontSize = "24px";
heading.style.fontWeight = "bold";

// Clearing inline styles
heading.style.color = "";
heading.style.backgroundColor = "";
```

### Form Inputs and Values

For form elements (`<input>`, `<textarea>`, `<select>`), use the `.value` property instead of `.textContent`:

```javascript
const input = document.querySelector("#nameInput");

// Read value (trim leading/trailing whitespace)
const currentText = input.value.trim();

// Clear input field
input.value = "";

// Checkbox and Radio controls
const checkbox = document.querySelector("#agreeCheckbox");
if (checkbox.checked) {
  console.log("User accepted terms");
}
```

---

## Handling Events

Use `addEventListener` to bind event listeners to DOM elements:

```javascript
const button = document.getElementById("myButton");

// Syntax: element.addEventListener(eventType, handlerFunction)
button.addEventListener("click", function (event) {
  console.log("Button clicked!");
  console.log("Event target:", event.target);
});
```

### Common Event Types:
- `click`: Triggers when an element is clicked.
- `input`: Triggers immediately whenever an `<input>` or `<textarea>` value changes.
- `change`: Triggers when a form control value is committed (e.g. checkbox toggled, dropdown changed).
- `submit`: Triggers when a form is submitted.
- `keydown` / `keyup`: Triggers when a keyboard key is pressed or released.

---

## Repository Project Structure

```
DOM/
├── README.md                     # Comprehensive DOM lesson and reference
├── getElementById/               # Lesson 1: Selecting elements by unique ID
│   ├── index.html
│   ├── style.css
│   └── main.js
├── getElementByClassName/        # Lesson 2: Selecting elements by class name
│   ├── index.html
│   ├── style.css
│   └── app.js
├── getElementByTagName/          # Lesson 3: Selecting elements by HTML tag
│   ├── index.html
│   ├── style.css
│   └── app.js
├── getElementByName/             # Lesson 4: Selecting form elements by name attribute
│   ├── index.html
│   ├── style.css
│   └── app.js
├── querySelector/                # Lesson 5: Modern CSS selectors in DOM
│   ├── index.html
│   ├── style.css
│   └── app.js
└── Exercise/                     # Hands-on projects and exercises
    └── querySelector/            # Student card editor with visibility & color toggles
        ├── index.html
        ├── style.css
        └── app.js
```

---

## Hands-on Practice and Exercises

### Exercise 1: Student Profile Card (`Exercise/querySelector/`)

This project combines multiple DOM concepts:
1. **Selecting Elements**: Grabbing inputs, display tags, and buttons using `document.querySelector`.
2. **Text Updates**: Updating student name dynamically with user input (`input.value.trim()`).
3. **Style Modifications**: Modifying font color and background dynamically.
4. **Visibility Toggling**: Showing and hiding elements conditionally via `display = "none"` and `display = "block"`.
5. **Form Reset**: Clearing inputs and reverting styled elements back to default values.

#### How to run any lesson or exercise:
1. Open the folder of any lesson (e.g., `getElementById/` or `Exercise/querySelector/`).
2. Double-click the `index.html` file to launch it in your default browser, or use the VS Code Live Server extension.
3. Open Developer Tools (`F12` or `Right-Click -> Inspect -> Console`) to observe console outputs and DOM interactions in real-time.

---

## Quick Reference Cheat Sheet

```javascript
// 1. SELECTING
const byId    = document.getElementById("header");
const byClass = document.getElementsByClassName("item"); // HTMLCollection
const byTag   = document.getElementsByTagName("p");      // HTMLCollection
const byName  = document.getElementsByName("status");    // NodeList
const first   = document.querySelector(".container p");  // First matching Element
const all     = document.querySelectorAll(".container p"); // Static NodeList

// 2. CONTENT
element.textContent = "Safe text string";
element.innerHTML   = "<span>HTML snippet</span>";
input.value         = "Input form value";

// 3. STYLES
element.style.color           = "crimson";
element.style.backgroundColor = "#fafafa";
element.style.display         = "none"; // Hide
element.style.display         = "block"; // Show

// 4. CLASSES
element.classList.add("highlight");
element.classList.remove("hidden");
element.classList.toggle("active");
element.classList.contains("active");

// 5. ATTRIBUTES
element.setAttribute("data-id", "123");
const attrValue = element.getAttribute("data-id");
element.removeAttribute("disabled");

// 6. EVENTS
element.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked:", e.target);
});
```

---

## Author & License

Maintained for JavaScript learners and developers. Feel free to use and expand these examples in your learning journey.
