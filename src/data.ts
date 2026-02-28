export const techStacks = ["react", "javascript", "nodejs", "typescript", "python", "aws", "docker", "authentication", "dsa"];

export const topics: Record<string, string[]> = {
  react: ["components", "hooks", "state-management", "routing", "context-api", "lifecycle", "jsx", "props"],
  nodejs: ["modules", "express", "middleware", "streams", "event-loop", "file-system", "async-patterns", "npm"],
  python: ["data-types", "functions", "oop", "decorators", "generators", "list-comprehensions", "error-handling", "modules"],
  javascript: ["closures", "promises", "prototypes", "event-loop", "dom", "es6-features", "async-await", "scope"],
  typescript: ["types", "interfaces", "generics", "enums", "type-guards", "utility-types", "decorators", "modules"],
  aws: ["ec2", "s3", "iam", "route53", "cloudfront", "lambda", "elastic-beanstalk", "deploy-mern"],
  docker: ["containers", "images", "dockerfile", "docker-compose", "volumes", "networking", "registry", "best-practices"],
  authentication: ["jwt", "oauth", "session-management", "password-hashing", "cors", "csrf", "role-based-access", "social-login"],
  dsa: ["arrays", "linked-lists", "stacks-queues", "trees", "graphs", "sorting", "searching", "dynamic-programming"],
};

interface TopicData {
  explanation: string;
  image?: string;
  example?: string;
  exampleExplanation?: string;
}

