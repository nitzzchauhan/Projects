### 1. What is JavaScript?
JavaScript is a high-level, interpreted programming language primarily used for web development. It allows for the creation of dynamic content on web pages, such as interactive forms, animations, and user-driven behavior. It can run in the browser or on the server (via environments like Node.js). JavaScript is an essential part of the web's core technologies (HTML, CSS, and JS).

### 2. Explain the difference between `let`, `const`, and `var`.
- **`var`**: It has function scope or global scope if declared outside a function. Variables declared with `var` are hoisted and can be re-declared and updated.
  
- **`let`**: Introduced in ES6, it has block scope, meaning the variable is accessible only within the block in which it's declared. It is not hoisted like `var` and cannot be re-declared within the same scope, though it can be updated.
  
- **`const`**: Also block-scoped like `let`, but the value of a `const` variable cannot be reassigned. `const` is used for variables that should not change after being initialized.

### 3. What are JavaScript data types?
JavaScript has the following data types:
- **Primitive types**:
  - `String`: Represents text (e.g., "Hello").
  - `Number`: Represents numeric values (e.g., 42).
  - `Boolean`: Represents true or false values.
  - `Null`: Represents an intentional absence of any object value.
  - `Undefined`: Represents a variable that has been declared but not initialized.
  - `Symbol`: Represents unique values.
  - `BigInt`: Used for arbitrarily large integers.

- **Non-primitive type**:
  - `Object`: Used to store collections of data or more complex entities like arrays, functions, and objects.

### 4. What is `typeof` operator? Provide examples.
The `typeof` operator is used to check the type of a variable or value. It returns a string indicating the data type.

Examples:
```javascript
typeof 42;             // "number"
typeof "Hello";        // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object" (This is a known quirk in JavaScript)
typeof { name: "John" };// "object"
```

### 5. What is the difference between `==` and `===`?
- **`==` (Loose equality)**: Compares two values for equality, performing type conversion if necessary. For example, `5 == "5"` would return `true` because the string `"5"` is coerced into a number.
  
- **`===` (Strict equality)**: Compares both value and type. `5 === "5"` would return `false` because the types (number and string) are different, even though the values are equivalent.

### 6. How do you declare a function in JavaScript?
Functions in JavaScript can be declared in several ways:

- **Function declaration**:
  ```javascript
  function greet() {
    return "Hello!";
  }
  ```

- **Function expression**:
  ```javascript
  const greet = function() {
    return "Hello!";
  };
  ```

- **Arrow function (introduced in ES6)**:
  ```javascript
  const greet = () => "Hello!";
  ```

### 7. Explain the concept of hoisting in JavaScript.
Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope before execution. This means you can use variables and functions before they are declared.

