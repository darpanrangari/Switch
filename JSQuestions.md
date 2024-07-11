JavaScript Questions


* Explain event delegation.
  Event delegation is a technique in which you leverage event bubbling to handle events at a higher level in the DOM than the element on which the event originated. This approach is useful for managing events for dynamically added elements without attaching event handlers to each new element.

* Explain how `this` works in JavaScript.
  `this` refers to the object that is currently executing the code. In a method, `this` refers to the object owning the method. In a function, `this` depends on how the function is called.

  * Can you give an example of one of the ways that working with `this` has changed in ES6?
    In ES6, arrow functions do not have their own `this`. Instead, `this` is lexically inherited from the enclosing scope, which can help avoid issues where the context of `this` changes unexpectedly.

* Explain how prototypal inheritance works.
  Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. Each object has a prototype property, which is a reference to another object, and it can access the properties and methods defined on its prototype.

* What is the difference between a variable that is: `null`, `undefined` or undeclared?
  * `null` is an assignment value that represents no value.
  * `undefined` means a variable has been declared but has not yet been assigned a value.
  * An undeclared variable has not been declared in the program.
  
  * How would you go about checking for any of these states?
    Use `typeof` for undeclared variables, strict equality (`===`) for `null`, and loose equality (`==`) for `undefined`.

* What is a closure, and how/why would you use one?
  A closure is a function that retains access to its outer scope's variables even after the outer function has returned. Closures are useful for data privacy and creating function factories.

* What language constructions do you use for iterating over object properties and array items?
  For arrays, use `for`, `for...of`, `forEach`, `map`, `filter`, `reduce`. For objects, use `for...in`, `Object.keys`, `Object.values`, `Object.entries`.

* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
  `forEach` executes a provided function once for each array element but does not return a new array. `map` executes a provided function once for each array element and returns a new array of results. Use `forEach` for side effects, `map` for transforming data.

  * Сan you describe other popular methods for iterating over arrays?
    `filter`, `reduce`, `some`, `every`, `find`, `findIndex`.

* What is a typical use case for anonymous functions?
  Anonymous functions are commonly used in callbacks, event handlers, and IIFEs.

* What is the difference between host objects and native objects?
  Native objects are defined by the ECMAScript specification (e.g., `Array`, `Object`, `Function`). Host objects are provided by the environment (e.g., `window`, `document` in browsers).

* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
  `function Person(){}` declares a function. `var person = Person()` calls `Person` as a regular function. `var person = new Person()` creates an instance of `Person` using the constructor function.

* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
  `function foo() {}` is a function declaration, which is hoisted. `var foo = function() {}` is a function expression assigned to a variable, which is not hoisted.

* Can you explain what `Function.call` and `Function.apply` do? What is the notable difference between the two?
  `call` and `apply` invoke a function with a given `this` value and arguments. `call` accepts arguments individually, while `apply` accepts them as an array.

* Explain `Function.prototype.bind`.
  `bind` creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

* What is the difference between feature detection, feature inference, and using the UA string?
  * Feature detection checks if a feature is available in the current environment.
  * Feature inference assumes a feature based on the presence of another feature.
  * Using the UA string involves checking the user agent string to infer browser capabilities, which is less reliable.

* Explain "hoisting".
  Hoisting is JavaScript's behavior of moving declarations (functions and variables) to the top of their containing scope during the compilation phase.

* What is type coercion? What are common pitfalls of relying on type coercion in JavaScript code?
  Type coercion is the automatic or implicit conversion of values from one type to another. Pitfalls include unexpected behavior and bugs due to implicit conversions, such as `==` vs `===`.

* Describe event bubbling.
  Event bubbling is a process where an event starts at the most specific element and then flows upward to the least specific ones.

* Describe event capturing.
  Event capturing is the opposite of bubbling, where the event starts from the least specific element and flows downward to the most specific one.

* What is the difference between an "attribute" and a "property"?
  Attributes are defined in HTML and represent the initial state. Properties are defined in DOM and can change dynamically.

* What are the pros and cons of extending built-in JavaScript objects?
  Pros: Can add custom methods to built-in objects. Cons: Can lead to conflicts, unpredictable behavior, and maintenance issues.

* What is the difference between `==` and `===`?
  `==` compares values with type coercion, `===` compares values without type coercion (strict equality).

* Explain the same-origin policy with regards to JavaScript.
  The same-origin policy restricts how documents and scripts loaded from one origin can interact with resources from another origin to prevent malicious attacks.

* Why is it called a Ternary operator, what does the word "Ternary" indicate?
  The ternary operator involves three operands: a condition, a value if true, and a value if false. "Ternary" means composed of three parts.