export const explanation: Record<string, Record<string, TopicData>> = {
  react: {
    components: {
      explanation: "Components are the building blocks of a React application. They let you split the UI into independent, reusable pieces. Each component can accept inputs called props and return React elements describing what should appear on the screen. Components can be either function components (preferred) or class components.",
      example: `function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// Usage\n<Greeting name="World" />`,
      exampleExplanation: "This function component accepts a 'name' prop and renders a greeting. It's simple, reusable, and follows React's composition pattern.",
    },
    hooks: {
      explanation: "Hooks are functions that let you use state and other React features in function components. useState lets you add state, useEffect handles side effects, useContext accesses context, and custom hooks let you extract and reuse logic across components.",
      example: `import { useState, useEffect } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = \`Count: \${count}\`;\n  }, [count]);\n\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}`,
      exampleExplanation: "useState manages the counter state, while useEffect synchronizes the document title with the count value.",
    },
    statemanagement: {
      explanation: "State management in React involves handling data that changes over time. Local state uses useState, shared state can use Context API or lifting state up. For complex apps, libraries like Redux, Zustand, or Jotai provide global state management with predictable patterns.",
      example: `// Zustand store example\nimport { create } from 'zustand';\n\nconst useStore = create((set) => ({\n  count: 0,\n  increment: () => set((s) => ({ count: s.count + 1 })),\n}));`,
      exampleExplanation: "Zustand provides a minimal API for global state management without the boilerplate of Redux.",
    },
    routing: {
      explanation: "Routing in React enables navigation between different views without full page reloads. React Router is the most popular library, providing components like Route, Link, and hooks like useNavigate and useParams for building single-page applications with multiple views.",
      example: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to="/about">About</Link></nav>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
      exampleExplanation: "React Router handles client-side routing, mapping URL paths to components.",
    },
    contextapi: {
      explanation: "The Context API provides a way to pass data through the component tree without prop drilling. It's ideal for global values like themes, authentication state, or locale preferences. Create a context, provide it at a high level, and consume it anywhere below.",
      example: `const ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <div className={theme}>Themed Toolbar</div>;\n}`,
      exampleExplanation: "The theme value is provided at the top and consumed deep in the tree without passing props.",
    },
    lifecycle: {
      explanation: "Component lifecycle refers to the stages a component goes through: mounting, updating, and unmounting. In function components, useEffect replaces lifecycle methods. It runs after render, can clean up on unmount, and re-runs when dependencies change.",
    },
    jsx: {
      explanation: "JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It gets compiled to React.createElement calls. JSX supports expressions, conditional rendering, and mapping arrays to elements. It makes component structure visual and intuitive.",
      example: `const element = (\n  <div className="card">\n    <h2>{title}</h2>\n    {isLoggedIn ? <Dashboard /> : <Login />}\n    {items.map(item => <li key={item.id}>{item.name}</li>)}\n  </div>\n);`,
      exampleExplanation: "JSX combines markup with JavaScript expressions using curly braces, supporting conditionals and loops inline.",
    },
    props: {
      explanation: "Props (properties) are the mechanism for passing data from parent to child components. They are read-only and flow one direction (top-down). Props can include any JavaScript value: strings, numbers, objects, functions, and even other components.",
    },
  },
  nodejs: {
    modules: {
      explanation: "Node.js uses a module system to organize code into reusable files. CommonJS (require/module.exports) is the traditional approach, while ES Modules (import/export) are the modern standard. Each file is treated as a separate module with its own scope.",
      example: `// math.js (CommonJS)\nmodule.exports = {\n  add: (a, b) => a + b,\n  multiply: (a, b) => a * b,\n};\n\n// app.js\nconst { add, multiply } = require('./math');`,
      exampleExplanation: "Modules encapsulate related functionality and expose only what's needed through exports.",
    },
    express: {
      explanation: "Express is a minimal, flexible Node.js web framework. It provides routing, middleware support, and HTTP utilities for building APIs and web applications. Its simplicity and large ecosystem make it the most popular Node.js framework.",
      example: `const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.json([{ id: 1, name: 'Alice' }]);\n});\n\napp.listen(3000);`,
      exampleExplanation: "Express handles HTTP routing and sends JSON responses with minimal setup.",
    },
    middleware: {
      explanation: "Middleware functions in Express have access to the request, response, and next function. They can execute code, modify req/res objects, end the request cycle, or pass control to the next middleware. They're used for logging, auth, error handling, and more.",
    },
    streams: {
      explanation: "Streams are a way to handle reading and writing data in chunks rather than loading everything into memory. Node.js has four stream types: Readable, Writable, Duplex, and Transform. They're essential for handling large files and real-time data.",
    },
    eventloop: {
      explanation: "The Event Loop is Node's concurrency mechanism. It processes callbacks from the event queue when the call stack is empty. This enables non-blocking I/O despite JavaScript being single-threaded. Understanding phases (timers, poll, check) helps write efficient code.",
    },
    filesystem: {
      explanation: "The fs module provides file system operations like reading, writing, and deleting files. Both synchronous and asynchronous APIs are available. The promises API (fs.promises) is preferred for modern async/await patterns.",
      example: `import { readFile, writeFile } from 'fs/promises';\n\nasync function processFile() {\n  const data = await readFile('input.txt', 'utf8');\n  await writeFile('output.txt', data.toUpperCase());\n}`,
      exampleExplanation: "Using the promises API for clean async file operations.",
    },
    asyncpatterns: {
      explanation: "Node.js offers multiple async patterns: callbacks (traditional), Promises (chainable), async/await (readable), and event emitters (pub/sub). Modern Node.js code favors async/await for its clarity and error handling with try/catch.",
    },
    npm: {
      explanation: "npm (Node Package Manager) manages project dependencies and scripts. package.json defines metadata, dependencies, and scripts. npm install downloads packages, npx runs binaries, and the registry hosts over a million public packages.",
    },
  },
  python: {
    datatypes: {
      explanation: "Python has built-in data types including int, float, str, bool, list, tuple, dict, and set. Dynamic typing means variables don't need type declarations. Each type has specific methods and behaviors. Understanding mutability (lists vs tuples) is crucial.",
      example: `# Common data types\nname = "Python"           # str\ncount = 42                # int\nscores = [95, 87, 91]     # list (mutable)\npoint = (3, 4)            # tuple (immutable)\nuser = {"name": "Alice"}  # dict\nunique = {1, 2, 3}        # set`,
      exampleExplanation: "Python's dynamic typing allows flexible variable assignment with clear, readable syntax.",
    },
    functions: {
      explanation: "Functions in Python are defined with the def keyword. They support default arguments, *args, **kwargs, type hints, and docstrings. Functions are first-class objects—they can be passed as arguments, returned from other functions, and assigned to variables.",
    },
    oop: {
      explanation: "Python supports object-oriented programming with classes, inheritance, polymorphism, and encapsulation. The __init__ method initializes instances, self references the instance, and special methods (__str__, __repr__) customize behavior.",
      example: `class Animal:\n    def __init__(self, name: str):\n        self.name = name\n    \n    def speak(self) -> str:\n        raise NotImplementedError\n\nclass Dog(Animal):\n    def speak(self) -> str:\n        return f"{self.name} says Woof!"`,
      exampleExplanation: "Inheritance lets Dog extend Animal while implementing its own speak method.",
    },
    decorators: {
      explanation: "Decorators modify or extend functions/classes without changing their source code. They use the @decorator syntax and are widely used for logging, authentication, caching, and framework features like Flask's @app.route.",
    },
    generators: {
      explanation: "Generators are functions that use yield to produce values lazily, one at a time. They're memory-efficient for large datasets and support iteration protocols. Generator expressions provide a concise syntax similar to list comprehensions.",
    },
    listcomprehensions: {
      explanation: "List comprehensions provide a concise way to create lists. They can include conditions and nested loops. Dict and set comprehensions work similarly. They're more Pythonic and often faster than equivalent for loops.",
      example: `# List comprehension\nsquares = [x**2 for x in range(10)]\n\n# With condition\nevens = [x for x in range(20) if x % 2 == 0]\n\n# Dict comprehension\nword_lengths = {w: len(w) for w in ["hello", "world"]}`,
      exampleExplanation: "Comprehensions express data transformations in a single readable line.",
    },
    errorhandling: {
      explanation: "Python uses try/except/finally blocks for error handling. Custom exceptions extend the Exception class. The else clause runs when no exception occurs. Context managers (with statement) ensure resource cleanup.",
    },
    modules: {
      explanation: "Python modules are files containing Python code. Packages are directories with __init__.py. The import system supports absolute and relative imports. pip manages third-party packages from PyPI.",
    },
  },
  javascript: {
    closures: {
      explanation: "A closure is a function that retains access to its outer scope's variables even after the outer function has returned. Closures are fundamental to JavaScript and enable patterns like data privacy, function factories, and callbacks.",
      example: `function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count,\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2`,
      exampleExplanation: "The inner functions close over 'count', keeping it private while providing controlled access.",
    },
    promises: {
      explanation: "Promises represent eventual completion or failure of async operations. They have three states: pending, fulfilled, rejected. Promise.all, Promise.race, and Promise.allSettled handle multiple promises. They replaced callback hell with chainable .then()/.catch().",
    },
    prototypes: {
      explanation: "JavaScript uses prototypal inheritance. Every object has an internal [[Prototype]] link. When accessing a property, JS walks up the prototype chain. Classes are syntactic sugar over prototypes. Understanding this helps with debugging and performance.",
    },
    eventloop: {
      explanation: "The event loop processes the call stack and message queue. Microtasks (Promises) run before macrotasks (setTimeout). This determines execution order of async code. Understanding it prevents race conditions and unexpected behavior.",
    },
    dom: {
      explanation: "The Document Object Model represents HTML as a tree of nodes. JavaScript can query, create, modify, and remove elements. Modern APIs include querySelector, classList, dataset, and event delegation. Frameworks abstract DOM manipulation.",
    },
    es6features: {
      explanation: "ES6+ introduced arrow functions, destructuring, template literals, spread/rest operators, classes, modules, Symbol, Map/Set, and more. These features dramatically improved code readability and developer experience.",
      example: `// Destructuring + spread\nconst { name, ...rest } = user;\nconst merged = { ...defaults, ...options };\n\n// Template literals\nconst greeting = \`Hello, \${name}!\`;\n\n// Arrow functions\nconst double = (x) => x * 2;`,
      exampleExplanation: "ES6 features make code more concise and expressive.",
    },
    asyncawait: {
      explanation: "async/await is syntactic sugar over Promises, making async code look synchronous. async functions always return a Promise. await pauses execution until the Promise settles. Error handling uses try/catch instead of .catch().",
    },
    scope: {
      explanation: "JavaScript has global, function, and block scope. var is function-scoped, let/const are block-scoped. The temporal dead zone prevents accessing let/const before declaration. Scope determines variable visibility and lifetime.",
    },
  },
  typescript: {
    types: {
      explanation: "TypeScript's type system includes primitives (string, number, boolean), unions, intersections, literal types, and type aliases. Type annotations catch errors at compile time. The 'any' type opts out of type checking—avoid it when possible.",
      example: `type Status = 'active' | 'inactive' | 'pending';\ntype User = {\n  id: number;\n  name: string;\n  status: Status;\n  metadata?: Record<string, unknown>;\n};`,
      exampleExplanation: "Union types and type aliases create precise, self-documenting type definitions.",
    },
    interfaces: {
      explanation: "Interfaces define object shapes and can be extended, merged, and implemented by classes. They're ideal for defining API contracts. Declaration merging lets you extend third-party interfaces. Use interfaces for objects, type aliases for unions.",
    },
    generics: {
      explanation: "Generics create reusable components that work with multiple types while maintaining type safety. They're used in functions, classes, and interfaces. Constraints (extends) limit generic types. Built-in generics include Array<T>, Promise<T>, Record<K,V>.",
      example: `function first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst num = first([1, 2, 3]);    // number\nconst str = first(['a', 'b']);   // string`,
      exampleExplanation: "The generic T is inferred from the argument, providing correct return types automatically.",
    },
    enums: {
      explanation: "Enums define named constants. Numeric enums auto-increment, string enums need explicit values. const enums are inlined at compile time. Consider union types as a lighter alternative for simple cases.",
    },
    typeguards: {
      explanation: "Type guards narrow types within conditional blocks. typeof, instanceof, and 'in' operator are built-in guards. Custom type guard functions use 'is' return type. Discriminated unions combine literal types with switch statements for exhaustive checking.",
    },
    utilitytypes: {
      explanation: "TypeScript provides built-in utility types: Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, ReturnType<T>, and more. They transform existing types without redefining them, reducing code duplication.",
    },
    decorators: {
      explanation: "Decorators are experimental in TypeScript and used heavily in frameworks like Angular and NestJS. They modify classes, methods, properties, or parameters. Enable with experimentalDecorators in tsconfig.",
    },
    modules: {
      explanation: "TypeScript uses ES Module syntax (import/export). Declaration files (.d.ts) type external JavaScript. Path aliases simplify imports. Barrel exports (index.ts) organize public APIs. Module resolution follows Node or bundler strategies.",
    },
  },
  aws: {
    ec2: {
      explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud. You choose instance type (CPU, RAM), OS, and storage. It's the foundation for deploying backend applications on AWS.",
      example: `# Launch EC2 instance via AWS CLI\naws ec2 run-instances \\\n  --image-id ami-0abcdef1234567890 \\\n  --instance-type t2.micro \\\n  --key-name my-key-pair`,
      exampleExplanation: "This command launches a t2.micro EC2 instance (free tier eligible) with a specified AMI and key pair for SSH access.",
    },
    s3: {
      explanation: "S3 (Simple Storage Service) provides object storage for files, images, backups, and static website hosting. It's highly durable (99.999999999%) and can serve your React build files as a static website.",
      example: `# Upload React build to S3\naws s3 sync build/ s3://my-react-app --delete\n\n# Enable static website hosting\naws s3 website s3://my-react-app \\\n  --index-document index.html \\\n  --error-document index.html`,
      exampleExplanation: "Syncs your React build folder to S3 and enables static website hosting with SPA routing support.",
    },
    iam: {
      explanation: "IAM (Identity and Access Management) controls who can access AWS resources. It manages users, groups, roles, and policies. Follow the principle of least privilege — give only the permissions needed.",
    },
    route53: {
      explanation: "Route 53 is AWS's DNS service. It routes traffic to your application, manages domain names, and supports health checks. You can point your custom domain to EC2, S3, or CloudFront.",
    },
    cloudfront: {
      explanation: "CloudFront is a CDN (Content Delivery Network) that caches your content at edge locations worldwide. It speeds up delivery of your React app and can add HTTPS with free SSL certificates.",
    },
    lambda: {
      explanation: "AWS Lambda runs code without managing servers (serverless). You upload your function, define triggers (API Gateway, S3 events), and pay only for execution time. Great for APIs, image processing, and scheduled tasks.",
    },
    elasticbeanstalk: {
      explanation: "Elastic Beanstalk is a PaaS that handles deployment, scaling, and monitoring automatically. Upload your Node.js app and it provisions EC2, load balancers, and auto-scaling for you.",
    },
    deploymern: {
      explanation: "Deploying a MERN stack on AWS involves: React frontend on S3 + CloudFront, Node.js/Express backend on EC2 or Elastic Beanstalk, MongoDB on Atlas or DocumentDB. Use Nginx as reverse proxy and PM2 for process management.",
      example: `# Typical MERN deployment architecture:\n# 1. Frontend: S3 + CloudFront (React build)\n# 2. Backend: EC2 + Nginx + PM2 (Node.js API)\n# 3. Database: MongoDB Atlas (managed)\n# 4. Domain: Route 53 → CloudFront & EC2\n# 5. SSL: ACM (free certificates)`,
      exampleExplanation: "This architecture separates frontend (static hosting) from backend (compute) for better scaling and cost efficiency.",
    },
  },
  docker: {
    containers: {
      explanation: "Containers are lightweight, isolated environments that package your application with all its dependencies. Unlike VMs, containers share the host OS kernel, making them faster to start and more resource-efficient.",
    },
    images: {
      explanation: "Docker images are read-only templates used to create containers. They're built in layers — each instruction in a Dockerfile creates a new layer. Images are stored in registries like Docker Hub.",
    },
    dockerfile: {
      explanation: "A Dockerfile is a text file with instructions to build a Docker image. Common instructions: FROM (base image), COPY (add files), RUN (execute commands), EXPOSE (declare port), CMD (default command).",
      example: `FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --production\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]`,
      exampleExplanation: "This Dockerfile creates a Node.js app image using Alpine Linux (small), installs production dependencies, copies code, and runs the server.",
    },
    dockercompose: {
      explanation: "Docker Compose defines multi-container applications in a YAML file. It lets you run your frontend, backend, and database together with one command: docker-compose up.",
      example: `version: '3.8'\nservices:\n  frontend:\n    build: ./client\n    ports: ['3000:3000']\n  backend:\n    build: ./server\n    ports: ['5000:5000']\n    environment:\n      - MONGO_URI=mongodb://db:27017/myapp\n  db:\n    image: mongo:6\n    volumes: ['mongo-data:/data/db']\nvolumes:\n  mongo-data:`,
      exampleExplanation: "This docker-compose.yml runs a full MERN stack — React frontend, Node.js backend, and MongoDB database with persistent storage.",
    },
    volumes: {
      explanation: "Volumes persist data beyond container lifecycle. Without volumes, data is lost when a container stops. Named volumes are managed by Docker; bind mounts link to host directories.",
    },
    networking: {
      explanation: "Docker networking connects containers together. Default bridge network lets containers communicate by name. Custom networks provide isolation between groups of containers.",
    },
    registry: {
      explanation: "A Docker registry stores and distributes images. Docker Hub is the default public registry. AWS ECR, GitHub Container Registry are alternatives. Use private registries for production images.",
    },
    bestpractices: {
      explanation: "Docker best practices: use small base images (Alpine), multi-stage builds, .dockerignore file, don't run as root, minimize layers, use specific image tags (not 'latest'), and scan for vulnerabilities.",
    },
  },
  authentication: {
    jwt: {
      explanation: "JWT (JSON Web Token) is a compact, self-contained token for securely transmitting information. It has three parts: Header (algorithm), Payload (claims/data), and Signature (verification). Used for stateless authentication.",
      example: `// JWT structure: header.payload.signature\n// Header: { "alg": "HS256", "typ": "JWT" }\n// Payload: { "userId": "123", "role": "admin", "exp": 1234567890 }\n\nconst jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: '123' }, 'secret', { expiresIn: '1h' });\nconst decoded = jwt.verify(token, 'secret');`,
      exampleExplanation: "jwt.sign creates a token with payload and expiry, jwt.verify decodes and validates it.",
    },
    oauth: {
      explanation: "OAuth 2.0 is an authorization framework that lets users grant third-party apps limited access to their accounts without sharing passwords. Common flows: Authorization Code (web apps), Implicit (SPAs), Client Credentials (server-to-server).",
    },
    sessionmanagement: {
      explanation: "Session-based auth stores user state on the server. After login, server creates a session ID stored in a cookie. Each request sends the cookie, server looks up the session. Pros: easy to revoke. Cons: server memory, not stateless.",
    },
    passwordhashing: {
      explanation: "Never store plain text passwords. Use bcrypt or argon2 to hash passwords with a salt. Hashing is one-way — you can't reverse it. To verify, hash the input and compare with stored hash.",
      example: `const bcrypt = require('bcrypt');\n\n// Hash password\nconst hash = await bcrypt.hash('myPassword', 10); // 10 salt rounds\n\n// Verify password\nconst isMatch = await bcrypt.compare('myPassword', hash); // true`,
      exampleExplanation: "bcrypt.hash creates a salted hash, bcrypt.compare verifies a password against the stored hash.",
    },
    cors: {
      explanation: "CORS (Cross-Origin Resource Sharing) is a security mechanism that controls which domains can access your API. Browsers block cross-origin requests by default. Configure your server to allow specific origins.",
    },
    csrf: {
      explanation: "CSRF (Cross-Site Request Forgery) tricks users into making unwanted requests to a site they're authenticated on. Prevention: use CSRF tokens, SameSite cookies, and verify the Origin header.",
    },
    rolebasedaccess: {
      explanation: "RBAC assigns permissions based on roles (admin, user, editor). Users get roles, roles have permissions. Middleware checks if the user's role has the required permission for each route.",
    },
    sociallogin: {
      explanation: "Social login lets users sign in with Google, GitHub, Facebook etc. using OAuth 2.0. It improves UX (no new password to remember) and reduces friction. Implement using Passport.js strategies or direct OAuth flows.",
    },
  },
  dsa: {
    arrays: {
      explanation: "Arrays are contiguous memory blocks holding elements of the same type. They offer O(1) time complexity for access by index. Insertions and deletions at the end are O(1), but in the middle they are O(N) due to element shifting.",
      example: "const arr = [1, 2, 3, 4];\narr.push(5); // O(1)\narr.splice(1, 0, 10); // O(N)",
      exampleExplanation: "Arrays are the foundation for many algorithms due to their fast random access.",
    },
    linkedlists: {
      explanation: "Linked lists consist of nodes containing data and a pointer to the next node. Unlike arrays, elements are not stored contiguously. Insertion/deletion at a known node is O(1), but accessing an element by index is O(N).",
      example: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}",
      exampleExplanation: "Singly linked lists have unidirectional pointers, while doubly linked lists have pointers to both next and previous nodes.",
    },
    stacksqueues: {
      explanation: "Stacks follow LIFO (Last-In-First-Out). Think of a stack of plates. Queues follow FIFO (First-In-First-Out). Think of a checkout line. Both can be implemented using arrays or linked lists, usually offering O(1) for push/pop or enqueue/dequeue.",
    },
    trees: {
      explanation: "Trees are hierarchical data structures with a root node and child nodes. Binary Search Trees (BST) keep smaller elements to the left and larger to the right, offering O(log N) for search, insert, and delete on average. Balanced trees like AVL or Red-Black guarantee O(log N).",
    },
    graphs: {
      explanation: "Graphs consist of vertices (nodes) and edges connecting them. They can be directed or undirected, weighted or unweighted. Common representations include Adjacency Matrices and Adjacency Lists. Algorithms like BFS and DFS are used for traversal.",
    },
    sorting: {
      explanation: "Sorting algorithms arrange elements in a specific order (e.g., ascending). Common algorithms include Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort. Merge, Quick, and Heap sort offer O(N log N) time complexity on average.",
    },
    searching: {
      explanation: "Searching algorithms find the position of a target value within a data set. Linear search checks every element (O(N)). Binary search relies on sorted data, checking the middle element and halving the search space repeatedly (O(log N)).",
    },
    dynamicprogramming: {
      explanation: "Dynamic Programming (DP) solves complex problems by breaking them down into simpler subproblems. It solves each subproblem just once and stores the result (memoization or tabulation) to avoid redundant computations. Often used for optimization problems.",
    },
  },
};
