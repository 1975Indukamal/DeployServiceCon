import { Challenge } from "@/types/practice";

export const javascriptChallenges: Challenge[] = [
  // --- CLOSURES ---
  {
    title: "Basic Closure Counter",
    description: "Create a function `createCounter()` that returns a function. Each time the returned function is called, it should return an incremented count starting from 1.",
    functionName: "createCounter",
    starterCode: `function createCounter() {
  // Return a function
}`,
    tests: [
      { input: [], expected: "function" }
    ],
    hint: "Use a local variable inside createCounter that the inner function can access.",
    difficulty: "Easy",
    topic: "Closures",
    answer: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}`
  },
  {
    title: "Private Variable Object",
    description: "Create a function `createSecret(secret)` that returns an object with `getSecret()` and `setSecret(newSecret)`. The secret variable itself should not be directly accessible.",
    functionName: "createSecret",
    starterCode: `function createSecret(initialSecret) {
  
}`,
    tests: [
      { input: ["foo"], expected: "object" }
    ],
    difficulty: "Medium",
    topic: "Closures",
    answer: `function createSecret(initialSecret) {
  let _secret = initialSecret;
  return {
    getSecret: () => _secret,
    setSecret: (newSecret) => { _secret = newSecret; }
  };
}`
  },
  {
    title: "Once Function",
    description: "Write a function `once(fn)` that takes a function and returns a new function that can only be called once. Subsequent calls should return undefined.",
    functionName: "once",
    starterCode: `function once(fn) {
  
}`,
    tests: [
      { input: ["() => 5"], expected: "function" }
    ],
    difficulty: "Medium",
    topic: "Closures",
    answer: `function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
      return result;
    }
    return undefined;
  };
}`
  },
  {
    title: "Memoize Function",
    description: "Write a `memoize(fn)` function that returns a memoized version of the given function (it caches results based on arguments).",
    functionName: "memoize",
    starterCode: `function memoize(fn) {
  
}`,
    tests: [
      { input: ["() => { }"], expected: "function" }
    ],
    difficulty: "Hard",
    topic: "Closures",
    answer: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}`
  },
  {
    title: "Rate Limiter",
    description: "Create a `throttle(fn, wait)` function using closures that prevents `fn` from being called more than once every `wait` milliseconds.",
    functionName: "throttle",
    starterCode: `function throttle(fn, wait) {
  
}`,
    tests: [
      { input: ["() => { }", 100], expected: "function" }
    ],
    difficulty: "Hard",
    topic: "Closures",
    answer: `function throttle(fn, wait) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}`
  },

  // --- CURRYING ---
  {
    title: "Basic Add Currying",
    description: "Write a curried function `add(a)(b)` that returns the sum of a and b.",
    functionName: "add",
    starterCode: `function add(a) {
  
}`,
    tests: [
      { input: [5], expected: "function" }
    ],
    difficulty: "Easy",
    topic: "Currying",
    answer: `function add(a) {
  return function(b) {
    return a + b;
  };
}`
  },
  {
    title: "Curry with N arguments",
    description: "Write a function `sum(a)(b)(c)...()` that keeps adding numbers until called with no arguments, returning the final sum.",
    functionName: "sum",
    starterCode: `function sum(a) {
  
}`,
    tests: [
      { input: [1], expected: "function" }
    ],
    difficulty: "Medium",
    topic: "Currying",
    answer: `function sum(a) {
  return function(b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}`
  },
  {
    title: "Curry Wrapper",
    description: "Write a `curry(fn)` function that takes a multi-argument function and returns a curried version of it.",
    functionName: "curry",
    starterCode: `function curry(fn) {
  
}`,
    tests: [
      { input: ["(x, y) => x + y"], expected: "function" }
    ],
    difficulty: "Hard",
    topic: "Currying",
    answer: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}`
  },
  {
    title: "Partial Application",
    description: "Write a `partial(fn, ...args)` that pre-fills some arguments of `fn`.",
    functionName: "partial",
    starterCode: `function partial(fn, ...presetArgs) {
  
}`,
    tests: [
      { input: ["(x, y) => x + y", 5], expected: "function" }
    ],
    difficulty: "Medium",
    topic: "Currying",
    answer: `function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}`
  },
  {
    title: "Curried URL Builder",
    description: "Create a curried function `buildUrl(protocol)(domain)(path)` that returns a full URL string.",
    functionName: "buildUrl",
    starterCode: `function buildUrl(protocol) {
  
}`,
    tests: [
      { input: ["https"], expected: "function" }
    ],
    difficulty: "Medium",
    topic: "Currying",
    answer: `function buildUrl(protocol) {
  return function(domain) {
    return function(path) {
      return protocol + "://" + domain + "/" + path;
    };
  };
}`
  },

  // --- CALL / APPLY / BIND ---
  {
    title: "Custom Bind",
    description: "Implement your own version of `Function.prototype.bind` as a standalone function `myBind(fn, context, ...args)`.",
    functionName: "myBind",
    starterCode: `function myBind(fn, context, ...args) {
  
}`,
    tests: [
      { input: ["function () { return this.x; }", { x: 42 }], expected: "function" }
    ],
    difficulty: "Hard",
    topic: "Call/Apply/Bind",
    answer: `function myBind(fn, context, ...args) {
  return function(...laterArgs) {
    return fn.apply(context, [...args, ...laterArgs]);
  };
}`
  },
  {
    title: "Custom Call",
    description: "Implement your own version of `Function.prototype.call` as `myCall(fn, context, ...args)`.",
    functionName: "myCall",
    starterCode: `function myCall(fn, context, ...args) {
  
}`,
    tests: [
      { input: ["function (a) { return this.x + a; }", { x: 10 }, 5], expected: 15 }
    ],
    difficulty: "Hard",
    topic: "Call/Apply/Bind",
    answer: `function myCall(fn, context, ...args) {
  const sym = Symbol();
  context[sym] = fn;
  const result = context[sym](...args);
  delete context[sym];
  return result;
}`
  },
  {
    title: "Custom Apply",
    description: "Implement your own version of `Function.prototype.apply` as `myApply(fn, context, argsArray)`.",
    functionName: "myApply",
    starterCode: `function myApply(fn, context, argsArray) {
  
}`,
    tests: [
      { input: ["function (a, b) { return this.x + a + b; }", { x: 10 }, [5, 5]], expected: 20 }
    ],
    difficulty: "Hard",
    topic: "Call/Apply/Bind",
    answer: `function myApply(fn, context, argsArray) {
  const sym = Symbol();
  context[sym] = fn;
  const result = context[sym](...argsArray);
  delete context[sym];
  return result;
}`
  },
  {
    title: "Borrowing Methods",
    description: "Use `call` or `apply` to return the maximum number in an array without using loops. (Hint: Math.max)",
    functionName: "getMax",
    starterCode: `function getMax(arr) {
  // return Math.max.____(____, arr);
}`,
    tests: [
      { input: [[1, 5, 2, 9, 3]], expected: 9 }
    ],
    hint: "Use apply on Math.max",
    difficulty: "Easy",
    topic: "Call/Apply/Bind",
    answer: `function getMax(arr) {
  return Math.max.apply(null, arr);
}`
  },

  // --- CLASSES, FUNCTIONS, CONSTRUCTORS & OBJECTS ---
  {
    title: "Create Class syntax",
    description: "Create a class `Person` with a constructor taking `name` and `age`, and a method `greet()` returning 'Hi, I am [name]'. *Note: Return the class itself.*",
    functionName: "createClass",
    starterCode: `function createClass() {
  class Person {
    
  }
  return Person;
}`,
    tests: [
      { input: [], expected: "function" }
    ],
    difficulty: "Easy",
    topic: "Classes/Objects",
    answer: `function createClass() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return "Hi, I am " + this.name;
    }
  }
  return Person;
}`
  },
  {
    title: "Prototypal Inheritance",
    description: "Create a constructor `Animal(name)` and a constructor `Dog(name, breed)` that inherits from `Animal` using prototypes. Return an array `[Animal, Dog]`.",
    functionName: "createPrototypes",
    starterCode: `function createPrototypes() {
  function Animal(name) { this.name = name; }
  
  function Dog(name, breed) {
    //
  }
  // Setup prototype link here
  
  return [Animal, Dog];
}`,
    tests: [
      { input: [], expected: "object" }
    ],
    difficulty: "Hard",
    topic: "Classes/Objects",
    answer: `function createPrototypes() {
  function Animal(name) { this.name = name; }
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  return [Animal, Dog];
}`
  },
  {
    title: "Deep Clone Object",
    description: "Write a function `deepClone(obj)` that returns a deep copy of a nested object.",
    functionName: "deepClone",
    starterCode: `function deepClone(obj) {
  
}`,
    tests: [
      { input: [{ a: 1, b: { c: 2 } }], expected: { a: 1, b: { c: 2 } } }
    ],
    difficulty: "Medium",
    topic: "Classes/Objects",
    answer: `function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}`
  },
  {
    title: "Object Merge",
    description: "Write a function `mergeObjects(obj1, obj2)` that deeply merges obj2 into obj1.",
    functionName: "mergeObjects",
    starterCode: `function mergeObjects(obj1, obj2) {
  
}`,
    tests: [
      { input: [{ a: 1 }, { b: 2 }], expected: { a: 1, b: 2 } }
    ],
    difficulty: "Medium",
    topic: "Classes/Objects",
    answer: `function mergeObjects(obj1, obj2) {
  for (let key in obj2) {
    if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
      mergeObjects(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}`
  },
  {
    title: "Flatten Object",
    description: "Write a function `flattenObject(obj)` that flattens nested objects into a single level with dot-notation keys.",
    functionName: "flattenObject",
    starterCode: `function flattenObject(obj) {
  
}`,
    tests: [
      { input: [{ a: { b: { c: 1 } } }], expected: { "a.b.c": 1 } }
    ],
    difficulty: "Hard",
    topic: "Classes/Objects",
    answer: `function flattenObject(obj, prefix = '') {
  let result = {};
  for (let key in obj) {
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}`
  },

  // --- GUESS OUTPUT QUESTIONS ---
  {
    title: "Guess Output 1: var vs let",
    description: "What will this output? \n`for(var i=0; i<3; i++) { setTimeout(() => console.log(i), 1); }`\nReturn your answer as a string e.g., '0,1,2'.",
    functionName: "guess1",
    starterCode: `function guess1() {
  return ""; 
}`,
    tests: [
      { input: [], expected: "3,3,3" }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guess1() {
  return "3,3,3";
}`
  },
  {
    title: "Guess Output 2: Object Key Coercion",
    description: "What is `a[c]`?\n`let a={}, b={key:'b'}, c={key:'c'};\na[b]=123; a[c]=456;`",
    functionName: "guess2",
    starterCode: `function guess2() {
  return 0; 
}`,
    tests: [
      { input: [], expected: 456 }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guess2() {
  return 456;
}`
  },
  {
    title: "Guess Output 3: Hoisting",
    description: "Output of:\n`function sayHello() { console.log(name); var name = 'Alice'; }`\nReturn 'Alice', 'undefined', or 'ReferenceError'.",
    functionName: "guess3",
    starterCode: `function guess3() {
  return "";
}`,
    tests: [
      { input: [], expected: "undefined" }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guess3() {
  return "undefined";
}`
  },
  {
    title: "Guess Output 4: This Context",
    description: "Output of:\n`const obj = { msg: 'hi', print() { return this.msg; } }; const fn = obj.print; fn();`\nReturn the string output.",
    functionName: "guess4",
    starterCode: `function guess4() {
  return ""; 
}`,
    tests: [
      { input: [], expected: undefined }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guess4() {
  return "undefined";
}`
  },
  {
    title: "Guess Output 5: typeof null",
    description: "What does `typeof null` evaluate to?",
    functionName: "guess5",
    starterCode: `function guess5() {
  return "";
}`,
    tests: [
      { input: [], expected: "object" }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guess5() {
  return "object";
}`
  },
  {
    title: "Guess Output 6: Array Map Parsing",
    description: "What does `['1', '7', '11'].map(parseInt)` return? Return an array of numbers/NaN.",
    functionName: "guess6",
    starterCode: `function guess6() {
  return []; 
}`,
    tests: [
      { input: [], expected: [1, NaN, 3] }
    ],
    difficulty: "Hard",
    topic: "Guess Output",
    answer: `function guess6() {
  return [1, NaN, 3];
}`
  },
  {
    title: "Guess Output 7: IIFE",
    description: "Output of: `(function(){ var a = b = 3; })(); console.log(b);`\nReturn the number or 'ReferenceError'.",
    functionName: "guess7",
    starterCode: `function guess7() {
  return 0; 
}`,
    tests: [
      { input: [], expected: 3 }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guess7() {
  return 3;
}`
  },
  {
    title: "Guess Output 8: Arrow Function This",
    description: "`const shape = { radius: 10, diameter() { return this.radius * 2; }, perimeter: () => 2 * Math.PI * this.radius }; shape.perimeter();`\nWhat does perimeter return?",
    functionName: "guess8",
    starterCode: `function guess8() {
  return ""; 
}`,
    tests: [
      { input: [], expected: null }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guess8() {
  return "NaN";
}`
  },

  // --- PROMISES / ASYNC AWAIT / EVENT LOOP ---
  {
    title: "Event Loop: setTimeout vs Promise",
    description: "What is the output order?\n`console.log(1);\nsetTimeout(()=>console.log(2),0);\nPromise.resolve().then(()=>console.log(3));\nconsole.log(4);`",
    functionName: "guessEventLoop",
    starterCode: `function guessEventLoop() {
  return ""; 
}`,
    tests: [
      { input: [], expected: "1,4,3,2" }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessEventLoop() {
  return "1,4,3,2";
}`
  },
  {
    title: "Promise.all Output",
    description: "What does this return?\n`Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).catch(e => e);`",
    functionName: "guessPromise",
    starterCode: `function guessPromise() {
  return 0; 
}`,
    tests: [
      { input: [], expected: 2 }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessPromise() {
  return 2;
}`
  },
  {
    title: "Async Function Return Type",
    description: "What does `typeof (async () => {})()` return?",
    functionName: "guessAsyncReturn",
    starterCode: `function guessAsyncReturn() {
  return "";
}`,
    tests: [
      { input: [], expected: "object" }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessAsyncReturn() {
  return "object";
}`
  },
  {
    title: "Await on non-promise",
    description: "What happens if you `await 5;` inside an async function?",
    functionName: "guessAwaitValue",
    starterCode: `function guessAwaitValue() {
  return 0; 
}`,
    tests: [
      { input: [], expected: 5 }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessAwaitValue() {
  return 5;
}`
  },

  // --- ARRAYS AND STRINGS ---
  {
    title: "Guess Output: Array + Array",
    description: "What does `['a'] + ['b']` evaluate to?",
    functionName: "guessArrayPlus",
    starterCode: `function guessArrayPlus() {
  return "";
}`,
    tests: [
      { input: [], expected: "ab" }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessArrayPlus() {
  return "ab";
}`
  },
  {
    title: "Guess Output: Math.max() with no args",
    description: "What does `Math.max()` evaluate to?",
    functionName: "guessMathMax",
    starterCode: `function guessMathMax() {
  return 0; 
}`,
    tests: [
      { input: [], expected: -Infinity }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessMathMax() {
  return -Infinity;
}`
  },
  {
    title: "Splice vs Slice",
    description: "What does `[1, 2, 3].slice(1,2)` return?",
    functionName: "guessSlice",
    starterCode: `function guessSlice() {
  return []; 
}`,
    tests: [
      { input: [], expected: [2] }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessSlice() {
  return [2];
}`
  },
  {
    title: "Delete from Array",
    description: "What is `[1, 2, 3].length` after `delete arr[1]`?",
    functionName: "guessDeleteLength",
    starterCode: `function guessDeleteLength() {
  return 0;
}`,
    tests: [
      { input: [], expected: 3 }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessDeleteLength() {
  return 3;
}`
  },
  {
    title: "Push on Array",
    description: "What does `[1,2].push(3)` return?",
    functionName: "guessPush",
    starterCode: `function guessPush() {
  return 0; 
}`,
    tests: [
      { input: [], expected: 3 }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessPush() {
  return 3;
}`
  },

  // --- COERCION & EQUALITY ---
  {
    title: "Double Equality: true == []",
    description: "What does `true == []` evaluate to?",
    functionName: "guessCoercion1",
    starterCode: `function guessCoercion1() {
  return false; 
}`,
    tests: [
      { input: [], expected: false }
    ],
    difficulty: "Hard",
    topic: "Guess Output",
    answer: `function guessCoercion1() {
  return false;
}`
  },
  {
    title: "Double Equality: [] == ![]",
    description: "What does `[] == ![]` evaluate to?",
    functionName: "guessCoercion2",
    starterCode: `function guessCoercion2() {
  return false; 
}`,
    tests: [
      { input: [], expected: true }
    ],
    difficulty: "Hard",
    topic: "Guess Output",
    answer: `function guessCoercion2() {
  return true;
}`
  },
  {
    title: "NaN Equality",
    description: "What does `NaN === NaN` evaluate to?",
    functionName: "guessNaN",
    starterCode: `function guessNaN() {
  return false;
}`,
    tests: [
      { input: [], expected: false }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessNaN() {
  return false;
}`
  },
  {
    title: "Typeof NaN",
    description: "What does `typeof NaN` return?",
    functionName: "guessTypeofNaN",
    starterCode: `function guessTypeofNaN() {
  return "";
}`,
    tests: [
      { input: [], expected: "number" }
    ],
    difficulty: "Easy",
    topic: "Guess Output",
    answer: `function guessTypeofNaN() {
  return "number";
}`
  },

  // --- ADDITIONAL FUNCTIONS ---
  {
    title: "Function Length",
    description: "What does `(function(a, b = 2, c) {}).length` evaluate to? (Function.length refers to arity).",
    functionName: "guessFnLength",
    starterCode: `function guessFnLength() {
  return 0;
}`,
    tests: [
      { input: [], expected: 1 }
    ],
    difficulty: "Hard",
    topic: "Guess Output",
    answer: `function guessFnLength() {
  return 1;
}`
  },
  {
    title: "Arguments Object",
    description: "In non-strict mode, does modifying `arguments[0]` alter the named parameter `x`?",
    functionName: "guessArgs",
    starterCode: `function guessArgs() {
  return false; 
}`,
    tests: [
      { input: [], expected: true }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessArgs() {
  return true;
}`
  },

  // --- OBJECT PROPERTY DESCRIPTORS ---
  {
    title: "Object.freeze()",
    description: "Can you change the properties of a nested object if the parent object is `Object.freeze()`'d? (true for yes, false for no)",
    functionName: "guessFreeze",
    starterCode: `function guessFreeze() {
  return false;
}`,
    tests: [
      { input: [], expected: true }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessFreeze() {
  return true;
}`
  },
  {
    title: "Object.seal()",
    description: "With `Object.seal()`, can you modify *existing* properties? (true for yes, false for no)",
    functionName: "guessSeal",
    starterCode: `function guessSeal() {
  return false;
}`,
    tests: [
      { input: [], expected: true }
    ],
    difficulty: "Medium",
    topic: "Guess Output",
    answer: `function guessSeal() {
  return true;
}`
  }
];
