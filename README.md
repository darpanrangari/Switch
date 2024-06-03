### JavaScript Fundamentals

2. **What are closures in JavaScript, and how do they work? Provide an example.**
   - **Answer:** A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are created whenever a function is created within another function. They allow for encapsulation and data privacy.

     **Example:**
     ```javascript
     function outerFunction() {
       let outerVariable = 'I am from outer scope';

       function innerFunction() {
         console.log(outerVariable); // Has access to outerVariable
       }

       return innerFunction;
     }

     const closure = outerFunction();
     closure(); // Logs 'I am from outer scope'
     ```

3. **Describe the event loop and how it works. Why is it important in JavaScript?**
   - **Answer:** The event loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded. It works by continuously checking the call stack and the task queue. When the call stack is empty, the event loop picks the first task from the queue and pushes it to the call stack for execution. This process is crucial for handling asynchronous operations, such as I/O tasks, without freezing the main thread.

4. **Explain the concept of prototypal inheritance. How is it different from classical inheritance?**
   - **Answer:** Prototypal inheritance in JavaScript is a method by which objects inherit properties and methods from other objects. Instead of inheriting from classes (as in classical inheritance), JavaScript objects can directly inherit from other objects using the prototype chain.

     **Example:**
     ```javascript
     const parent = {
       greet() {
         console.log('Hello from parent');
       }
     };

     const child = Object.create(parent);
     child.greet(); // Logs 'Hello from parent'
     ```

     **Difference:** Classical inheritance involves classes inheriting from other classes, often forming a hierarchical structure. Prototypal inheritance is more flexible, allowing objects to inherit directly from other objects without the need for classes.

5. **What are Promises, and how do they compare to callbacks?**
   - **Answer:** Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more elegant way to handle asynchronous operations compared to callbacks, reducing callback hell and improving code readability.

     **Comparison:**
     - **Callbacks:** Functions passed as arguments to be executed once an asynchronous operation is complete. They can lead to nested structures and hard-to-read code.
     - **Promises:** Provide `.then()`, `.catch()`, and `.finally()` methods to handle asynchronous operations in a more linear and readable manner.

     **Example using Promise:**
     ```javascript
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
     ```

### Advanced Concepts

6. **How do you handle asynchronous operations in JavaScript? Discuss Promises, async/await, and other methods.**
   - **Answer:** Asynchronous operations in JavaScript can be handled using:
     - **Callbacks:** Functions that execute after an asynchronous operation completes.
     - **Promises:** Objects that represent the eventual result of an asynchronous operation, providing methods like `.then()`, `.catch()`, and `.finally()`.
     - **Async/Await:** Syntactic sugar built on top of Promises, making asynchronous code look synchronous. `async` functions return a Promise, and `await` pauses execution until the Promise is resolved or rejected.

     **Example using async/await:**
     ```javascript
     async function fetchData() {
       try {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         console.log(data);
       } catch (error) {
         console.error('Error:', error);
       }
     }

     fetchData();
     ```

7. **What are higher-order functions? Provide examples of their use in JavaScript.**
   - **Answer:** Higher-order functions are functions that take other functions as arguments, return functions, or both. They are a key aspect of functional programming.

     **Examples:**
     - **`map()`:** Applies a function to each element of an array and returns a new array.
       ```javascript
       const numbers = [1, 2, 3];
       const doubled = numbers.map(num => num * 2);
       console.log(doubled); // [2, 4, 6]
       ```

     - **`filter()`:** Returns a new array containing elements that pass a test.
       ```javascript
       const numbers = [1, 2, 3, 4];
       const evens = numbers.filter(num => num % 2 === 0);
       console.log(evens); // [2, 4]
       ```

8. **Explain the concept of currying in JavaScript. Why is it useful?**
   - **Answer:** Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument. It allows for partial application, where some arguments are fixed, and the rest are provided later.

     **Example:**
     ```javascript
     function add(a) {
       return function(b) {
         return a + b;
       };
     }

     const addFive = add(5);
     console.log(addFive(3)); // 8
     ```

     **Usefulness:** Currying enables function reuse and modular code, making it easier to create specific functions from generic ones.