* What is strict mode? What are some of the advantages/disadvantages of using it?
  Strict mode is a way to opt into a restricted variant of JavaScript, catching common coding errors and preventing unsafe actions. Advantages: Easier debugging, improved performance. Disadvantages: Not all code is compatible, can break older code.

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
  Advantages: Better syntax, additional features, and tools. Disadvantages: Additional build step, debugging can be more complex.

* What tools and techniques do you use debugging JavaScript code?
  Developer tools in browsers, `console.log`, breakpoints, step-through debugging, code linters, and debuggers.

* Explain the difference between mutable and immutable objects.
  * Mutable objects can be modified after creation.
  * Immutable objects cannot be modified after creation.
  
  * What is an example of an immutable object in JavaScript?
    Strings and numbers are examples of immutable objects.

  * What are the pros and cons of immutability?
    Pros: Easier to reason about, avoids unintended side effects. Cons: Performance overhead, more complex state updates.

  * How can you achieve immutability in your own code?
    Use `Object.freeze`, immutable data structures, and libraries like Immutable.js.

* Explain the difference between synchronous and asynchronous functions.
  Synchronous functions block execution until they complete. Asynchronous functions allow other code to run while they complete, often using callbacks, promises, or async/await.

* What is event loop?
  The event loop is a mechanism that handles and executes multiple events and their associated callback functions in a non-blocking manner.

  * What is the difference between call stack and task queue?
    The call stack is where the browser keeps track of function calls. The task queue is where asynchronous tasks are queued for execution after the current stack clears.

* What are the differences between variables created using `let`, `var` or `const`?
  * `var` is function-scoped and can be redeclared.
  * `let` is block-scoped and cannot be redeclared.
  * `const` is block-scoped and cannot be reassigned.
  
  * Can you change a property of an object defined via `const`? How you can change this behavior?
    Yes, properties of a `const` object can be changed. To prevent this, use `Object.freeze`.

* What are the differences between ES6 class and ES5 function constructors?
  ES6 classes provide a cleaner, more concise syntax for creating constructors and managing inheritance. ES5 uses function constructors and prototype inheritance, which is more verbose.

* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
  Arrow functions are useful for shorter syntax and lexical `this` binding. They differ by not having their own `this`, `arguments`, `super`, or `new.target`.

* What advantage is there for using the arrow syntax for a method in a constructor?
  Arrow functions do not have their own `this` context, so they inherit `this` from their parent

 scope, avoiding common pitfalls with `this` in constructors.

* What is the definition of a higher-order function?
  A higher-order function is a function that takes another function as an argument, returns a function, or both.

* Can you give an example for destructuring an object or an array?
  ```javascript
  const {a, b} = {a: 1, b: 2};
  const [x, y] = [1, 2];
  ```

* Can you give an example of generating a string with ES6 Template Literals?
  ```javascript
  const name = 'John';
  const greeting = `Hello, ${name}!`;
  ```

* Can you give an example of a curry function and why this syntax offers an advantage?
  ```javascript
  const add = x => y => x + y;
  const addFive = add(5);
  console.log(addFive(10)); // 15
  ```

* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
  Spread syntax expands an array into individual elements. Rest syntax collects multiple elements into a single array.

* How can you share code between files?
  Use ES6 modules with `import` and `export`, or CommonJS modules with `require` and `module.exports`.

* Why you might want to create static class members?
  Static members are shared among all instances and can be accessed without creating an instance, useful for utility functions.

* What is the difference between `while` and `do-while` loops in JavaScript?
  `while` checks the condition before executing the loop body. `do-while` executes the loop body at least once before checking the condition.

* What is a promise? Where and how would you use promise?
  A promise represents an asynchronous operation's eventual completion (or failure). Use promises for asynchronous code, like fetching data.

* Discuss how you might use Object Oriented Programming principles when coding with JavaScript.
  Use classes for defining objects, inheritance for extending functionality, encapsulation for hiding internal state, and polymorphism for defining methods in derived classes.

* What is the difference between `event.target` and `event.currentTarget`?
  `event.target` refers to the element that triggered the event. `event.currentTarget` refers to the element to which the event handler is attached.

* What is the difference between `event.preventDefault()` and `event.stopPropagation()`?
  `event.preventDefault()` stops the default action of an element from happening. `event.stopPropagation()` stops the event from bubbling up the DOM tree.

## Coding questions
* Make this work:
```javascript
function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]
```

* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("fizzbuzz");
  else if (i % 3 === 0) console.log("fizz");
  else if (i % 5 === 0) console.log("buzz");
  else console.log(i);
}
```

* What will be returned by each of these?
```javascript
console.log("hello" || "world") // "hello"
console.log("foo" && "bar") // "bar"
```

* Write an immediately invoked function expression (IIFE)
```javascript
(function() {
  console.log("IIFE executed");
})();
```
