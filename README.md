# JavaScript Fundamentals – Milestone Project

## 📌 Overview

This project focuses on mastering the **fundamentals of JavaScript**, one of the most powerful and widely-used programming languages, especially in web development.

You will use JavaScript for two main purposes:

1. **Scripting** – like Python scripts but in JavaScript.
2. **Web Front-End** – enhancing user interaction in the browser.

---

## 📚 Resources to Study

Make sure to read or watch the following:

- [The best free learning resource for JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Writing JavaScript Code
- Variables
- Data Types
- Operators & Operator Precedence
- Controlling Program Flow (if/else, loops, etc.)
- Functions
- Objects and Arrays
- Intrinsic Objects (like `Math`, `Date`, etc.)
- Module Patterns
- `var`, `let`, and `const`
- Modern JavaScript Concepts
- [JavaScript Tutorial](https://javascript.info)

---

## 🎯 Learning Objectives

By the end of this milestone, you should be able to explain and demonstrate the following **without Googling**:

### ✅ General JavaScript Knowledge

- Why JavaScript is an amazing language
- How to run a JavaScript script (in browser or with Node.js)
- How to use **comments** in code

### ✅ Variables & Constants

- How to create and assign variables using `var`, `let`, and `const`
- Understand the **differences** between `var`, `let`, and `const`
- How to assign and change variable values

### ✅ Data Types

- Identify and use all **data types**:
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Object
  - Array

### ✅ Operators

- Use of:
  - Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`
  - Comparison operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
  - Logical operators: `&&`, `||`, `!`
- Understand **operator precedence**

### ✅ Control Flow

- How to use:
  - `if`, `else if`, `else`
  - `switch` statements
  - `while` and `for` loops
  - `break` and `continue`

### ✅ Functions

- What is a function and how to define it
- Function parameters and return values
- What happens when a function does **not** have a `return` statement
- Function scope and variable scope

### ✅ Objects & Arrays

- How to create and manipulate:
  - **Objects** (key-value pairs)
  - **Arrays** (indexed lists)
- Access, add, update, and delete data from arrays and objects

### ✅ Additional Concepts

- How to use **intrinsic objects** like:
  - `Math`
  - `Date`
- Understand and apply **module patterns**
- How to **import a JavaScript file** into an HTML file or another JS module

---

## 🛠️ Example Code Snippets

```js
// Declare variables
let name = "Oussama";
const city = "Casablanca";
let undefinedVariable;
let nullVariable = null;

// Check types
console.log(typeof name);              // string
console.log(typeof undefinedVariable); // undefined
console.log(typeof nullVariable);      // object (quirk in JS)

// Arrays & Objects
const hobbies = ["reading", "coding", "traveling"];
const address = {
  city: "Casablanca",
  country: "Morocco"
};

// Function
function greet(userName) {
  return "Hello, " + userName + "!";
}

// Event Listener
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