9. **Describe the module pattern in JavaScript. How does it compare to ES6 modules?**
   - **Answer:** The module pattern is a design pattern used to encapsulate private data and expose only the desired methods and properties. It often uses IIFEs (Immediately Invoked Function Expressions).

     **Example:**
     ```javascript
     const myModule = (function() {
       const privateVariable = 'I am private';

       function privateMethod() {
         console.log(privateVariable);
       }

       return {
         publicMethod: function() {
           privateMethod();
         }
       };
     })();

     myModule.publicMethod(); // Logs 'I am private'
     ```

     **ES6 Modules:** Introduced in ES6, providing a built-in module system with `import` and `export` statements, offering better syntax and static analysis.

     **Example:**
     ```javascript
     // myModule.js
     const privateVariable = 'I am private';

     function privateMethod() {
       console.log(privateVariable);
     }

     export function publicMethod() {
       privateMethod();
     }

     // main.js
     import { publicMethod } from './myModule.js';
     publicMethod(); // Logs 'I am private'
     ```

10. **What are generators, and how do they differ from regular functions? Provide a use case.**
    - **Answer:** Generators are functions that can pause and resume execution, maintaining their state between pauses. They are defined using the `function*` syntax and use the `yield` keyword to yield values.

      **Example:**
      ```javascript
      function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
      }

      const gen = generatorFunction();
      console.log(gen.next().value); // 1
      console.log(gen.next().value); // 2
      console.log(gen.next().value); // 3
      ```

      **Use Case:** Generators are useful for implementing iterators, handling asynchronous operations, and managing state in complex workflows.

### Performance and Optimization

11. **What are some techniques for optimizing JavaScript performance?**
    - **Answer:**
      - **Minimize DOM Manipulations:** Batch updates and use DocumentFragment.
      - **Debounce and Throttle:** Control the rate of function executions.
      - **Use Efficient Data Structures:** Prefer arrays and objects over complex structures.
      - **Lazy Loading:** Load resources only when needed.
      - **Memory Management:** Avoid memory leaks by properly clearing references.
      - **Optimize Loops:** Use efficient looping constructs and avoid unnecessary computations.

12. **How does garbage collection work in JavaScript? What are some best practices to ensure efficient memory management?**
    - **Answer:** Garbage collection in JavaScript automatically frees up memory by removing objects that are no longer reachable or used. The most common algorithm is Mark-and-Sweep, which marks objects reachable from the root and sweeps away the rest.

      **Best Practices:**
      - **Avoid Global Variables:** Minimize their usage to reduce memory leaks.
      - **Clear References:** Nullify references to objects when they are no longer needed.
      - **Use WeakMap and WeakSet:** For storing objects without preventing their garbage collection.
      - **Optimize Closures:** Ensure closures do not unnecessarily hold onto large objects.

13. **Explain the concept of debouncing and throttling. When would you use each?**
    - **Answer:**
      - **Debouncing:** Ensures a function is only called once after a specified delay. Useful for events that trigger frequently, like window resizing or keypress events.
        ```javascript
        function debounce(func, delay) {
          let timeout;
          return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
          };
        }
        ```
      - **Throttling:** Ensures a function is called at most once in a specified interval. Useful for rate-limiting events like scrolling or mouse movements.
        ```javascript
        function throttle(func, limit) {
          let lastFunc;
          let lastRan;
          return function(...args) {
            if (!lastRan) {
              func

.apply(this, args);
              lastRan = Date.now();
            } else {
              clearTimeout(lastFunc);
              lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                  func.apply(this, args);
                  lastRan = Date.now();
                }
              }, limit - (Date.now() - lastRan));
            }
          };
        }
        ```

14. **What is event delegation, and how does it improve performance in JavaScript applications?**
    - **Answer:** Event delegation leverages event bubbling to handle events at a higher level in the DOM rather than setting event listeners on multiple child elements. By attaching a single event listener to a parent element, you can manage all events for child elements.

      **Example:**
      ```javascript
      document.getElementById('parent').addEventListener('click', function(event) {
        if (event.target && event.target.matches('li')) {
          console.log('List item clicked:', event.target.textContent);
        }
      });
      ```

      **Performance Improvement:** Reduces the number of event listeners, lowers memory usage, and simplifies code management.

### Security

21. **What are some common security issues in JavaScript applications, and how can they be mitigated?**
    - **Answer:**
      - **Cross-Site Scripting (XSS):** Sanitize user input, use Content Security Policy (CSP), and escape output.
      - **Cross-Site Request Forgery (CSRF):** Use anti-CSRF tokens, validate origin headers, and enforce same-site cookies.
      - **Insecure APIs:** Use HTTPS, validate and sanitize inputs, and implement proper authentication and authorization.
      - **Data Exposure:** Avoid exposing sensitive data in the frontend, use encryption, and secure storage mechanisms.