- Function declarations are hoisted entirely (you can call the function before it's written).
- Variables declared with `var` are hoisted but not initialized (they are undefined until assigned a value).
- `let` and `const` are hoisted but are not initialized, so using them before the declaration results in a `ReferenceError`.

Example:
```javascript
console.log(greet()); // Outputs "Hello"
function greet() {
  return "Hello";
}
```

### 8. What are JavaScript closures? Provide an example.
A **closure** is a function that retains access to variables from its lexical scope, even after the outer function has finished executing.

Example:
```javascript
function outer() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

The inner `increment` function retains access to the `count` variable even after the `outer` function has finished.

### 9. What is an IIFE (Immediately Invoked Function Expression)?
An **IIFE** is a function that is defined and immediately invoked. It helps avoid polluting the global scope by keeping variables inside the function's local scope.

Example:
```javascript
(function() {
  console.log("This function runs immediately!");
})();
```

### 10. Explain the difference between `null` and `undefined`.
- **`undefined`**: A variable is `undefined` if it has been declared but not assigned a value.
  
- **`null`**: A value explicitly assigned to indicate the intentional absence of any object or value.

Example:
```javascript
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

### 11. What are template literals in JavaScript?
**Template literals** (introduced in ES6) are string literals that allow embedded expressions and multi-line strings. They use backticks (`` ` ``) instead of quotes.

Example:
```javascript
let name = "John";
let message = `Hello, ${name}!`;
console.log(message); // Outputs: "Hello, John!"
```

### 12. What is the difference between `map` and `forEach`?
- **`forEach`**: Iterates over an array and executes a function for each element. It does not return anything.
  
- **`map`**: Iterates over an array and creates a new array based on the result of the provided function.

Example:
```javascript
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // Logs: 1, 2, 3
let squares = numbers.map(num => num * num); // Returns: [1, 4, 9]
```

### 13. What are arrow functions?
Arrow functions are a concise way to write functions introduced in ES6. They do not have their own `this` context, making them useful for callbacks and non-method functions.

Example:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 14. Explain the difference between `call`, `apply`, and `bind`.
- **`call`**: Invokes a function with a given `this` value and arguments passed individually.
  
- **`apply`**: Similar to `call`, but arguments are passed as an array.
  
- **`bind`**: Returns a new function with the `this` value set, which can be invoked later.

Example:
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
greet.call(person); // "Hello, John"
greet.apply(person); // "Hello, John"
const boundGreet = greet.bind(person);
boundGreet(); // "Hello, John"
```

### 15. What is event delegation?
**Event delegation** is a technique where a single event listener is added to a parent element, and events from child elements are captured by leveraging event bubbling. It is used to efficiently handle events for dynamic content.

Example:
```javascript
document.querySelector('#parent').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});
```

### 16. What is a promise in JavaScript?
A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. It has three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

Example:
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then(result => console.log(result)); // "Success!" after 1 second
```

### 17. Explain the concept of `async/await`.
`async/await` is a way to write asynchronous code in a synchronous-looking manner. An `async` function returns a promise, and `await` is used to wait for the promise to resolve.

Example:
```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}
fetchData();
```

### 18. What is JSON? How do you parse and stringify JSON in JavaScript?
**JSON** (JavaScript Object Notation) is a lightweight data format used for data interchange. It represents data as key-value pairs similar to JavaScript objects.

- **Parsing JSON**: `JSON.parse()` converts a JSON string into a JavaScript object.
- **Stringifying JSON**: `JSON.stringify()` converts a JavaScript object into a JSON string.

Example:
```javascript
let jsonString = '{"name": "John", "age": 30}';
let obj = JSON.parse(jsonString);
console.log(obj.name

); // "John"
let newJson = JSON.stringify(obj);
console.log(newJson); // '{"name":"John","age":30}'
```

### 19. What are ES6 modules?
ES6 modules allow JavaScript to split code into separate files that can import and export functionalities like variables, functions, or objects.

- **Export**:
  ```javascript
  export const name = 'John';
  export function greet() {
    return "Hello!";
  }
  ```

- **Import**:
  ```javascript
  import { name, greet } from './module.js';
  ```

### 20. How can you create an object in JavaScript?
Objects can be created using object literals, constructors, or the `Object.create()` method.

- **Object literal**:
  ```javascript
  const person = { name: "John", age: 30 };
  ```

- **Constructor function**:
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const john = new Person("John", 30);
  ```

- **`Object.create()`**:
  ```javascript
  const personPrototype = { greet() { return "Hello"; } };
  const john = Object.create(personPrototype);
  ```

### 21. Explain the difference between `var`, `let`, and `const` scope.
- **`var`**: Function-scoped, meaning it's accessible within the function where it's declared, or globally if outside a function.
  
- **`let` and `const`**: Block-scoped, meaning they are only accessible within the block `{}` in which they are declared.

Example:
```javascript
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10 (accessible)
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
```

### 22. What is the purpose of the `this` keyword in JavaScript?
The `this` keyword refers to the object that is executing the current function. Its value is determined by how the function is called.

- In a method, `this` refers to the object the method belongs to.
- In a regular function, `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode).

Example:
```javascript
const person = {
  name: "John",
  greet() {
    console.log(this.name); // "John"
  }
};
person.greet();
```

### 23. What is the difference between synchronous and asynchronous code?
- **Synchronous code**: Executes one task at a time, in sequence. The next line of code waits for the previous one to complete.
  
- **Asynchronous code**: Allows other tasks to be executed while waiting for long-running operations to complete, improving performance and responsiveness.

Example:
```javascript
console.log('Start');
setTimeout(() => console.log('Async operation'), 1000);
console.log('End');
```
Output:
```
Start
End
Async operation (after 1 second)
```

### 24. What is the spread operator in JavaScript? Provide an example.
The **spread operator** (`...`) allows an iterable (like an array or object) to be expanded in places where multiple elements or variables are expected.

Example:
```javascript
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const person = { name: "John", age: 30 };
const personCopy = { ...person, location: "NY" }; // { name: "John", age: 30, location: "NY" }
```

### 25. How do you handle exceptions in JavaScript?
Exceptions in JavaScript are handled using `try...catch` blocks. Optionally, a `finally` block can be added to execute code after the try and catch, regardless of whether an error was thrown.

Example:
```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:", error);
} finally {
  console.log("Cleanup tasks");
}
```