22. **Explain Cross-Site Scripting (XSS) and how to prevent it.**
    - **Answer:** XSS is a security vulnerability where attackers inject malicious scripts into web pages viewed by other users. It can lead to session hijacking, data theft, and other malicious activities.

      **Prevention:**
      - **Input Validation and Sanitization:** Validate and sanitize user inputs to ensure they do not contain malicious scripts.
      - **Output Encoding:** Encode data before rendering it in the browser to prevent script execution.
      - **Content Security Policy (CSP):** Implement CSP to restrict sources of executable scripts.

23. **What is Cross-Origin Resource Sharing (CORS), and why is it important?**
    - **Answer:** CORS is a security feature implemented by browsers to prevent web pages from making requests to a different domain than the one that served the web page. It controls how resources on a server can be accessed by external domains.

      **Importance:** CORS is crucial for preventing unauthorized access to resources and ensuring that only trusted domains can access sensitive data. It helps mitigate risks like Cross-Site Request Forgery (CSRF).

### Miscellaneous

24. **How does the `this` keyword work in JavaScript? Discuss different contexts in which `this` can be used.**
    - **Answer:** The `this` keyword refers to the context in which a function is called. Its value varies depending on the context:
      - **Global Context:** In the global scope, `this` refers to the global object (`window` in browsers).
      - **Function Context:** In a regular function, `this` refers to the object that called the function. If not called by an object, it refers to the global object.
      - **Object Method:** In an object method, `this` refers to the object owning the method.
      - **Constructor Function:** In a constructor function, `this` refers to the newly created instance.
      - **Arrow Functions:** Arrow functions do not have their own `this` context; they inherit `this` from the parent scope.

26. **Explain the concept of polyfills. When and why would you use them?**
    - **Answer:** Polyfills are code snippets or libraries that provide modern functionality on older browsers that do not natively support it. They allow developers to use new features without worrying about compatibility issues.

      **Use Cases:** When developing applications that need to support older browsers or environments that lack support for modern JavaScript features.

      **Example:**
      ```javascript
      // Polyfill for Array.prototype.includes
      if (!Array.prototype.includes) {
        Array.prototype.includes = function(value) {
          return this.indexOf(value) !== -1;
        };
      }
      ```

27. **What are web workers, and how do they improve the performance of JavaScript applications?**
    - **Answer:** Web workers are scripts that run in the background, separate from the main execution thread of a web application. They allow for concurrent execution, enabling intensive tasks to be performed without blocking the main thread.

      **Benefits:** Improved performance and responsiveness, as long-running tasks (e.g., data processing, computations) can be offloaded to web workers.

      **Example:**
      ```javascript
      const worker = new Worker('worker.js');
      worker.postMessage('Start processing');

      worker.onmessage = function(event) {
        console.log('Worker result:', event.data);
      };
      ```

28. **Discuss the difference between deep and shallow copying. How can you achieve each in JavaScript?**
    - **Answer:** 
      - **Shallow Copy:** Copies only the immediate properties of an object. Changes to nested objects affect both copies.
        ```javascript
        const original = { a: 1, b: { c: 2 } };
        const shallowCopy = Object.assign({}, original);
        shallowCopy.b.c = 3;
        console.log(original.b.c); // 3
        ```

      - **Deep Copy:** Recursively copies all properties, ensuring complete independence of the original and the copy.
        ```javascript
        const original = { a: 1, b: { c: 2 } };
        const deepCopy = JSON.parse(JSON.stringify(original));
        deepCopy.b.c = 3;
        console.log(original.b.c); // 2
        ```

### Practical Scenarios

29. **How would you handle large datasets in a JavaScript application to ensure smooth performance?**
    - **Answer:**
      - **Pagination:** Load and display data in chunks rather than all at once.
      - **Lazy Loading:** Load data as needed, based on user interaction or scrolling.
      - **Virtualization:** Render only the visible portion of the data, dynamically loading and unloading elements.
      - **Web Workers:** Offload intensive data processing to web workers to avoid blocking the main thread.
      - **Efficient Data Structures:** Use appropriate data structures for storage and retrieval.

30. **Describe a situation where you had to refactor JavaScript code for better readability or performance. What changes did you make, and what was the outcome?**
    - **Answer:** 
      - **Situation:** A legacy application had deeply nested callback functions, leading to callback hell and poor readability.
      - **Changes Made:** Refactored the code to use Promises and async/await syntax. Extracted reusable logic into separate functions. Simplified complex conditions and loops.
      - **Outcome:** Improved code readability and maintainability. Reduced the risk of errors and made the codebase easier to understand and extend. The application's performance also improved due to better handling of asynchronous operations.
