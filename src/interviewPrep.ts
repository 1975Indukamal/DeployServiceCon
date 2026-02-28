interface QA {
  q: string;
  a: string;
  oneLiner?: string;
  code?: string;
  hinglish?: string;
}

export const interviewQA: Record<string, Record<string, QA[]>> = {
  react: {
    Beginner: [
      { q: "What is React?", a: "React is a JavaScript library developed by Facebook for building user interfaces using a component-based architecture. It uses a virtual DOM for efficient updates and supports declarative UI patterns. Components are reusable building blocks — each manages its own state and renders UI based on data.", oneLiner: "A JS library for building UIs with components and virtual DOM.", hinglish: "React ek JavaScript library hai jo UI banane ke liye use hoti hai. Facebook ne banaya hai. Isme hum components bana ke UI design karte hain. Virtual DOM use karta hai jisse page fast update hota hai. Har component apna state rakhta hai aur data ke basis pe UI render karta hai.",
        code: `// Basic React component
import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Welcome name="Rahul" />` },
      { q: "What is JSX?", a: "JSX is a syntax extension that lets you write HTML-like code in JavaScript. It gets compiled to React.createElement() calls by Babel. JSX makes component templates more intuitive and readable. You can embed any JavaScript expression inside curly braces {}.", oneLiner: "HTML-like syntax in JS that compiles to React.createElement().", hinglish: "JSX ek syntax hai jisme hum HTML jaisa code JavaScript mein likh sakte hain. Babel ise React.createElement() mein convert karta hai. Curly braces {} mein koi bhi JS expression likh sakte ho.",
        code: `// JSX
const element = <h1>Hello, {name}!</h1>;

// What Babel converts it to:
const element = React.createElement('h1', null, 'Hello, ' + name + '!');

// JSX with expressions
const greeting = <p>2 + 2 = {2 + 2}</p>; // renders: 2 + 2 = 4` },
      { q: "What are props?", a: "Props (short for properties) are read-only inputs passed from parent to child components. They enable component reusability and data flow in a top-down (unidirectional) pattern. Props can be any JS value — strings, numbers, objects, functions, even other components.", oneLiner: "Read-only data passed from parent to child components.", hinglish: "Props parent se child component ko data bhejne ka tarika hai, aur ye read-only hote hain. Isse component reuse ho sakta hai. Koi bhi JS value — string, number, object, function — prop ke roop mein bhej sakte ho.",
        code: `function UserCard({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span>⭐ Admin</span>}
    </div>
  );
}

// Parent passes props
<UserCard name="Rahul" age={25} isAdmin={true} />` },
      { q: "What is the virtual DOM? How does React use it to render the UI?", a: "The virtual DOM is an in-memory JavaScript representation of the real DOM. When state changes, React creates a new virtual DOM tree, compares (diffs) it with the previous one, and applies only the minimal necessary updates to the actual DOM. This is faster than directly manipulating the DOM because DOM operations are expensive.", oneLiner: "In-memory DOM copy that React diffs for efficient real DOM updates.", hinglish: "Virtual DOM ek lightweight copy hai real DOM ki jo memory mein rehti hai. React pehle virtual DOM update karta hai, phir real DOM se compare karke sirf changes apply karta hai. Isse direct DOM manipulation se fast hota hai.",
        code: `// React internally does something like this:
// Step 1: State changes
setState({ count: 1 });

// Step 2: React creates new Virtual DOM
// <div><p>Count: 1</p></div>

// Step 3: Compares with old Virtual DOM
// <div><p>Count: 0</p></div>

// Step 4: Only updates the text node "0" → "1" in real DOM
// This is called "Reconciliation"` },
      { q: "What is the difference between state and props?", a: "Props are passed from parent components and are read-only — the child cannot modify them. State is managed within a component using useState hook and can be updated, which triggers re-renders. Props flow down, state is local.", oneLiner: "Props = external read-only data; State = internal mutable data.", hinglish: "Props bahar se aata hai (parent se) aur change nahi kar sakte. State andar ka data hai jo component khud manage karta hai aur change ho sakta hai. Props neeche flow karte hain, state local hota hai.",
        code: `function Counter({ initialCount }) { // initialCount is a PROP
  const [count, setCount] = useState(initialCount); // count is STATE

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* We can change state but NOT props */}
    </div>
  );
}

<Counter initialCount={0} /> // Parent passes prop` },
      { q: "What are the different ways to style a React component?", a: "1) Inline styles using style={{}} prop with camelCase properties. 2) Regular CSS files imported into components. 3) CSS Modules for scoped class names. 4) CSS-in-JS libraries like styled-components or Emotion. 5) Utility-first frameworks like Tailwind CSS. Each has trade-offs in terms of scoping, performance, and developer experience.", oneLiner: "Inline styles, CSS files, CSS Modules, styled-components, Tailwind CSS.", hinglish: "React mein styling ke kai tarike hain — inline styles, CSS files, CSS modules, styled-components, aur Tailwind CSS. Har ek ke apne pros aur cons hain.",
        code: `// 1. Inline styles
<div style={{ backgroundColor: 'blue', padding: '10px' }}>Inline</div>

// 2. CSS file (import './styles.css')
<div className="card">CSS File</div>

// 3. CSS Modules (import styles from './Card.module.css')
<div className={styles.card}>CSS Module</div>

// 4. Styled-components
const StyledCard = styled.div\`
  background: blue;
  padding: 10px;
\`;
<StyledCard>Styled Component</StyledCard>

// 5. Tailwind CSS
<div className="bg-blue-500 p-4">Tailwind</div>` },
      { q: "What are the advantages of React compared to Vanilla JS?", a: "React offers: 1) Component-based architecture for reusability. 2) Virtual DOM for efficient updates instead of manual DOM manipulation. 3) Declarative syntax — describe what UI should look like, React handles how. 4) One-way data flow for predictable state. 5) Rich ecosystem (React Router, Redux, etc). 6) Large community and tooling support.", oneLiner: "Components, Virtual DOM, declarative syntax, one-way data flow, rich ecosystem.", hinglish: "React mein component reuse kar sakte ho, virtual DOM fast hai, aur state management easy hai. Vanilla JS mein sab manually karna padta hai. Ecosystem bhi bahut bada hai." },
      { q: "Why does React use className over class attribute?", a: "In JavaScript, 'class' is a reserved keyword used for ES6 class declarations. Since JSX is compiled to JavaScript, using 'class' directly would cause conflicts. React uses 'className' which maps to the DOM property element.className. Similarly, 'for' becomes 'htmlFor' in JSX.", oneLiner: "'class' is a reserved JS keyword; className maps to the DOM property.", hinglish: "'class' ek reserved keyword hai JavaScript mein (class MyComponent {}), isliye React mein 'className' use karte hain. Similarly 'for' ko 'htmlFor' likhte hain.",
        code: `// ❌ Wrong — 'class' is reserved in JS
<div class="card">Hello</div>

// ✅ Correct — use className
<div className="card">Hello</div>

// Similarly:
// ❌ <label for="name">
// ✅ <label htmlFor="name">` },
      { q: "What is children prop? When should we use it? Give an example.", a: "The children prop is a special prop that contains whatever you put between a component's opening and closing tags. It's useful for creating wrapper/layout components, modal dialogs, cards, or any component that needs to render arbitrary content passed by the parent.", oneLiner: "Content between component tags; used for wrapper/container components.", hinglish: "children prop wo content hai jo aap component ke opening aur closing tags ke beech mein likhte ho. Ye tab use karo jab component ko wrapper ya container banana ho.",
        code: `// Card wrapper component
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children} {/* Whatever is passed between <Card>...</Card> */}
      </div>
    </div>
  );
}

// Usage — anything between tags becomes children
<Card title="Profile">
  <img src="avatar.jpg" />
  <p>Hello, I am Rahul!</p>
  <button>Follow</button>
</Card>` },
      { q: "What are fragments? How are they better than div elements?", a: "React requires a single parent element when returning JSX. Fragments (<React.Fragment> or shorthand <></>) let you group multiple elements without adding an extra DOM node. This avoids unnecessary divs that can break CSS layouts (like Flexbox/Grid) and keeps the DOM cleaner.", oneLiner: "Invisible wrapper that groups elements without adding extra DOM nodes.", hinglish: "Fragments ek invisible wrapper hai jo DOM mein koi extra element nahi add karta. <></> ya <React.Fragment> use karo jab multiple elements return karne ho bina extra div ke.",
        code: `// ❌ Extra div in DOM — can break CSS layouts
function App() {
  return (
    <div> {/* Unnecessary wrapper */}
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}

// ✅ Fragment — no extra DOM element
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// With key (in lists) — use full syntax
{items.map(item => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.desc}</dd>
  </React.Fragment>
))}` },
    ],
    Intermediate: [
      { q: "What is the way for Parent to Child Communication? Give code example.", a: "Parent-to-child communication is done through props. The parent component passes data as attributes to the child component. The child receives these as a props object. This is one-way/unidirectional data flow — the core principle of React.", oneLiner: "Pass data via props from parent to child component.", hinglish: "Parent se child ko data bhejne ka sabse simple tarika props hai. Parent apne child component ko props pass karta hai aur child use receive karta hai.",
        code: `// Parent Component
function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");
  
  return (
    <div>
      <Child greeting={message} userName="Rahul" />
    </div>
  );
}

// Child Component — receives props
function Child({ greeting, userName }) {
  return (
    <div>
      <p>{greeting}</p>
      <p>Welcome, {userName}!</p>
    </div>
  );
}` },
      { q: "What are the ways to communicate from Child to Parent? Give code example.", a: "Child-to-parent communication is achieved by passing a callback function from parent to child as a prop. The child calls this function with data as arguments. This maintains unidirectional data flow — the child doesn't directly modify parent state, it just 'notifies' the parent.", oneLiner: "Parent passes callback function as prop; child calls it with data.", hinglish: "Child se parent ko data bhejne ke liye parent ek callback function prop mein pass karta hai, aur child us function ko call karta hai data ke saath.",
        code: `// Parent Component
function Parent() {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data); // Parent receives data from child
  };

  return (
    <div>
      <p>Child said: {childData}</p>
      <Child onSendData={handleChildData} />
    </div>
  );
}

// Child Component — calls parent's callback
function Child({ onSendData }) {
  return (
    <button onClick={() => onSendData("Hello Parent!")}>
      Send to Parent
    </button>
  );
}` },
      { q: "What are the ways to communicate between Sibling components?", a: "Sibling components can communicate through: 1) Lifting state up — move shared state to the nearest common parent and pass down as props. 2) Context API — for deeply nested or widely shared state. 3) State management libraries (Redux, Zustand). 4) React Router for URL-based data sharing.", oneLiner: "Lift state to common parent, use Context API, or state management libraries.", hinglish: "Siblings directly baat nahi kar sakte. Unke common parent ke through state share hota hai — ise 'lifting state up' kehte hain. Ya phir Context API ya Redux use karo.",
        code: `// Lifting State Up — Parent manages shared state
function Parent() {
  const [sharedData, setSharedData] = useState("Hello");

  return (
    <div>
      {/* Sibling A sends data */}
      <SiblingA onUpdate={setSharedData} />
      {/* Sibling B receives data */}
      <SiblingB data={sharedData} />
    </div>
  );
}

function SiblingA({ onUpdate }) {
  return <input onChange={(e) => onUpdate(e.target.value)} />;
}

function SiblingB({ data }) {
  return <p>From Sibling A: {data}</p>;
}` },
      { q: "What are Higher Order Components (HOC) in React? Explain with code example.", a: "A Higher Order Component is a pattern where a function takes a component and returns a new component with additional props or behavior. It's used for cross-cutting concerns like authentication checks, logging, loading states, etc. HOCs don't modify the original component — they compose it.", oneLiner: "Function that takes a component and returns an enhanced component.", hinglish: "HOC ek function hai jo ek component leta hai aur ek naya enhanced component return karta hai — jaise ek wrapper jo extra features add kar de. Authentication, loading states ke liye use hota hai.",
        code: `// HOC that adds loading state
function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
}

// Original component
function UserList({ users }) {
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// Enhanced component with loading
const UserListWithLoading = withLoading(UserList);

// Usage
<UserListWithLoading isLoading={true} users={[]} />
<UserListWithLoading isLoading={false} users={userData} />` },
      { q: "What are the different phases of the component lifecycle?", a: "1) Mounting: Component is created and inserted into DOM (constructor → render → componentDidMount / useEffect with []). 2) Updating: Component re-renders due to state/prop changes (render → componentDidUpdate / useEffect with deps). 3) Unmounting: Component is removed from DOM (componentWillUnmount / useEffect cleanup function).", oneLiner: "Mounting (insert) → Updating (re-render) → Unmounting (remove).", hinglish: "Component ki 3 phases hoti hain — Mounting (DOM mein add hona), Updating (re-render hona), Unmounting (DOM se remove hona). Hooks mein useEffect se sab handle hota hai.",
        code: `// Using useEffect for lifecycle phases
function Timer() {
  const [count, setCount] = useState(0);

  // MOUNTING — runs once when component mounts
  useEffect(() => {
    console.log("Component mounted!");
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // UNMOUNTING — cleanup runs when component unmounts
    return () => {
      console.log("Component unmounting, clearing timer");
      clearInterval(timer);
    };
  }, []); // Empty array = mount only

  // UPDATING — runs every time count changes
  useEffect(() => {
    console.log("Count updated to:", count);
    document.title = \`Count: \${count}\`;
  }, [count]); // Runs when count changes

  return <p>Count: {count}</p>;
}` },
      { q: "What are custom hooks in React? Can you design one?", a: "Custom hooks are JavaScript functions starting with 'use' that can call other hooks. They extract reusable stateful logic from components. Unlike HOCs or render props, they don't add extra nesting. Common examples: useLocalStorage, useFetch, useDebounce, useWindowSize.", oneLiner: "Reusable functions starting with 'use' that encapsulate stateful logic.", hinglish: "Custom hooks apne banaye hue functions hain jo 'use' se start hote hain aur React hooks use karte hain. Inka kaam hai reusable logic ko alag file mein rakhna. Jaise useFetch, useDebounce.",
        code: `// Custom hook — useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in any component — clean & reusable!
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{data.name}</h1>;
}` },
      { q: "Explain the useEffect hook in detail.", a: "useEffect handles side effects in function components. It runs after render. With no dependency array, it runs after every render. With an empty array [], it runs once on mount. With dependencies [a, b], it runs when those values change. It can return a cleanup function that runs before the next effect or on unmount.", oneLiner: "Hook for side effects that runs after render based on dependencies.", hinglish: "useEffect side effects handle karta hai — jaise API calls, timers, ya DOM changes. Ye render ke baad run hota hai. Dependency array se control karte hain ki kab re-run ho. Cleanup function return kar sakte ho.",
        code: `// 1. Runs after EVERY render (no dependency array)
useEffect(() => {
  console.log("Runs after every render");
});

// 2. Runs ONCE on mount (empty array)
useEffect(() => {
  console.log("Runs once on mount");
  return () => console.log("Cleanup on unmount");
}, []);

// 3. Runs when 'query' changes
useEffect(() => {
  console.log("Query changed to:", query);
  fetchResults(query);
}, [query]);

// 4. Can useEffect return anything? YES — a cleanup function!
useEffect(() => {
  const ws = new WebSocket("ws://example.com");
  ws.onmessage = (e) => setMessages(prev => [...prev, e.data]);
  
  return () => ws.close(); // Cleanup: close connection
}, []);` },
      { q: "What is React Context API? When should we use it? How does it work?", a: "Context provides a way to share values between components without passing props through every level. Create context with createContext(), wrap components with Provider, and consume with useContext(). Best for themes, user auth, language settings. NOT a replacement for all state management — use for 'global' data that many components need.", oneLiner: "API to share data across components without prop drilling.", hinglish: "Context API ek tarika hai data ko bina props drilling ke deep components tak pohchane ka. Jab bahut nested components ko same data chahiye tab use karo. Theme, auth, language settings ke liye best hai.",
        code: `// 1. Create Context
const ThemeContext = React.createContext('light');

// 2. Provider — wraps the tree
function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

// 3. Consumer — any nested component can access
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme: {theme}
      </button>
    </header>
  );
}` },
      { q: "What is React Router? When should we use it? Give code example.", a: "React Router enables client-side routing in React applications. It maps URLs to components, enabling navigation without full page reloads. Key components: BrowserRouter, Routes, Route, Link, useNavigate, useParams. Use it whenever your app needs multiple views/pages.", oneLiner: "Library for client-side routing — maps URLs to components without page reload.", hinglish: "React Router ek library hai jo React app mein multiple pages (routes) banane deti hai bina page reload ke. SPA (Single Page App) mein navigation ke liye use hota hai.",
        code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/42">User 42</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { id } = useParams(); // Get URL param
  return <h1>User ID: {id}</h1>;
}` },
      { q: "What is useCallback? When should we use it?", a: "useCallback returns a memoized version of the callback that only changes if dependencies change. It's useful when passing callbacks to child components wrapped in React.memo, preventing unnecessary re-renders caused by new function references on every parent render.", oneLiner: "Memoizes a function reference to prevent unnecessary child re-renders.", hinglish: "useCallback ek hook hai jo function ko memoize karta hai — matlab same function reference rakhta hai jab tak dependencies change na ho. Ye tab use karo jab child component ko function prop pass kar rahe ho aur unnecessary re-renders rokne ho.",
        code: `// ❌ Without useCallback — new function every render
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => console.log("clicked");
  // handleClick is a NEW function reference every render
  // causes Child to re-render even with React.memo
  
  return <Child onClick={handleClick} />;
}

// ✅ With useCallback — same reference until deps change
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // Same reference across renders
  
  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});` },
      { q: "What does useMemo do? Give code example.", a: "useMemo memoizes the return value of a function. It recalculates only when dependencies change. Use it for expensive computations (sorting, filtering large lists, complex math) to avoid recalculating on every render. Don't overuse it — only for genuinely expensive operations.", oneLiner: "Caches expensive computation results; recalculates only when deps change.", hinglish: "useMemo ek hook hai jo expensive calculation ka result cache karta hai. Jab tak dependencies change na ho, wahi cached value return karta hai — har render mein dubara calculate nahi karta.",
        code: `function ProductList({ products, searchQuery }) {
  // ❌ Without useMemo — filters on EVERY render
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ With useMemo — only recalculates when products or query change
  const filtered = useMemo(() => {
    console.log("Filtering..."); // Only logs when deps change
    return products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}` },
      { q: "Difference between React.memo and useMemo?", a: "React.memo is a HOC that wraps a component and prevents re-renders when props haven't changed (shallow comparison). useMemo is a hook that memoizes a computed value inside a component. React.memo works at the component level; useMemo works at the value level.", oneLiner: "React.memo = memoize component rendering; useMemo = memoize computed value.", hinglish: "React.memo component ko memoize karta hai (re-render rokta hai agar props same hain). useMemo value ko memoize karta hai (expensive calculation ka result cache karta hai). Dono alag cheezein hain!",
        code: `// React.memo — prevents component re-render
const ExpensiveChild = React.memo(({ data }) => {
  console.log("Child rendered"); // Only when 'data' prop changes
  return <div>{data}</div>;
});

// useMemo — prevents expensive recalculation
function Parent({ items }) {
  const sortedItems = useMemo(() => {
    console.log("Sorting..."); // Only when 'items' changes
    return [...items].sort((a, b) => a.price - b.price);
  }, [items]);

  return <ExpensiveChild data={sortedItems} />;
}

// Summary:
// React.memo → wraps COMPONENT → skips re-render
// useMemo    → wraps VALUE    → skips recalculation
// useCallback → wraps FUNCTION → keeps same reference` },
      { q: "What is the use of Babel?", a: "Babel is a JavaScript compiler/transpiler. It converts modern JS (ES6+) and JSX into backward-compatible JavaScript. In React, Babel converts JSX to React.createElement() calls. It also handles features like optional chaining, async/await, and decorators for older browser support.", oneLiner: "JS compiler that converts modern JS/JSX to backward-compatible code.", hinglish: "Babel ek tool hai jo modern JavaScript aur JSX ko purane browsers samajh sakein aisi JavaScript mein convert karta hai." },
      { q: "What are controlled and uncontrolled components? What are the differences?", a: "Controlled components have their form data managed by React state — every keystroke updates state via onChange. Uncontrolled components let the DOM manage form data, accessed via useRef. Controlled gives you full control over validation and formatting; uncontrolled is simpler for basic forms.", oneLiner: "Controlled = React state manages value; Uncontrolled = DOM + ref manages value.", hinglish: "Controlled mein React state input ki value control karta hai. Uncontrolled mein DOM khud handle karta hai, hum ref se value lete hain. Controlled zyada predictable hai.",
        code: `// Controlled Component
function ControlledForm() {
  const [name, setName] = useState("");
  return (
    <input 
      value={name}  // React controls the value
      onChange={(e) => setName(e.target.value)} 
    />
  );
}

// Uncontrolled Component  
function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    alert(inputRef.current.value); // Read from DOM
  };
  return (
    <>
      <input ref={inputRef} defaultValue="Hello" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}` },
      { q: "Name a few techniques to optimize React app performance. Explain with code examples.", a: "Key optimization techniques: 1) React.memo to prevent unnecessary re-renders. 2) useMemo for expensive calculations. 3) useCallback for stable function references. 4) React.lazy + Suspense for code splitting. 5) Virtualization (react-window) for long lists. 6) Proper key props in lists. 7) Debouncing user input.", oneLiner: "React.memo, useMemo, useCallback, lazy loading, virtualization, debouncing.", hinglish: "React.memo, useMemo, useCallback, lazy loading, virtualization, aur code splitting — ye sab techniques React app fast banati hain. Proper keys aur debouncing bhi important hai.",
        code: `// 1. Code Splitting with React.lazy
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <HeavyChart />
    </Suspense>
  );
}

// 2. Virtualization for long lists (react-window)
import { FixedSizeList } from 'react-window';
function BigList({ items }) {
  return (
    <FixedSizeList height={400} itemCount={items.length} itemSize={50}>
      {({ index, style }) => (
        <div style={style}>{items[index].name}</div>
      )}
    </FixedSizeList>
  );
}

// 3. Debounce search input
function Search() {
  const [query, setQuery] = useState("");
  const debouncedSearch = useMemo(
    () => debounce((q) => fetchResults(q), 300),
    []
  );
  return <input onChange={(e) => debouncedSearch(e.target.value)} />;
}` },
    ],
    Advanced: [
      { q: "What is reconciliation in React?", a: "Reconciliation is React's algorithm for diffing two virtual DOM trees. When state/props change, React creates a new virtual DOM tree and compares it with the previous one. Rules: 1) Elements of different types = full rebuild. 2) Same type = update attributes. 3) Keys help identify which items changed in lists. This O(n) algorithm makes React fast.", oneLiner: "Diffing algorithm that compares virtual DOM trees for minimal updates.", hinglish: "Reconciliation wo process hai jisme React purane aur naye Virtual DOM ko compare karta hai aur sirf differences ko real DOM mein update karta hai. Keys se React samajhta hai kaunsa item change hua.",
        code: `// How React reconciles lists — Keys matter!

// ❌ Without keys — React re-renders everything
<ul>
  {items.map(item => <li>{item.name}</li>)}
</ul>

// ✅ With keys — React knows which items changed
<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>

// Why keys matter:
// Before: [A, B, C]
// After:  [A, C]
// With keys: React knows B was removed (efficient)
// Without keys: React re-renders everything (wasteful)` },
      { q: "How does React Fiber work?", a: "Fiber is React's reconciliation engine (introduced in React 16) that enables incremental rendering. Instead of processing the entire component tree in one go (blocking the main thread), Fiber breaks work into 'fiber nodes' — units of work that can be paused, aborted, or reused. It enables: time-slicing (splitting work across frames), priority-based updates (user interactions > data fetching), Suspense, and concurrent mode.", oneLiner: "Reconciliation engine enabling pausable, prioritized, incremental rendering.", hinglish: "Fiber React ka naya rendering engine hai jo kaam ko chhote-chhote pieces mein todta hai. Ye kaam ko pause, resume, aur prioritize kar sakta hai — jaise urgent UI updates pehle aur heavy calculations baad mein.",
        code: `// Fiber enables Concurrent Features

// 1. useTransition — mark updates as non-urgent
function SearchPage() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setQuery(e.target.value); // Urgent: update input immediately
    startTransition(() => {
      setSearchResults(e.target.value); // Non-urgent: can be interrupted
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending ? <p>Searching...</p> : <Results />}
    </>
  );
}

// 2. useDeferredValue — defer expensive renders
function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <HeavyList filter={deferredText} /> {/* Uses deferred value */}
    </>
  );
}` },
      { q: "Explain types of side effects in React components.", a: "Side effects are operations that affect something outside the component's render scope. Effects without cleanup: API calls, DOM mutations, logging. Effects with cleanup: subscriptions, timers, event listeners, WebSocket connections. Always return a cleanup function for effects that need teardown to prevent memory leaks.", oneLiner: "Without cleanup (API calls, logging) and with cleanup (timers, subscriptions).", hinglish: "Side effects do tarah ke hote hain — 1) Effects without cleanup (API calls, logging) aur 2) Effects with cleanup (timers, subscriptions, event listeners). Cleanup function return karo taaki memory leaks na ho.",
        code: `// Effect WITHOUT cleanup — API call
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

// Effect WITH cleanup — Event listener
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
  // ↑ Cleanup: remove listener on unmount
}, []);

// Effect WITH cleanup — Timer
useEffect(() => {
  const interval = setInterval(() => tick(), 1000);
  return () => clearInterval(interval); // Cleanup
}, []);

// Effect WITH cleanup — WebSocket
useEffect(() => {
  const ws = new WebSocket('ws://chat.example.com');
  ws.onmessage = (e) => addMessage(e.data);
  return () => ws.close(); // Cleanup: close connection
}, []);` },
      { q: "What is Redux? Why do we need it?", a: "Redux is a predictable state container for JS apps. It stores the entire app state in a single store, updated only through dispatched actions processed by pure reducer functions. Why Redux over Context? 1) Better performance (no unnecessary re-renders). 2) DevTools for time-travel debugging. 3) Middleware support (thunks, sagas). 4) Better for complex state with many interactions.", oneLiner: "Predictable state container: single store, actions, reducers, middleware.", hinglish: "Redux ek state management library hai jo puri app ka state ek jagah (store) mein rakhti hai. Jab bahut saare components ko same data chahiye aur Context API slow ho jaye tab Redux use karo.",
        code: `// Redux Flow: Action → Reducer → Store → UI

// 1. Action — what happened
const increment = { type: 'counter/increment', payload: 1 };

// 2. Reducer — how state changes (PURE function)
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'counter/increment':
      return { count: state.count + action.payload };
    case 'counter/decrement':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

// 3. Store — holds the state tree
const store = createStore(counterReducer);

// 4. Dispatch actions
store.dispatch({ type: 'counter/increment', payload: 5 });
console.log(store.getState()); // { count: 5 }` },
      { q: "Why is Redux better than Context API? When to use which?", a: "Context API re-renders ALL consumers when value changes — bad for frequent updates. Redux uses connect/useSelector for granular subscriptions — only affected components re-render. Redux also offers: middleware (async logic), DevTools (time-travel debugging), and predictable patterns for large teams.", oneLiner: "Redux = complex state, frequent updates, devtools; Context = simple shared state.", hinglish: "Context API simple apps ke liye best hai (theme, auth). Redux complex apps ke liye jahan bahut state interactions hain, frequent updates hain, aur debugging chahiye. Context har change pe sabhi consumers re-render karti hai.",
        code: `// Context API — re-renders ALL consumers on ANY change
const AppContext = React.createContext();

// If user.name changes, even components using user.theme re-render!
<AppContext.Provider value={{ user, theme, settings }}>
  <App />
</AppContext.Provider>

// Redux — granular subscriptions
// Only re-renders when 'count' specifically changes
function Counter() {
  const count = useSelector(state => state.counter.count);
  return <p>{count}</p>;
}

// When to use Context:
// ✅ Theme, language, auth status (infrequent changes)
// ✅ Small apps with few shared states

// When to use Redux:
// ✅ Complex state with many interactions
// ✅ Frequent state updates
// ✅ Need for middleware, devtools, time-travel
// ✅ Large teams needing predictable patterns` },
      { q: "What is Flux architecture?", a: "Flux is a design pattern by Facebook for managing data flow in React apps. It enforces unidirectional data flow: Actions (describe what happened) → Dispatcher (routes actions to stores) → Stores (hold state & logic) → Views (React components). Redux simplified Flux by having a single store and pure reducers instead of a dispatcher.", oneLiner: "Unidirectional data flow pattern: Action → Dispatcher → Store → View.", hinglish: "Flux ek architecture pattern hai jisme data ek hi direction mein flow karta hai: Action → Dispatcher → Store → View. Redux Flux se inspired hai." },
      { q: "What are the core principles of Redux?", a: "1) Single Source of Truth — entire app state in one store object. 2) State is Read-Only — only way to change state is dispatching an action. 3) Changes are Made with Pure Functions — reducers are pure functions (same input = same output, no side effects) that take previous state + action and return new state.", oneLiner: "Single store, read-only state, changes via pure reducer functions.", hinglish: "Redux ke 3 principles hain: 1) Single source of truth (ek hi store), 2) State is read-only (sirf actions se change hota hai), 3) Changes via pure functions (reducers). Simple aur predictable." },
      { q: "What are Redux Actions, Reducers, and Store methods? Explain with examples.", a: "Actions are plain objects with a 'type' field describing the event. Action creators are functions that return actions. Reducers are pure functions (state, action) => newState. Store methods: getState() returns current state, dispatch(action) triggers state change, subscribe(listener) registers callbacks, replaceReducer() for code splitting.", oneLiner: "Actions = event objects, Reducers = pure state transformers, Store = state holder.", hinglish: "Actions batate hain 'kya hua' (events), Reducers batate hain 'state kaise change hoga' (pure functions), Store state rakhta hai aur methods deta hai (getState, dispatch, subscribe).",
        code: `// ACTION CREATORS
const addTodo = (text) => ({ type: 'ADD_TODO', payload: { text, id: Date.now() } });
const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', payload: id });

// REDUCER
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ...action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

// STORE METHODS
const store = createStore(todosReducer);

store.getState();           // [] — read current state
store.dispatch(addTodo("Learn Redux")); // trigger change
store.subscribe(() => {     // listen to changes
  console.log("State changed:", store.getState());
});` },
      { q: "What are Redux Middlewares? What are they used for?", a: "Middleware intercepts dispatched actions before they reach the reducer. It's used for: 1) Async operations (redux-thunk, redux-saga). 2) Logging (redux-logger). 3) Crash reporting. 4) API calls. Middleware has access to dispatch and getState, enabling complex async flows.", oneLiner: "Functions between action dispatch and reducer; used for async logic, logging.", hinglish: "Middleware Redux mein action aur reducer ke beech mein baithta hai. Ye async operations (API calls), logging, error handling jaise kaam karta hai. Sabse popular middleware hai Redux Thunk.",
        code: `// Redux Thunk — enables async actions
// Normal action creator returns an object
const fetchUser = (id) => ({ type: 'FETCH_USER', payload: id });

// Thunk action creator returns a FUNCTION
const fetchUserAsync = (id) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_USER_START' });
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    const user = await res.json();
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
  }
};

// Custom Logger Middleware
const logger = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action); // Pass to next middleware/reducer
  console.log('New State:', store.getState());
  return result;
};

// Apply middleware
const store = createStore(reducer, applyMiddleware(thunk, logger));` },
      { q: "Things you should never do inside a Redux reducer?", a: "Never: 1) Mutate the existing state (always return new objects). 2) Make API calls or async operations. 3) Call non-pure functions (Date.now(), Math.random()). 4) Modify arguments. 5) Perform side effects (logging to external services, saving to localStorage). Reducers must be deterministic — same input = same output, always.", oneLiner: "No mutations, no API calls, no randomness, no side effects — pure functions only.", hinglish: "Reducer ke andar kabhi mutate mat karo, API call mat karo, random values mat use karo, aur side effects mat karo. Reducer hamesha pure function hona chahiye.",
        code: `// ❌ NEVER do these in a reducer:

// 1. Don't mutate state
function badReducer(state, action) {
  state.count += 1;    // ❌ Mutation!
  return state;
}

// ✅ Return NEW state
function goodReducer(state, action) {
  return { ...state, count: state.count + 1 }; // ✅ New object
}

// 2. Don't do async/side effects
function badReducer(state, action) {
  fetch('/api/save', { body: JSON.stringify(state) }); // ❌
  localStorage.setItem('state', JSON.stringify(state)); // ❌
  console.log(Date.now()); // ❌ Non-deterministic
}

// 3. Don't use random values
function badReducer(state, action) {
  return { ...state, id: Math.random() }; // ❌ Non-deterministic
}` },
      { q: "Explain the React-Redux data flow (Redux lifecycle).", a: "1) User interacts with UI (click, submit). 2) Component dispatches an action. 3) Middleware intercepts (async, logging). 4) Reducer processes action, returns new state. 5) Store updates with new state. 6) Connected components (useSelector) re-render with new data. This is unidirectional data flow.", oneLiner: "UI Event → dispatch(action) → middleware → reducer → store update → UI re-render.", hinglish: "User click → Action dispatch hota hai → Middleware process karta hai → Reducer naya state return karta hai → Store update hota hai → Connected components re-render hote hain." },
      { q: "What is React Fiber? Explain in detail.", a: "React Fiber is the reimplementation of React's core algorithm. The old 'Stack' reconciler processed the component tree synchronously, blocking the main thread. Fiber introduces: 1) Incremental rendering — splits work into units (fibers). 2) Priority scheduling — urgent updates (user input) interrupt less important work. 3) Concurrent features — useTransition, useDeferredValue, Suspense. Each fiber node represents a unit of work with links to parent, child, and sibling.", oneLiner: "Internal engine for incremental, priority-based rendering with concurrent features.", hinglish: "Fiber React ka internal engine hai (React 16 se). Ye rendering ko chhote chunks mein todta hai, urgent updates (typing) ko pehle karta hai aur heavy kaam baad mein — isse app smooth rehti hai.",
        code: `// Fiber enables these concurrent features:

// 1. Suspense — wait for async data
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent /> {/* Fiber pauses rendering until ready */}
    </Suspense>
  );
}

// 2. useTransition — non-blocking updates  
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setHeavyState(newValue); // Won't block user input
});

// 3. Fiber Node Structure (simplified)
// {
//   type: 'div',
//   stateNode: domElement,
//   child: firstChildFiber,
//   sibling: nextSiblingFiber,
//   return: parentFiber,
//   pendingProps: {...},
//   memoizedState: {...},
//   effectTag: 'UPDATE',
// }` },
      { q: "What is the Singleton pattern in React?", a: "The Singleton pattern ensures a class has only one instance with a global access point. In React, this concept applies to: 1) Redux store — single store for entire app. 2) Module-level variables — imported modules are cached, so a module exporting an instance acts as a singleton. 3) Context — provides a single source of shared state.", oneLiner: "Pattern ensuring only one instance exists; in React: Redux store, module-level state.", hinglish: "Singleton ek pattern hai jisme ek class ya module ka sirf EK hi instance hota hai puri app mein. React mein store (Redux), context, ya module-level variables Singleton ki tarah kaam karte hain.",
        code: `// Singleton via Module (most common in React)
// apiClient.js — imported anywhere, same instance
class ApiClient {
  constructor() {
    if (ApiClient.instance) return ApiClient.instance;
    this.baseURL = '/api';
    this.token = null;
    ApiClient.instance = this;
  }
  setToken(token) { this.token = token; }
  async get(url) {
    return fetch(this.baseURL + url, {
      headers: { Authorization: \`Bearer \${this.token}\` }
    });
  }
}

export const api = new ApiClient();

// Both imports use the SAME instance
// import { api } from './apiClient'; // Component A
// import { api } from './apiClient'; // Component B
// api.setToken('abc'); // Both see the same token` },
      { q: "What is React Query (TanStack Query)? How does it help?", a: "React Query manages server state (data from APIs) separately from client state. Features: 1) Automatic caching and cache invalidation. 2) Background refetching (stale-while-revalidate). 3) Pagination and infinite scroll support. 4) Optimistic updates. 5) Automatic retry on failure. 6) DevTools for debugging. It replaces most useState + useEffect patterns for data fetching.", oneLiner: "Server state management: caching, background refresh, auto retry, loading states.", hinglish: "React Query ek library hai jo server state management handle karti hai — data fetching, caching, background refresh, aur loading/error states automatic karta hai. useState + useEffect se bahut better hai API calls ke liye.",
        code: `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 1. Fetching data (replaces useState + useEffect)
function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],     // Cache key
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    staleTime: 5 * 60 * 1000,      // Cache for 5 minutes
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <h1>{data.name}</h1>;
}

// 2. Mutation with cache invalidation
function AddUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newUser) => fetch('/api/users', {
      method: 'POST', body: JSON.stringify(newUser)
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      // ↑ Automatically refetches users list!
    },
  });

  return <button onClick={() => mutation.mutate({ name: "Rahul" })}>Add</button>;
}` },
      { q: "What are React Server Components?", a: "Server Components render on the server without shipping JavaScript to the client. They can directly access backend resources (database, file system), reduce bundle size, and improve initial load performance. They're different from SSR — Server Components never re-render on the client. Use 'use client' directive for interactive components.", oneLiner: "Components that render server-side with zero client JS, accessing backend directly.", hinglish: "Server Components server pe render hote hain aur client ko zero JavaScript bhejte hain. Ye backend resources directly access kar sakte hain. Client Components interactive hote hain (useState, onClick)." },
    ],
    CodingOutput: [
      {
        q: "What will be the output?",
        a: "Due to hoisting, 'var x' is moved to the top of the function scope but the assignment '= 10' stays in place. So when console.log(x) runs, x exists but hasn't been assigned yet, giving undefined.",
        oneLiner: "var hoisting: declaration moves up, assignment stays — x is undefined.",
        hinglish: "Output 'undefined' aayega kyunki var hoisting mein variable declare hota hai par value assign nahi hoti — console.log ke time x undefined hai.",
        code: `console.log(x);  // Output: undefined
var x = 10;
console.log(x);  // Output: 10

// Why? JavaScript hoists it as:
// var x;            ← declaration hoisted
// console.log(x);   ← undefined (declared but not assigned)
// x = 10;           ← assignment stays here
// console.log(x);   ← 10`
      },
      {
        q: "What is the output of this React code?",
        a: "React batches state updates. When you call setCount(count + 1), the new value isn't available immediately in the same render cycle. The console.log still shows the old value. To get updated value, use useEffect with count as dependency or use the functional form setCount(prev => prev + 1).",
        oneLiner: "setState is async — console.log shows old value in same render cycle.",
        hinglish: "setState asynchronous hai React mein. setCount ke turant baad count ki purani value milegi, naye value ke liye re-render ka wait karna hoga.",
        code: `function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // Output: 0 (not 1!)
    // State update is async, count still shows old value
  };

  return <button onClick={handleClick}>Count: {count}</button>;
}

// To see updated value:
useEffect(() => {
  console.log("Updated count:", count); // Correct!
}, [count]);`
      },
      {
        q: "What happens when you call setState multiple times?",
        a: "React batches multiple setState calls in the same event handler. Using count + 1 three times uses the same stale closure value. Using the functional form (prev => prev + 1) uses the latest state each time.",
        oneLiner: "Direct value = same stale reference (batched); functional form = latest state.",
        hinglish: "Agar aap setCount(count + 1) teen baar likhoge, toh count sirf 1 badhega kyunki teeno same 'count' value use kar rahe hain. Functional form setCount(prev => prev + 1) use karo tab teen baar badhega.",
        code: `function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // ❌ All three use count = 0, result: count = 1
    setCount(count + 1); // 0 + 1 = 1
    setCount(count + 1); // 0 + 1 = 1 (same count!)
    setCount(count + 1); // 0 + 1 = 1

    // ✅ Functional form — uses latest state, result: count = 3
    setCount(prev => prev + 1); // 0 + 1 = 1
    setCount(prev => prev + 1); // 1 + 1 = 2
    setCount(prev => prev + 1); // 2 + 1 = 3
  };
}`
      },
      {
        q: "What is the output? useEffect with empty vs no dependency array",
        a: "useEffect behavior depends entirely on its dependency array. No array = runs after every render. Empty array [] = runs once after initial mount. Array with values = runs when any dependency changes. This is one of the most common interview questions and source of bugs.",
        oneLiner: "No array = every render; [] = once on mount; [dep] = when dep changes.",
        hinglish: "Empty array [] = sirf ek baar mount pe run hoga. Koi array nahi = har render pe run hoga. Dependencies [a] = jab 'a' change ho tab run hoga.",
        code: `function Example() {
  const [count, setCount] = useState(0);

  // Runs after EVERY render
  useEffect(() => {
    console.log("A: Every render", count);
  }); // No dependency array

  // Runs ONCE on mount
  useEffect(() => {
    console.log("B: Mount only");
  }, []); // Empty array

  // Runs when count changes
  useEffect(() => {
    console.log("C: Count changed", count);
  }, [count]);

  // On first render: A, B, C all log
  // On count change: Only A and C log
  // B never logs again after mount
}`
      },
      {
        q: "What happens with stale closures in useEffect?",
        a: "Closures capture variable values at the time they're created. If useEffect has an empty dependency array but references a state variable, it captures the initial value and never sees updates. This is a common React bug that causes intervals and event listeners to use outdated state.",
        oneLiner: "Closure captures old values when dependencies are missing or incorrect.",
        hinglish: "Agar useEffect mein dependency array nahi diya ya galat dependencies diye toh purani value closure mein phans jaati hai — ise stale closure kehte hain. Functional form use karo fix karne ke liye.",
        code: `function StaleClosureBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // Always logs 0! (stale closure)
      // setCount(count + 1); // Always sets to 1!
    }, 1000);
    return () => clearInterval(interval);
  }, []); // ← Empty array = count captured as 0 forever

  // ✅ Fix: Use functional form
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1); // ✅ Always uses latest
    }, 1000);
    return () => clearInterval(interval);
  }, []);
}`
      },
    ],
    SystemDesign: [
      {
        q: "How would you design an Autocomplete/Search component?",
        a: "Key considerations: 1) Debounce input (300ms) to avoid excessive API calls. 2) Cancel previous requests when new input arrives (AbortController). 3) Cache previous results. 4) Handle loading, empty, and error states. 5) Keyboard navigation (arrow keys, Enter, Escape). 6) Highlight matching text in results. 7) Click outside to close. 8) Accessibility (ARIA roles, screen readers).",
        oneLiner: "Debounced input → API call → cached results → keyboard-navigable dropdown.",
        hinglish: "Input field + debounce + API call + dropdown results. Debounce lagao taaki har keystroke pe API call na ho, sirf jab user type karna band kare tab call ho. Results cache karo aur keyboard navigation add karo.",
        code: `function Autocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(\`/api/search?q=\${query}\`, {
          signal: controller.signal
        });
        const data = await res.json();
        setResults(data);
      } catch (e) {
        if (e.name !== 'AbortError') console.error(e);
      } finally {
        setLoading(false);
      }
    }, 300); // Debounce 300ms

    return () => {
      clearTimeout(timer);
      controller.abort(); // Cancel previous request
    };
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {loading && <p>Searching...</p>}
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </div>
  );
}`
      },
      {
        q: "How would you design Infinite Scroll?",
        a: "Implementation: 1) Use Intersection Observer on a sentinel element at the bottom. 2) When visible, fetch next page of data. 3) Append to existing data (don't replace). 4) Track page number, hasMore flag, and loading state. 5) Consider virtualization for very long lists (react-window). 6) Handle scroll position restoration on navigation.",
        oneLiner: "Intersection Observer on sentinel element → load next page → append data.",
        hinglish: "Page ke bottom pe aane par next page ka data load karo. Intersection Observer API use karo — jab ek 'sentinel' element visible ho tab API call karo. Data append karo, replace mat karo.",
        code: `function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(p => p + 1);
      }
    });
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  useEffect(() => {
    fetch(\`/api/items?page=\${page}\`)
      .then(r => r.json())
      .then(data => {
        setItems(prev => [...prev, ...data.items]); // Append!
        setHasMore(data.hasNextPage);
      });
  }, [page]);

  return (
    <div>
      {items.map(item => <div key={item.id}>{item.name}</div>)}
      {hasMore && <div ref={sentinelRef}>Loading more...</div>}
    </div>
  );
}`
      },
      {
        q: "How would you design a Rate Limiter in frontend?",
        a: "Frontend rate limiting techniques: 1) Debounce — delay execution until user stops triggering (search input). 2) Throttle — execute at most once per interval (scroll events). 3) Request queue — limit concurrent API calls. 4) Token bucket — allow burst but limit sustained rate.",
        oneLiner: "Debounce (wait after last call), Throttle (max 1 per interval), Token Bucket.",
        hinglish: "Rate limiter request ki speed control karta hai. Debounce (last call ke baad wait karo), Throttle (fixed interval mein ek call), aur Token Bucket (fixed tokens, refill hote rehte hain) — ye teen common techniques hain.",
        code: `// Debounce — waits until user stops typing
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Throttle — max once per interval
function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const debouncedSearch = debounce(search, 300);
const throttledScroll = throttle(handleScroll, 100);

input.addEventListener('input', debouncedSearch);
window.addEventListener('scroll', throttledScroll);`
      },
      {
        q: "How would you design a Caching Strategy for a Web App?",
        a: "Caching layers: 1) HTTP caching (Cache-Control, ETag headers). 2) Service Worker cache (offline support). 3) In-memory cache (React Query, SWR — stale-while-revalidate). 4) localStorage/sessionStorage for persistent data. 5) IndexedDB for large datasets. Strategy depends on data freshness requirements, size, and offline needs.",
        oneLiner: "HTTP cache, Service Worker, in-memory (React Query), localStorage, IndexedDB.",
        hinglish: "Cache mein data store karo taaki baar baar server se fetch na karna pade. Browser cache, Service Worker cache, in-memory cache (React Query), aur localStorage — ye sab caching ke tarike hain.",
        code: `// 1. React Query — automatic caching
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000,     // Fresh for 5 min
  cacheTime: 30 * 60 * 1000,    // Keep in cache 30 min
});

// 2. Custom cache with Map
const cache = new Map();

async function cachedFetch(url, ttl = 60000) {
  if (cache.has(url)) {
    const { data, timestamp } = cache.get(url);
    if (Date.now() - timestamp < ttl) return data;
  }
  const res = await fetch(url);
  const data = await res.json();
  cache.set(url, { data, timestamp: Date.now() });
  return data;
}`
      },
    ],
  },
  nodejs: {
    Beginner: [
      { q: "What is Node.js?", a: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables server-side JavaScript execution with non-blocking I/O and an event-driven architecture.", oneLiner: "JS runtime on V8 for server-side non-blocking I/O." },
      { q: "What is npm?", a: "npm is the Node Package Manager and the world's largest software registry. It manages project dependencies, scripts, and provides access to over a million open-source packages.", oneLiner: "Package manager for installing and managing JS dependencies." },
      { q: "What is the event loop?", a: "The event loop is Node's mechanism for handling async operations. It continuously checks the call stack and processes callbacks from the event queue, enabling non-blocking I/O.", oneLiner: "Mechanism that processes async callbacks from the event queue." },
    ],
    Intermediate: [
      { q: "Explain middleware in Express.", a: "Middleware functions have access to req, res, and next. They execute sequentially, can modify request/response, end the cycle, or pass control. Used for auth, logging, parsing, and error handling.", oneLiner: "Functions with req/res/next that process requests sequentially." },
      { q: "What are streams?", a: "Streams handle data in chunks rather than loading everything into memory. The four types are Readable, Writable, Duplex, and Transform. They're essential for processing large files efficiently.", oneLiner: "Process data chunk-by-chunk instead of loading all into memory." },
    ],
    Advanced: [
      { q: "How does the cluster module work?", a: "The cluster module creates child processes (workers) that share the same server port. It enables multi-core utilization, improving throughput. Workers are managed by a master process.", oneLiner: "Creates worker processes sharing a port for multi-core scaling." },
      { q: "Explain the Node.js module resolution algorithm.", a: "Node resolves modules by checking core modules first, then file paths (./, ../), then node_modules. It looks for exact files, then index.js, using the main field in package.json.", oneLiner: "Resolves: core modules → file paths → node_modules → index.js." },
    ],
  },
  python: {
    Beginner: [
      { q: "What is Python?", a: "Python is a high-level, interpreted programming language known for readability and simplicity. It supports multiple paradigms: procedural, object-oriented, and functional programming.", oneLiner: "High-level interpreted language known for readability." },
      { q: "What are Python data types?", a: "Python has built-in types: int, float, str, bool, list, tuple, dict, set, and NoneType. Dynamic typing means variables can change types at runtime.", oneLiner: "int, float, str, bool, list, tuple, dict, set, NoneType." },
      { q: "What is a list comprehension?", a: "A concise way to create lists: [expression for item in iterable if condition]. They're more readable and often faster than equivalent for loops.", oneLiner: "One-line list creation: [expr for item in iterable if cond]." },
    ],
    Intermediate: [
      { q: "Explain decorators.", a: "Decorators modify functions/classes using @syntax. They wrap the target, adding behavior before/after execution. Common uses: logging, auth, caching (@lru_cache), and framework routing.", oneLiner: "@syntax wrappers that add behavior to functions/classes." },
      { q: "What is the GIL?", a: "The Global Interpreter Lock prevents multiple native threads from executing Python bytecodes simultaneously. It simplifies memory management but limits CPU-bound parallelism. Use multiprocessing to work around it.", oneLiner: "Lock limiting one thread executing Python bytecode at a time." },
    ],
    Advanced: [
      { q: "Explain metaclasses.", a: "Metaclasses are classes of classes—they define how classes are created. type is the default metaclass. Custom metaclasses control class creation, attribute validation, and can implement patterns like singletons.", oneLiner: "Classes that define how other classes are created." },
      { q: "What are descriptors?", a: "Descriptors are objects that define __get__, __set__, or __delete__ methods. They power properties, methods, and classmethods. Understanding them reveals how Python's attribute access works under the hood.", oneLiner: "Objects with __get__/__set__/__delete__ controlling attribute access." },
    ],
  },
  javascript: {
    Beginner: [
      {
        q: "What is the difference between let, const, and var?",
        a: "var is function-scoped and hoisted to the top of its function. It can be re-declared and updated. let is block-scoped (lives only within {}), can be updated but not re-declared in the same scope. const is also block-scoped but cannot be updated or re-declared — however, objects/arrays declared with const can still be mutated (you just can't reassign the variable itself).",
        oneLiner: "var = function-scoped & hoisted; let = block-scoped & reassignable; const = block-scoped & not reassignable.",
        code: `// var is function-scoped
function example() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable!
    console.log(x); // 2
  }
  console.log(x); // 2 (var ignores block scope)
}

// let is block-scoped
function example2() {
  let y = 1;
  if (true) {
    let y = 2; // Different variable
    console.log(y); // 2
  }
  console.log(y); // 1

}

// const cannot be reassigned
const obj = { name: "John" };
obj.name = "Jane"; // ✅ Allowed (mutation)
// obj = {};        // ❌ Error (reassignment)`
      },
      {
        q: "What is the difference between == and ===?",
        a: "== (abstract equality) performs type coercion before comparing. It converts both values to the same type first. === (strict equality) compares both value AND type without any conversion. Always prefer === to avoid unexpected results from automatic type conversion.",
        oneLiner: "== coerces types before comparing; === compares value AND type strictly.",
        code: `console.log(5 == "5");    // true  (string "5" coerced to number 5)
console.log(5 === "5");   // false (number !== string)
console.log(0 == false);  // true  (false coerced to 0)
console.log(0 === false); // false (number !== boolean)
console.log(null == undefined);  // true  (special rule)
console.log(null === undefined); // false (different types)`
      },
      {
        q: "What is the difference between null and undefined?",
        a: "undefined means a variable has been declared but not assigned a value — JavaScript sets it automatically. null is an intentional assignment that represents 'no value' or 'empty'. Think of undefined as 'not yet set' and null as 'deliberately empty'.",
        oneLiner: "undefined = not assigned yet; null = intentionally empty.",
        code: `let a;
console.log(a);           // undefined (declared, not assigned)
let b = null;
console.log(b);           // null (intentionally empty)
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (known JS quirk)
console.log(null == undefined);  // true
console.log(null === undefined); // false`
      },
      {
        q: "What will be the output? console.log(null === undefined) and console.log(null == undefined)?",
        a: "null === undefined returns false because they are different types (null is object, undefined is undefined). null == undefined returns true because of a special rule in JavaScript's abstract equality — null and undefined are loosely equal to each other and nothing else.",
        oneLiner: "null === undefined → false (different types); null == undefined → true (special loose equality rule).",
      },
      {
        q: "What is the typeof an array in JavaScript?",
        a: "typeof [] returns 'object' because arrays are technically objects in JavaScript. To properly check if something is an array, use Array.isArray(). This is because arrays inherit from Object and typeof doesn't distinguish between plain objects and arrays.",
        oneLiner: "typeof [] is 'object'; use Array.isArray() to check for arrays.",
        code: `console.log(typeof []);           // "object"
console.log(typeof {});           // "object"
console.log(Array.isArray([]));   // true
console.log(Array.isArray({}));   // false`
      },
      {
        q: "How can you check if a variable is an array?",
        a: "The best way is Array.isArray(variable). Other methods include: variable instanceof Array, Object.prototype.toString.call(variable) === '[object Array]'. Array.isArray() is the most reliable because it works across different frames/iframes.",
        oneLiner: "Use Array.isArray() — it's the most reliable method.",
        code: `const arr = [1, 2, 3];
console.log(Array.isArray(arr));  // true
console.log(arr instanceof Array); // true
console.log(Object.prototype.toString.call(arr)); // "[object Array]"`
      },
      {
        q: "What is the NaN property in JavaScript?",
        a: "NaN stands for 'Not-a-Number'. It's returned when a mathematical operation fails (like 0/0 or parseInt('hello')). NaN is unique because it's not equal to anything, not even itself. Use Number.isNaN() to check for NaN (not the global isNaN which coerces types first).",
        oneLiner: "NaN = failed math result; it's not equal to itself; use Number.isNaN() to check.",
        code: `console.log(0 / 0);              // NaN
console.log(parseInt("hello"));  // NaN
console.log(NaN === NaN);        // false (NaN is never equal to NaN!)
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN("hello")); // false (doesn't coerce)
console.log(isNaN("hello"));       // true (coerces — avoid!)`
      },
      {
        q: "What are anonymous functions in JavaScript?",
        a: "Anonymous functions are functions without a name. They're commonly used as callbacks, IIFEs, or assigned to variables. Arrow functions are also anonymous by default. They can't be called by name elsewhere unless stored in a variable.",
        oneLiner: "Functions without a name, used as callbacks or assigned to variables.",
        code: `// Anonymous function assigned to variable
const greet = function() {
  return "Hello!";
};

// Anonymous arrow function
const add = (a, b) => a + b;

// Anonymous callback
setTimeout(function() {
  console.log("Runs after 1s");
}, 1000);

// Array method callback
[1, 2, 3].map(function(x) { return x * 2; });`
      },
      {
        q: "What is the data type of variables in JavaScript?",
        a: "JavaScript has 8 data types. 7 primitives: string, number, bigint, boolean, undefined, null, symbol. And 1 non-primitive: object (which includes arrays, functions, dates, etc.). JavaScript is dynamically typed — variables can hold any type and change types at runtime.",
        oneLiner: "7 primitives (string, number, bigint, boolean, undefined, null, symbol) + object.",
        code: `console.log(typeof "hello");    // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (bug in JS)
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (arrays are objects)`
      },
      {
        q: "What are escape characters? Why are they used?",
        a: "Escape characters start with a backslash (\\) and represent special characters in strings. They're used to include characters that can't be typed directly — like newlines (\\n), tabs (\\t), quotes inside strings (\\\"), or the backslash itself (\\\\).",
        oneLiner: "Backslash sequences (\\n, \\t, \\\") to represent special characters in strings.",
        code: `console.log("Hello\\nWorld");    // Newline between Hello and World
console.log("Tab\\there");      // Tab space
console.log("She said \\"Hi\\""); // She said "Hi"
console.log("Backslash: \\\\");  // Backslash: \\`
      },
      {
        q: "What is the difference between break and continue statements?",
        a: "break immediately exits the entire loop — no more iterations happen. continue skips the current iteration and jumps to the next one. break is used when you've found what you need; continue is used when you want to skip certain items but keep looping.",
        oneLiner: "break exits the loop entirely; continue skips current iteration.",
        code: `// break — stops at 3
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}

// continue — skips 3
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 0, 1, 2, 4
}`
      },
      {
        q: "What is hoisting in JavaScript?",
        a: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. var declarations are hoisted and initialized as undefined. let and const are hoisted but NOT initialized (temporal dead zone). Function declarations are fully hoisted (you can call them before they appear in code).",
        oneLiner: "Declarations move to top of scope; var = undefined, let/const = TDZ, functions = fully hoisted.",
        code: `console.log(a); // undefined (var is hoisted)
var a = 5;

// console.log(b); // ReferenceError (let is in TDZ)
let b = 10;

greet(); // "Hello!" (function declaration fully hoisted)
function greet() { console.log("Hello!"); }

// sayHi(); // TypeError (var hoists but as undefined)
var sayHi = function() { console.log("Hi!"); };`
      },
      {
        q: "Explain pass by value and pass by reference in JavaScript?",
        a: "Primitives (string, number, boolean, etc.) are passed by value — a copy is made, changes don't affect the original. Objects and arrays are passed by reference — the variable holds a reference (memory address), so changes inside a function affect the original object.",
        oneLiner: "Primitives = copied (by value); Objects/arrays = shared reference (by reference).",
        code: `// Pass by value (primitives)
let x = 10;
function changeValue(val) { val = 20; }
changeValue(x);
console.log(x); // 10 (unchanged)

// Pass by reference (objects)
let obj = { name: "John" };
function changeName(o) { o.name = "Jane"; }
changeName(obj);
console.log(obj.name); // "Jane" (changed!)

// But reassigning the parameter doesn't affect original
function replaceObj(o) { o = { name: "Bob" }; }
replaceObj(obj);
console.log(obj.name); // "Jane" (still Jane)`
      },
    ],
    Intermediate: [
      {
        q: "What is the output of this function? function sample(){ for(let i=0; i<=5; i++){ setTimeout(() => console.log(i), 1000); } }",
        a: "Output: 0, 1, 2, 3, 4, 5 (each after ~1 second). Because 'let' is block-scoped, each iteration of the loop creates a NEW variable 'i'. Each setTimeout callback captures its own copy of 'i'. If you used 'var' instead, you'd get 6 printed 6 times because var is function-scoped and all callbacks would share the same 'i'.",
        oneLiner: "Prints 0-5 because let creates a new scope per iteration; var would print 6 six times.",
        code: `// With let — each iteration gets its own 'i'
function sampleLet() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
sampleLet(); // 0, 1, 2, 3, 4, 5

// With var — all share the same 'i'
function sampleVar() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
sampleVar(); // 6, 6, 6, 6, 6, 6`
      },
      {
        q: "What is the output? setTimeout(()=>{ console.log('a'); }, 2000); console.log('b');",
        a: "Output: 'b' first, then 'a' after 2 seconds. JavaScript is single-threaded. console.log('b') runs synchronously on the call stack first. setTimeout is an async operation — its callback goes to the Web API, waits 2 seconds, then enters the callback queue. The event loop picks it up only after the call stack is empty.",
        oneLiner: "'b' prints first (sync), then 'a' after 2s (async via event loop).",
      },
      {
        q: "How can you print 'a' first and 'b' later without using any extra setTimeout?",
        a: "Wrap the code in an async function and use a Promise-based delay. Use await before the console.log('b') or put console.log('a') inside a Promise that resolves before console.log('b') runs. The key is to use async/await to control execution order.",
        oneLiner: "Use async/await with a Promise-based delay to control execution order.",
        code: `// Solution using async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printInOrder() {
  await delay(2000);
  console.log("a"); // prints first after 2s
  console.log("b"); // prints right after "a"
}
printInOrder();

// Or using Promise.then
new Promise(resolve => {
  setTimeout(() => {
    console.log("a");
    resolve();
  }, 2000);
}).then(() => {
  console.log("b");
});`
      },
      {
        q: "What are closures? Explain with an example.",
        a: "A closure is when a function 'remembers' variables from its outer scope even after the outer function has finished executing. The inner function closes over (captures) the variables. Closures enable data privacy, function factories, and maintaining state. Every function in JS creates a closure.",
        oneLiner: "A function that remembers and accesses variables from its outer scope after it returns.",
        code: `// Closure example — counter with data privacy
function createCounter() {
  let count = 0; // private variable
  return {
    increment: function() { return ++count; },
    decrement: function() { return --count; },
    getCount: function() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(count); // ReferenceError! count is private

// Function factory using closure
function multiplier(factor) {
  return function(number) {
    return number * factor; // 'factor' is remembered
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15`
      },
      {
        q: "What is the difference between array.map and array.filter?",
        a: "map() transforms every element and returns a NEW array of the same length with transformed values. filter() tests each element against a condition and returns a NEW array with only elements that pass the test (can be shorter). map changes values; filter removes values.",
        oneLiner: "map transforms all elements; filter keeps only elements that pass a test.",
        code: `const numbers = [1, 2, 3, 4, 5];

// map — transforms each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10] (same length)

// filter — keeps elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4] (shorter array)

// Chaining them together
const doubledEvens = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
console.log(doubledEvens); // [4, 8]`
      },
      {
        q: "What is the difference between arr.forEach, array.map and array.filter?",
        a: "forEach() executes a function for each element but returns undefined — it's for side effects only. map() transforms each element and returns a new array of same length. filter() returns a new array with only elements passing a condition. forEach mutates/logs; map transforms; filter selects.",
        oneLiner: "forEach = side effects (no return); map = transform all; filter = select matching.",
        code: `const nums = [1, 2, 3, 4, 5];

// forEach — no return value, used for side effects
nums.forEach(n => console.log(n)); // prints 1,2,3,4,5
const result1 = nums.forEach(n => n * 2);
console.log(result1); // undefined!

// map — returns new transformed array
const result2 = nums.map(n => n * 2);
console.log(result2); // [2, 4, 6, 8, 10]

// filter — returns new filtered array
const result3 = nums.filter(n => n > 3);
console.log(result3); // [4, 5]`
      },
      {
        q: "What is the use of arr.reduce? Explain with an example.",
        a: "reduce() processes an array into a single value by applying a function to an accumulator and each element. It takes a callback(accumulator, currentValue) and an initial value. It can sum numbers, flatten arrays, count occurrences, group data — anything that reduces an array to one result.",
        oneLiner: "Reduces an array to a single value by accumulating results across elements.",
        code: `const nums = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Count occurrences
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, cherry: 1 }

// Find max value
const max = nums.reduce((a, b) => a > b ? a : b);
console.log(max); // 5`
      },
      {
        q: "How to find the length of an object?",
        a: "Objects don't have a .length property. Use Object.keys(obj).length to count enumerable properties. Object.keys() returns an array of the object's own property names, and .length gives you the count.",
        oneLiner: "Use Object.keys(obj).length — objects don't have .length directly.",
        code: `const person = { name: "John", age: 30, city: "NYC" };
console.log(Object.keys(person).length);   // 3
console.log(Object.values(person).length); // 3
console.log(Object.entries(person).length); // 3`
      },
      {
        q: "What are promises? What are the 3 states of promises?",
        a: "A Promise is an object representing the eventual completion or failure of an async operation. The 3 states are: (1) Pending — initial state, neither fulfilled nor rejected. (2) Fulfilled — operation completed successfully, .then() is called. (3) Rejected — operation failed, .catch() is called. Once settled (fulfilled/rejected), a promise cannot change state.",
        oneLiner: "Async result wrapper with 3 states: Pending → Fulfilled (.then) or Rejected (.catch).",
        code: `// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("It worked!"); // → Fulfilled
  } else {
    reject("It failed!");  // → Rejected
  }
});

// Consuming a promise
myPromise
  .then(result => console.log(result))   // "It worked!"
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));   // Always runs`
      },
      {
        q: "What is the difference between promise and callback?",
        a: "Callbacks are functions passed to other functions, executed when the async operation completes. Promises are objects that represent future values. Promises are superior because: (1) they avoid 'callback hell' with chaining (.then), (2) they have built-in error handling (.catch), (3) they support Promise.all/race for multiple async ops, (4) they're the foundation for async/await.",
        oneLiner: "Callbacks = passed functions; Promises = chainable objects with built-in error handling.",
        code: `// Callback approach (can lead to callback hell)
function getData(callback) {
  setTimeout(() => callback(null, "data"), 1000);
}
getData((err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// Promise approach (chainable, cleaner)
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data"), 1000);
  });
}
getDataPromise()
  .then(data => console.log(data))
  .catch(err => console.error(err));`
      },
      {
        q: "Why do we use promises over callbacks? Why use async/await?",
        a: "Promises solve callback hell by enabling flat chaining instead of nested callbacks. They provide .catch() for centralized error handling. async/await is syntactic sugar over promises that makes async code look synchronous — it's easier to read, write, debug, and handle errors with try/catch blocks.",
        oneLiner: "Promises = flat chaining + .catch(); async/await = promises that look like sync code.",
        code: `// Callback hell ❌
getUser(id, (user) => {
  getOrders(user, (orders) => {
    getDetails(orders[0], (details) => {
      console.log(details); // deeply nested!
    });
  });
});

// Promises ✅
getUser(id)
  .then(user => getOrders(user))
  .then(orders => getDetails(orders[0]))
  .then(details => console.log(details))
  .catch(err => console.error(err));

// async/await ✅✅ (cleanest)
async function loadDetails(id) {
  try {
    const user = await getUser(id);
    const orders = await getOrders(user);
    const details = await getDetails(orders[0]);
    console.log(details);
  } catch (err) {
    console.error(err);
  }
}`
      },
      {
        q: "What is the output? let a = new Promise((resolve, reject) => { reject({ msg: 'Something went wrong' }) }); a.then(resolve => { console.log(resolve) }).catch(err => { console.log(err.msg) })",
        a: "Output: 'Something went wrong'. The promise is created and immediately rejected with an object { msg: 'Something went wrong' }. Since it's rejected, .then() is skipped and .catch() catches the error. err is the rejection value { msg: 'Something went wrong' }, so err.msg prints the string.",
        oneLiner: "Prints 'Something went wrong' — reject skips .then(), .catch() receives the error object.",
      },
      {
        q: "What are callbacks? What is callback hell? Give an example.",
        a: "A callback is a function passed as an argument to another function, to be called later when an operation completes. Callback hell (pyramid of doom) happens when you nest many callbacks inside each other, creating deeply indented, hard-to-read and hard-to-debug code.",
        oneLiner: "Callbacks = functions passed as args; callback hell = deeply nested callbacks.",
        code: `// Simple callback
function fetchData(callback) {
  setTimeout(() => callback("data"), 1000);
}

// Callback Hell (Pyramid of Doom) ❌
getUser(userId, function(user) {
  getProfile(user.id, function(profile) {
    getOrders(profile.id, function(orders) {
      getOrderDetails(orders[0].id, function(details) {
        getShipping(details.shippingId, function(shipping) {
          console.log(shipping); // 5 levels deep!
        });
      });
    });
  });
});`
      },
      {
        q: "How are promises more superior than callbacks? How do promises solve callback hell?",
        a: "Promises solve callback hell by allowing flat chaining with .then() instead of nesting. Benefits: (1) Flat code structure — .then().then() instead of nested callbacks. (2) Centralized error handling with single .catch(). (3) Promise.all() for parallel operations. (4) Return values can be chained. (5) Foundation for async/await syntax.",
        oneLiner: "Promises flatten nesting with .then() chains, centralize errors with .catch(), and enable async/await.",
        code: `// Callback hell → Promise chain solution
getUser(userId)
  .then(user => getProfile(user.id))
  .then(profile => getOrders(profile.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => getShipping(details.shippingId))
  .then(shipping => console.log(shipping))
  .catch(err => console.error("Any error caught here:", err));

// Promise.all for parallel operations
Promise.all([
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments")
]).then(([users, posts, comments]) => {
  console.log("All loaded!");
});`
      },
      {
        q: "What is event bubbling and event capturing (Event Propagation)?",
        a: "Event propagation has 3 phases: (1) Capturing — event travels DOWN from window to target. (2) Target — event reaches the clicked element. (3) Bubbling — event travels back UP from target to window. By default, handlers run during bubbling. Use addEventListener's 3rd argument (true) for capturing. event.stopPropagation() stops further propagation.",
        oneLiner: "Capturing = event goes DOWN to target; Bubbling = event goes UP from target. Default is bubbling.",
        code: `// HTML: <div id="parent"><button id="child">Click</button></div>

// Bubbling (default) — child fires first, then parent
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked"); // fires second
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked"); // fires first
});

// Capturing — parent fires first
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent (capture)"); // fires first
}, true); // true = capture phase

// Stop propagation
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // parent won't fire
  console.log("Only child fires");
});`
      },
      {
        q: "What is the difference between event.preventDefault() and event.stopPropagation()?",
        a: "event.preventDefault() stops the default browser action (like form submit, link navigation, checkbox toggle) but the event still propagates. event.stopPropagation() stops the event from bubbling up to parent elements but the default action still happens. They solve different problems and can be used together.",
        oneLiner: "preventDefault stops browser's default action; stopPropagation stops event from reaching parents.",
        code: `// preventDefault — stops default action
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // link won't navigate
  console.log("Link clicked but no navigation");
});

// stopPropagation — stops bubbling
document.querySelector("button").addEventListener("click", (e) => {
  e.stopPropagation(); // parent handlers won't fire
  console.log("Only this handler runs");
});`
      },
      {
        q: "What is function currying?",
        a: "Currying transforms a function with multiple arguments into a sequence of functions, each taking one argument. f(a, b, c) becomes f(a)(b)(c). It enables partial application — you can fix some arguments and create specialized functions. Useful for creating reusable function factories.",
        oneLiner: "Transforming f(a,b,c) into f(a)(b)(c) — each call takes one argument.",
        code: `// Normal function
function add(a, b, c) { return a + b + c; }
console.log(add(1, 2, 3)); // 6

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6

// Arrow function curry
const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15`
      },
      {
        q: "What is an IIFE (Immediately Invoked Function Expression)?",
        a: "An IIFE is a function that runs immediately after it's defined. Syntax: (function(){ ... })() or (() => { ... })(). It creates a private scope, preventing variable pollution of the global scope. Used for initialization code, module patterns, and avoiding naming conflicts.",
        oneLiner: "A function that executes immediately: (function(){ ... })() — creates private scope.",
        code: `// IIFE with function declaration
(function() {
  const secret = "hidden";
  console.log("IIFE runs immediately!");
  // 'secret' is not accessible outside
})();

// IIFE with arrow function
(() => {
  console.log("Arrow IIFE!");
})();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("World"); // "Hello, World"

// Module pattern using IIFE
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
console.log(counter.increment()); // 1`
      },
      {
        q: "What are higher order functions?",
        a: "A higher-order function is a function that either (1) takes one or more functions as arguments, or (2) returns a function. Examples: map, filter, reduce, forEach, setTimeout, addEventListener. They enable functional programming patterns, code reuse, and abstraction.",
        oneLiner: "Functions that take functions as args or return functions (map, filter, reduce).",
        code: `// Takes a function as argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}
repeat(3, console.log); // 0, 1, 2

// Returns a function
function greaterThan(n) {
  return (m) => m > n;
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // true
console.log(greaterThan10(5));  // false

// Built-in higher order functions
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);      // [2,4,6,8,10]
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
const sum = nums.reduce((a, b) => a + b, 0); // 15`
      },
      {
        q: "Explain the 'this' keyword in JavaScript?",
        a: "The value of 'this' depends on HOW a function is called, not where it's defined. In a method: 'this' = the object. In a regular function: 'this' = global (window) or undefined (strict mode). In an arrow function: 'this' = inherited from enclosing scope (lexical this). In an event handler: 'this' = the element. call/apply/bind can explicitly set 'this'.",
        oneLiner: "'this' depends on call context: object → that object, function → global/undefined, arrow → parent scope.",
        code: `const obj = {
  name: "John",
  greet: function() {
    console.log(this.name); // "John" (this = obj)
  },
  greetArrow: () => {
    console.log(this.name); // undefined (this = outer/window)
  }
};

obj.greet();      // "John"
obj.greetArrow(); // undefined

// 'this' in event handler
// button.addEventListener('click', function() {
//   console.log(this); // the button element
// });`
      },
      {
        q: "What is the main difference between fat arrow function and normal function?",
        a: "The key difference is 'this' binding. Normal functions have their own 'this' (determined by how they're called). Arrow functions DON'T have their own 'this' — they inherit it from the enclosing scope (lexical this). Arrow functions also can't be used as constructors (no 'new'), don't have 'arguments' object, and can't be used as generators.",
        oneLiner: "Arrow functions inherit 'this' from parent scope; normal functions get their own 'this'.",
        code: `const obj = {
  name: "John",
  // Normal function — 'this' is the object
  sayHi: function() {
    console.log("Hi, " + this.name); // "Hi, John"

    // Problem: 'this' changes in nested function
    setTimeout(function() {
      console.log(this.name); // undefined! (this = window)
    }, 100);
  },
  // Arrow function solves it
  sayHiArrow: function() {
    setTimeout(() => {
      console.log(this.name); // "John" (inherits from sayHiArrow)
    }, 100);
  }
};`
      },
      {
        q: "What is memoization in JavaScript?",
        a: "Memoization is an optimization technique that caches function results based on arguments. When the function is called with the same inputs again, it returns the cached result instead of recomputing. It trades memory for speed. Best used for expensive calculations, recursive functions (like Fibonacci), and pure functions.",
        oneLiner: "Caching function results by arguments to avoid repeated expensive computations.",
        code: `// Generic memoize function
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("From cache!");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Memoized Fibonacci
const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});
console.log(fib(40)); // Fast! Without memoize this is very slow`
      },
      {
        q: "How to iterate inside an object and print all values without keys?",
        a: "Use Object.values(obj) to get an array of all values, then iterate with forEach, for...of, or map. Alternatively, use Object.entries(obj) and destructure to get only values, or use for...in loop and access obj[key].",
        oneLiner: "Object.values(obj).forEach(val => console.log(val)) — simplest way.",
        code: `const person = { name: "John", age: 30, city: "NYC" };

// Method 1: Object.values()
Object.values(person).forEach(val => console.log(val));
// "John", 30, "NYC"

// Method 2: for...in
for (let key in person) {
  console.log(person[key]); // prints values only
}

// Method 3: Object.entries destructuring
Object.entries(person).forEach(([, value]) => {
  console.log(value);
});`
      },
      {
        q: "What are Spread and Rest operators (...)?",
        a: "The ... syntax serves two purposes. SPREAD expands an array/object into individual elements — used for copying, merging, and passing args. REST collects multiple elements into a single array — used in function parameters and destructuring. Spread 'spreads out', rest 'gathers in'. Same syntax, opposite behavior based on context.",
        oneLiner: "Spread expands arrays/objects; Rest collects multiple args into one array. Same '...' syntax, opposite jobs.",
        code: `// SPREAD — expand
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }

// REST — collect
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// REST in destructuring
const [first, ...remaining] = [1, 2, 3, 4];
console.log(first);     // 1
console.log(remaining); // [2, 3, 4]`
      },
      {
        q: "What are Pure and Impure Functions?",
        a: "A PURE function: (1) always returns the same output for the same inputs (deterministic), and (2) has NO side effects (doesn't modify external state, DOM, APIs, etc.). An IMPURE function has side effects or depends on external state (Math.random, Date.now, API calls, DOM manipulation). Pure functions are predictable, testable, and cacheable.",
        oneLiner: "Pure = same input → same output, no side effects. Impure = depends on or modifies external state.",
        code: `// PURE — no side effects, deterministic
function add(a, b) { return a + b; }
function double(arr) { return arr.map(x => x * 2); }

// IMPURE — modifies external state
let total = 0;
function addToTotal(n) { total += n; return total; }

// IMPURE — depends on external state
function getTime() { return Date.now(); }`
      },
      {
        q: "What is Event Delegation?",
        a: "Event delegation is a pattern where you attach ONE event listener to a parent element instead of individual listeners on each child. It works because of event bubbling — child events bubble up to the parent. Use event.target to determine which child was clicked. Benefits: works for dynamically added elements, less memory, cleaner code.",
        oneLiner: "Attach one listener to parent, use event.target to handle child events — works via bubbling.",
        code: `// With delegation — one listener on parent ✅
document.getElementById("container").addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    console.log("Clicked:", e.target.textContent);
  }
});
// Works even for dynamically added buttons!`
      },
      {
        q: "What is JSON? Explain parse and stringify.",
        a: "JSON (JavaScript Object Notation) is a lightweight text format for data exchange. JSON.stringify() converts a JS object to a JSON string (for sending/storing). JSON.parse() converts a JSON string back to a JS object. JSON supports strings, numbers, booleans, null, arrays, and objects — not functions or undefined.",
        oneLiner: "Text data format. JSON.stringify = object→string; JSON.parse = string→object.",
        code: `const user = { name: "John", age: 30 };
const jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"John","age":30}'
const parsed = JSON.parse(jsonStr);
console.log(parsed.name); // "John"`
      },
      {
        q: "How do you make an AJAX call using XMLHttpRequest?",
        a: "AJAX allows fetching data without page reload. XMLHttpRequest is the original way. Steps: create new XMLHttpRequest(), open(method, url), set onreadystatechange handler, send(). readyState 4 = complete, status 200 = success. Modern alternative: fetch API.",
        oneLiner: "Create XHR → open(method, url) → onreadystatechange → send() — original async data fetching.",
        code: `const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();`
      },
      {
        q: "What is Shallow Copy vs Deep Copy?",
        a: "Shallow copy copies only the first level — nested objects still share references. Deep copy creates a fully independent clone at all levels. Shallow: spread (...), Object.assign. Deep: structuredClone(), JSON.parse(JSON.stringify()). Shallow copies can cause bugs when you modify nested properties.",
        oneLiner: "Shallow = top level only (nested shared); Deep = full independent clone. Use structuredClone() for deep.",
        code: `const original = { name: "John", address: { city: "NYC" } };

// Shallow — nested is SHARED
const shallow = { ...original };
shallow.address.city = "LA";
console.log(original.address.city); // "LA" (mutated!)

// Deep — fully independent
const deep = structuredClone(original);
deep.address.city = "Chicago";
console.log(original.address.city); // "LA" (unchanged)`
      },
    ],
    Advanced: [
      {
        q: "What is process.nextTick?",
        a: "process.nextTick() is a Node.js function that schedules a callback to execute BEFORE any I/O events or timers in the next iteration of the event loop. It has higher priority than setImmediate and setTimeout. It's used to ensure code runs after the current operation completes but before anything else. Overusing it can starve I/O.",
        oneLiner: "Node.js function that runs callback before any I/O or timers in next event loop tick.",
        code: `// process.nextTick runs before setTimeout and setImmediate
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
console.log("sync");
// Output: sync → nextTick → setTimeout → setImmediate`
      },
      {
        q: "What is the output? setImmediate(() => { console.log('first') }); setTimeout(() => { console.log('second') }); console.log('third');",
        a: "Output: 'third', then 'second' or 'first' (order between setImmediate and setTimeout(0) is non-deterministic in the main module). 'third' prints first because it's synchronous. setImmediate runs in the 'check' phase of the event loop, setTimeout(0) runs in the 'timers' phase. In the main module, their order depends on process performance. Inside an I/O callback, setImmediate always runs first.",
        oneLiner: "'third' first (sync), then setTimeout/setImmediate order is non-deterministic in main module.",
        code: `// In main module — order may vary
setImmediate(() => console.log("first"));   // check phase
setTimeout(() => console.log("second"), 0); // timer phase
console.log("third"); // sync — runs first
// Output: "third" → "second"/"first" (order varies)

// Inside I/O callback — setImmediate always first
const fs = require("fs");
fs.readFile(__filename, () => {
  setImmediate(() => console.log("first"));  // always first
  setTimeout(() => console.log("second"), 0); // always second
});`
      },
      {
        q: "What is the difference between setImmediate and process.nextTick?",
        a: "process.nextTick() fires IMMEDIATELY after the current operation, before the event loop continues — it's the highest priority. setImmediate() fires in the 'check' phase of the event loop, after I/O events. Despite the names being confusing (nextTick sounds later), nextTick is actually faster. Overusing nextTick can block I/O; setImmediate is safer for recursion.",
        oneLiner: "nextTick runs before event loop continues (highest priority); setImmediate runs in check phase after I/O.",
        code: `process.nextTick(() => console.log("nextTick")); // runs first
setImmediate(() => console.log("setImmediate"));  // runs later
console.log("sync");
// Output: sync → nextTick → setImmediate`
      },
      {
        q: "What is the output? async function fun1(){ console.log('a'); console.log('b'); await setTimeout(() => console.log('c'), 1000); await setTimeout(() => console.log('d'), 0); console.log('e'); } fun1();",
        a: "Output: a, b, e, d, c. The key insight: await on setTimeout doesn't actually wait! setTimeout returns a timer ID (a number), not a Promise. await on a non-Promise value resolves immediately. So 'a', 'b' print synchronously, both setTimeouts are scheduled, then 'e' prints. Later, 'd' fires (0ms delay), then 'c' (1000ms delay).",
        oneLiner: "a, b, e, d, c — await on setTimeout doesn't wait because it returns a number, not a Promise.",
        code: `// Problem: await doesn't work with setTimeout
async function fun1() {
  console.log('a');  // 1st
  console.log('b');  // 2nd
  await setTimeout(() => console.log('c'), 1000); // doesn't wait!
  await setTimeout(() => console.log('d'), 0);    // doesn't wait!
  console.log('e');  // 3rd
}
fun1(); // a, b, e, d, c

// FIX: Wrap setTimeout in a Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function fun2() {
  console.log('a');  // 1st
  console.log('b');  // 2nd
  await delay(1000);
  console.log('c');  // 3rd (after 1s)
  await delay(0);
  console.log('d');  // 4th
  console.log('e');  // 5th
}
fun2(); // a, b, c, d, e (proper order!)`
      },
      {
        q: "When do we use async/await? Why must await be inside an async function?",
        a: "Use async/await when you need to work with Promises in a readable, sequential way — API calls, database operations, file reading, any async task. await must be inside async because it fundamentally changes how the function executes — it pauses execution and returns a Promise. The engine needs to know the function is async to handle this correctly. Without async, JS would try to pause synchronous code, which breaks single-threaded execution.",
        oneLiner: "async marks a function as Promise-returning; await pauses it until a Promise resolves — both required together.",
        code: `// async makes a function return a Promise
async function fetchUser() {
  // await pauses here until fetch completes
  const response = await fetch("/api/user");
  const data = await response.json();
  return data; // wrapped in Promise automatically
}

// Without async/await (messy)
function fetchUserOld() {
  return fetch("/api/user")
    .then(res => res.json())
    .then(data => data);
}

// Error handling with try/catch
async function safeCall() {
  try {
    const data = await fetchUser();
    console.log(data);
  } catch (err) {
    console.error("Failed:", err);
  }
}`
      },
      {
        q: "What is the output? await delay(6000); setTimeout(() => { console.log('first') }, 10000); console.log('second');",
        a: "After 6 seconds of waiting (delay), 'second' prints first (synchronous), then 'first' prints 10 seconds after the setTimeout was set (so ~16 seconds total from start). await delay(6000) actually pauses execution for 6 seconds. Then setTimeout schedules 'first' for 10s later, and 'second' logs immediately.",
        oneLiner: "After 6s wait, 'second' prints immediately, then 'first' 10s later (~16s total).",
      },
      {
        q: "What is a function definition?",
        a: "A function definition (or function declaration) is the code that creates a function — specifying its name, parameters, and body. There are several ways: function declarations (hoisted), function expressions (not hoisted), arrow functions (lexical this), and generator functions (can pause with yield).",
        oneLiner: "Code that creates a function with name, parameters, and body — declared or expressed.",
        code: `// Function declaration (hoisted)
function greet(name) { return "Hello " + name; }

// Function expression (not hoisted)
const greet2 = function(name) { return "Hello " + name; };

// Arrow function
const greet3 = (name) => "Hello " + name;

// Generator function
function* counter() { yield 1; yield 2; yield 3; }`
      },
      {
        q: "Explain prototypal inheritance in JavaScript.",
        a: "JavaScript objects have an internal [[Prototype]] link. Property lookups walk up the prototype chain. Object.create() sets prototypes explicitly. Classes are syntactic sugar over this mechanism. When you access a property, JS looks on the object first, then its prototype, then prototype's prototype, until null.",
        oneLiner: "Objects inherit properties via a prototype chain — lookups walk up until null.",
        code: `const animal = {
  speak() { console.log(this.sound); }
};
const dog = Object.create(animal);
dog.sound = "Woof!";
dog.speak(); // "Woof!" (found speak() on prototype)

// Class syntax (sugar over prototypes)
class Animal {
  constructor(sound) { this.sound = sound; }
  speak() { console.log(this.sound); }
}
class Dog extends Animal {
  constructor() { super("Woof!"); }
}
new Dog().speak(); // "Woof!"`
      },
      {
        q: "What were the 10 new features introduced in ES6? Explain each.",
        a: "ES6 (ES2015) introduced: (1) let/const — block-scoped variables. (2) Arrow functions — concise syntax with lexical 'this'. (3) Template literals — backtick strings with interpolation. (4) Destructuring — extract values from arrays/objects. (5) Default parameters. (6) Rest/Spread operators (...). (7) Promises — async handling. (8) Classes — OOP syntax. (9) Modules — import/export. (10) Symbol — new primitive type. Other notable: Map/Set, for...of, generators, iterators.",
        oneLiner: "let/const, arrows, templates, destructuring, defaults, rest/spread, Promises, classes, modules, Symbol.",
        code: `// 1. let & const
let x = 1; const y = 2;

// 2. Arrow functions
const add = (a, b) => a + b;

// 3. Template literals
const name = "World";
console.log(\`Hello \${name}!\`);

// 4. Destructuring
const { a, b } = { a: 1, b: 2 };
const [first, ...rest] = [1, 2, 3];

// 5. Default parameters
function greet(name = "Guest") { return \`Hi \${name}\`; }

// 6. Spread/Rest
const arr = [...[1,2], ...[3,4]]; // [1,2,3,4]

// 7. Promises
const p = new Promise(resolve => resolve("done"));

// 8. Classes
class Person { constructor(n) { this.name = n; } }

// 9. Modules
// export const utils = {}; import { utils } from './utils';

// 10. Symbol
const id = Symbol("unique");`
      },
      {
        q: "Explain Call, Apply, Bind. When to use what?",
        a: "All three set the 'this' value for a function. call(thisArg, arg1, arg2) — calls immediately with individual args. apply(thisArg, [args]) — calls immediately with args as array. bind(thisArg, arg1) — returns a NEW function with 'this' permanently set, doesn't call immediately. Use call for borrowing methods, apply when args are in an array, bind for event handlers or callbacks.",
        oneLiner: "call = invoke with args; apply = invoke with array of args; bind = return new function with fixed 'this'.",
        code: `const person = { name: "John" };

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

// call — pass args individually
greet.call(person, "Hello", "!");    // "Hello, John!"

// apply — pass args as array
greet.apply(person, ["Hi", "."]);    // "Hi, John."

// bind — returns new function (doesn't call)
const boundGreet = greet.bind(person, "Hey");
boundGreet("?");                      // "Hey, John?"

// Practical use: Math.max with array
const nums = [1, 5, 3, 9, 2];
console.log(Math.max.apply(null, nums)); // 9
console.log(Math.max(...nums));          // 9 (modern way)`
      },
      {
        q: "What are different ways to store data in the browser?",
        a: "5 main ways: (1) localStorage — persists until cleared, ~5MB, sync, string-only. (2) sessionStorage — cleared when tab closes, ~5MB, sync. (3) Cookies — 4KB, sent with every request, can set expiry. (4) IndexedDB — large structured data, async, good for offline apps. (5) Cache API — for caching network responses (Service Workers). Use localStorage for preferences, sessionStorage for temp data, cookies for auth tokens, IndexedDB for large data, Cache API for offline.",
        oneLiner: "localStorage (permanent), sessionStorage (tab), cookies (server-sent), IndexedDB (large data), Cache API (offline).",
        code: `// localStorage — persists forever
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

// sessionStorage — cleared on tab close
sessionStorage.setItem("temp", "data");

// Cookies
document.cookie = "user=John; max-age=3600; path=/";

// IndexedDB (simplified)
const request = indexedDB.open("myDB", 1);
request.onsuccess = (e) => {
  const db = e.target.result;
  // ... create stores and transactions
};`
      },
      {
        q: "What are generator functions? How are they different from normal functions?",
        a: "Generator functions (function*) can pause execution with 'yield' and resume later. They return an iterator with a .next() method. Each .next() runs until the next yield, returning { value, done }. Normal functions run to completion. Generators are useful for lazy evaluation, infinite sequences, and custom iterators.",
        oneLiner: "function* with yield — can pause/resume execution, returning values incrementally.",
        code: `// Generator function
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGen();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Infinite sequence
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2`
      },
      {
        q: "Explain the different ways of creating objects in JavaScript.",
        a: "3 main ways: (1) Object literal — simplest: const obj = { key: value }. (2) Constructor function — use 'new': function Person(n) { this.name = n }; new Person('John'). (3) Object.create() — creates object with specified prototype: Object.create(proto). Also: class syntax (sugar over constructor), and Object constructor: new Object().",
        oneLiner: "Object literal {}, constructor function with new, and Object.create(proto).",
        code: `// 1. Object literal (most common)
const person1 = { name: "John", age: 30 };

// 2. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person2 = new Person("Jane", 25);

// 3. Object.create (prototype-based)
const proto = {
  greet() { console.log("Hi, " + this.name); }
};
const person3 = Object.create(proto);
person3.name = "Bob";
person3.greet(); // "Hi, Bob"

// Bonus: Class syntax
class PersonClass {
  constructor(name) { this.name = name; }
}
const person4 = new PersonClass("Alice");`
      },
      {
        q: "What are Object Prototype Methods?",
        a: "Object prototype methods are methods available on all objects via the prototype chain. Key ones: hasOwnProperty() — checks if property belongs to object directly. toString() — string representation. valueOf() — primitive value. isPrototypeOf() — checks prototype chain. Also static methods: Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.create().",
        oneLiner: "Methods inherited by all objects: hasOwnProperty, toString, valueOf + static methods like Object.keys.",
        code: `const obj = { name: "John", age: 30 };

// Instance methods (on prototype)
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.toString());             // "[object Object]"

// Static methods
console.log(Object.keys(obj));    // ["name", "age"]
console.log(Object.values(obj));  // ["John", 30]
console.log(Object.entries(obj)); // [["name","John"],["age",30]]

const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Silently fails (or error in strict mode)`
      },
      {
        q: "What is object chaining in JavaScript?",
        a: "Object chaining (method chaining) is a pattern where each method returns 'this' (the object itself), allowing you to call multiple methods in a single statement. It creates fluent, readable APIs. Popular in jQuery, Lodash, and builder patterns. The key: every method must return 'this'.",
        oneLiner: "Each method returns 'this', enabling obj.method1().method2().method3().",
        code: `class Calculator {
  constructor() { this.value = 0; }
  add(n) { this.value += n; return this; }      // returns this
  subtract(n) { this.value -= n; return this; }  // returns this
  multiply(n) { this.value *= n; return this; }  // returns this
  result() { return this.value; }
}

const answer = new Calculator()
  .add(10)
  .subtract(3)
  .multiply(2)
  .result();
console.log(answer); // 14`
      },
      {
        q: "What are the advantages of Axios vs other competitors (fetch, http, got)?",
        a: "Axios advantages over fetch: (1) Automatic JSON parsing. (2) Request/response interceptors. (3) Automatic request cancellation with AbortController. (4) Request timeout support built-in. (5) XSRF protection. (6) Upload progress monitoring. (7) Works in Node.js and browsers. (8) Better error handling — rejects on 4xx/5xx status codes. (9) Automatic transforms for request/response data.",
        oneLiner: "Auto JSON, interceptors, timeout, progress tracking, works in Node+browser, rejects on HTTP errors.",
        code: `// Fetch (verbose)
const res = await fetch("/api/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John" })
});
if (!res.ok) throw new Error("Failed");
const data = await res.json();

// Axios (cleaner)
const { data } = await axios.post("/api/data", { name: "John" });
// Auto JSON, auto error on 4xx/5xx`
      },
      {
        q: "What are polyfills in JavaScript?",
        a: "A polyfill is code that provides modern functionality in older browsers that don't natively support it. For example, if a browser doesn't support Array.includes(), you can write a polyfill that adds this method to Array.prototype. Common polyfills: Promise, fetch, Array.from, Object.assign. Tools like Babel and core-js automate polyfilling.",
        oneLiner: "Code that adds modern JS features to older browsers that lack native support.",
        code: `// Polyfill for Array.prototype.map
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}
console.log([1,2,3].myMap(x => x * 2)); // [2, 4, 6]

// Polyfill for Array.prototype.filter
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Polyfill for Array.prototype.reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  const start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};`
      },
      {
        q: "Higher Order Functions — Detailed with Polyfill",
        a: "A higher-order function (HOF) either takes a function as an argument or returns a function. map, filter, reduce, forEach are all HOFs. Understanding them deeply means knowing how to write polyfills — your own implementations of these methods. Interviewers love asking for polyfills because it tests your understanding of 'this', callbacks, and array manipulation.",
        oneLiner: "Functions that take/return functions — master by writing polyfills for map, filter, reduce.",
        code: `// Polyfill for Array.prototype.map
Array.prototype.myMap = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// Polyfill for Array.prototype.filter
Array.prototype.myFilter = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// Polyfill for Array.prototype.reduce
Array.prototype.myReduce = function(cb, init) {
  let acc = init !== undefined ? init : this[0];
  const start = init !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log([1,2,3].myMap(x => x * 2));    // [2,4,6]
console.log([1,2,3,4].myFilter(x => x > 2)); // [3,4]
console.log([1,2,3].myReduce((a,b) => a+b, 0)); // 6`
      },
      {
        q: "Promise.all, Promise.allSettled, Promise.race, Promise.any — What's the difference?",
        a: "Promise.all — waits for ALL to fulfill; rejects if ANY one rejects. Promise.allSettled — waits for ALL to settle (fulfill or reject); never short-circuits. Promise.race — resolves/rejects as soon as the FIRST promise settles (win or lose). Promise.any — resolves as soon as the FIRST promise FULFILLS; only rejects if ALL reject (AggregateError).",
        oneLiner: "all = all succeed or fail fast; allSettled = wait for all; race = first to settle; any = first to succeed.",
        code: `const p1 = Promise.resolve("A");
const p2 = new Promise(res => setTimeout(() => res("B"), 1000));
const p3 = Promise.reject("Error!");

// Promise.all — fails fast on first rejection
Promise.all([p1, p2]).then(console.log); // ["A", "B"]
Promise.all([p1, p3]).catch(console.log); // "Error!"

// Promise.allSettled — always returns all results
Promise.allSettled([p1, p3]).then(console.log);
// [{status:"fulfilled",value:"A"}, {status:"rejected",reason:"Error!"}]

// Promise.race — first to settle wins
Promise.race([p1, p2]).then(console.log); // "A" (p1 resolves instantly)

// Promise.any — first to FULFILL wins
Promise.any([p3, p2]).then(console.log); // "B" (p3 rejected, p2 fulfills)
Promise.any([p3, Promise.reject("X")])
  .catch(e => console.log(e)); // AggregateError (all rejected)`
      },
      {
        q: "What is the Prototype Chain? How does property lookup work?",
        a: "Every JS object has a hidden [[Prototype]] link to another object. When you access a property, JS first checks the object itself. If not found, it walks up the prototype chain — checking the prototype, then prototype's prototype, until it reaches null. This is how inheritance works in JS. Object.prototype sits at the top of most chains.",
        oneLiner: "Property lookup walks up linked prototypes until found or null — this IS JavaScript inheritance.",
        code: `const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.jumps); // true (own property)
console.log(rabbit.eats);  // true (found on prototype)
console.log(rabbit.toString); // function (found on Object.prototype)

// Checking the chain
console.log(rabbit.__proto__ === animal); // true
console.log(animal.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// hasOwnProperty vs in
console.log(rabbit.hasOwnProperty("jumps")); // true
console.log(rabbit.hasOwnProperty("eats"));  // false
console.log("eats" in rabbit); // true (checks chain)`
      },
      {
        q: "Explain the Event Loop in detail (Call Stack, Web APIs, Callback Queue, Microtask Queue).",
        a: "The Event Loop is how JS handles async code despite being single-threaded. Flow: (1) Synchronous code runs on the Call Stack. (2) Async operations (setTimeout, fetch) are handed to Web APIs. (3) When complete, callbacks go to the Callback Queue (macrotasks) or Microtask Queue (Promises). (4) The Event Loop checks: if call stack is empty → run ALL microtasks first → then ONE macrotask → repeat. Microtasks (Promises, queueMicrotask) always run before macrotasks (setTimeout, setInterval).",
        oneLiner: "Call Stack → Web APIs → Queues → Event Loop picks microtasks first, then macrotasks.",
        code: `console.log("1"); // sync — call stack

setTimeout(() => console.log("2"), 0); // macrotask queue

Promise.resolve().then(() => console.log("3")); // microtask queue

console.log("4"); // sync — call stack

// Output: 1, 4, 3, 2
// Why: sync first (1,4), then microtask (3), then macrotask (2)

// Deeper example
setTimeout(() => console.log("A"), 0);
Promise.resolve()
  .then(() => {
    console.log("B");
    Promise.resolve().then(() => console.log("C"));
  });
console.log("D");
// Output: D, B, C, A
// Microtasks can schedule more microtasks — all run before any macrotask`
      },
      {
        q: "How does JavaScript execute a program? (GEC, Function Execution Context, Call Stack)",
        a: "When JS runs, it creates a Global Execution Context (GEC) with two phases: (1) Memory Creation Phase — variables are hoisted (var=undefined, let/const=TDZ, functions=full definition). (2) Code Execution Phase — code runs line by line. When a function is called, a new Function Execution Context (FEC) is created and pushed onto the Call Stack. When it returns, the FEC is popped off. The Call Stack is LIFO — last in, first out.",
        oneLiner: "GEC created → memory phase (hoisting) → execution phase → function calls push FECs onto call stack.",
        code: `// How JS executes this:
var x = 10;
function greet(name) {
  var msg = "Hello " + name;
  return msg;
}
var result = greet("World");

// Step 1: GEC Memory Phase
// x = undefined, greet = function def, result = undefined

// Step 2: GEC Execution Phase
// x = 10
// greet("World") → new FEC pushed to call stack
//   FEC Memory: name = "World", msg = undefined
//   FEC Execution: msg = "Hello World", return msg
//   FEC popped off call stack
// result = "Hello World"

// Call Stack visualization:
// [greet FEC] ← top (executing)
// [GEC]       ← bottom (waiting)
// After greet returns:
// [GEC]       ← continues executing`
      },
      {
        q: "What are Interceptors? (Axios Interceptors example)",
        a: "Interceptors are functions that run BEFORE a request is sent or BEFORE a response is handled. They intercept the request/response pipeline. Axios interceptors are the most common use case — you can add auth tokens to every request, log requests, handle errors globally, or refresh expired tokens automatically. Think of them as middleware for HTTP calls.",
        oneLiner: "Middleware for HTTP calls — run code before request is sent or before response is processed.",
        code: `// Axios Request Interceptor — add auth token to every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = "Bearer " + token;
    console.log("Request:", config.method, config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios Response Interceptor — handle errors globally
axios.interceptors.response.use(
  (response) => response, // pass through successful responses
  (error) => {
    if (error.response?.status === 401) {
      // Token expired — redirect to login
      window.location.href = "/login";
    }
    if (error.response?.status === 500) {
      alert("Server error! Try again later.");
    }
    return Promise.reject(error);
  }
);`
      },
    ],
    CodingOutput: [
      {
        q: "What is the output? var a = 1; function foo() { console.log(a); var a = 2; } foo();",
        a: "Output: undefined. This is because of hoisting. Inside foo(), 'var a' is hoisted to the top of the function, so the local 'a' exists but is undefined at the time of console.log. The local 'a' shadows the global 'a'. It's like: function foo() { var a; console.log(a); a = 2; }",
        oneLiner: "undefined — var hoists local 'a' to top of function as undefined, shadowing global 'a'.",
        code: `var a = 1;
function foo() {
  console.log(a); // undefined (hoisted local 'a')
  var a = 2;
}
foo();`
      },
      {
        q: "What is the output? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
        a: "Output: 3, 3, 3. Because 'var' is function-scoped, there's only ONE 'i' shared by all callbacks. By the time setTimeout callbacks execute, the loop has finished and i = 3. Fix: use 'let' (block-scoped, each iteration gets its own i) or use an IIFE to capture i.",
        oneLiner: "3, 3, 3 — var shares one 'i'; callbacks run after loop ends when i=3. Fix: use let.",
        code: `// Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3, 3, 3

// Fix 1: let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 0, 1, 2

// Fix 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}
// Output: 0, 1, 2`
      },
      {
        q: "What is the output? console.log(typeof null); console.log(typeof undefined); console.log(typeof NaN);",
        a: "Output: 'object', 'undefined', 'number'. typeof null === 'object' is a famous JS bug from the first implementation (kept for backward compatibility). typeof undefined is 'undefined'. NaN is technically a number type — it represents a failed numeric operation, so typeof NaN === 'number'.",
        oneLiner: "'object', 'undefined', 'number' — null is a bug, NaN is a numeric type.",
      },
      {
        q: "What is the output? console.log(1 + '2' + 3); console.log(1 + 2 + '3');",
        a: "Output: '123' and '33'. JS evaluates left to right. In the first: 1 + '2' = '12' (number + string = string), then '12' + 3 = '123'. In the second: 1 + 2 = 3 (number + number), then 3 + '3' = '33' (number + string = string). This is type coercion in action.",
        oneLiner: "'123' and '33' — string concatenation happens as soon as a string operand appears (left to right).",
      },
      {
        q: "What is the output? const obj = { a: 1, b: 2 }; const { a: x, b: y } = obj; console.log(a); console.log(x);",
        a: "Output: ReferenceError for console.log(a). When destructuring with renaming { a: x }, 'a' is the source key and 'x' is the new variable name. Only 'x' and 'y' are declared as variables. 'a' is not a variable — it was just the property name used for extraction.",
        oneLiner: "ReferenceError — { a: x } creates variable 'x' not 'a'; 'a' is just the property key.",
        code: `const obj = { a: 1, b: 2 };
const { a: x, b: y } = obj;
// console.log(a); // ReferenceError: a is not defined
console.log(x); // 1
console.log(y); // 2`
      },
      {
        q: "What is the output? console.log([] == false); console.log([] == ![]); console.log('' == false);",
        a: "Output: true, true, true. These are all type coercion traps. [] == false: [] converts to '' then to 0; false converts to 0; 0 == 0 is true. [] == ![]: ![] is false, so [] == false (same as above). '' == false: '' converts to 0; false converts to 0; 0 == 0 is true. This is why you should always use ===.",
        oneLiner: "All true — type coercion converts [], '', and false to 0. Always use === to avoid this.",
      },
      {
        q: "What is the output? async function foo() { return 1; } const result = foo(); console.log(result);",
        a: "Output: Promise { 1 }. An async function ALWAYS returns a Promise, even if you return a plain value. The value 1 is automatically wrapped in Promise.resolve(1). To get the actual value, you need await foo() or foo().then(val => console.log(val)).",
        oneLiner: "Promise {1} — async functions always return a Promise; use await or .then() to unwrap.",
        code: `async function foo() { return 1; }
const result = foo();
console.log(result); // Promise { 1 }

// To get the value:
foo().then(val => console.log(val)); // 1
// or
const val = await foo(); // 1 (inside async context)`
      },
      {
        q: "What is the output? let x = 10; const fn = () => { console.log(x); let x = 20; }; fn();",
        a: "Output: ReferenceError: Cannot access 'x' before initialization. Even though there's a global x = 10, the 'let x = 20' inside fn() creates a new block-scoped x that shadows the global one. But 'let' has a Temporal Dead Zone (TDZ) — you can't access it before the declaration line. So console.log(x) tries to access the local x which is still in TDZ.",
        oneLiner: "ReferenceError — local let x shadows global x but is in Temporal Dead Zone before declaration.",
        code: `let x = 10;
const fn = () => {
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 20; // This shadows global x, creates TDZ above
  console.log(x); // 20 (works here, after declaration)
};
fn();`
      },
      {
        q: "What is the output? console.log('start'); setTimeout(() => console.log('timeout'), 0); Promise.resolve().then(() => console.log('promise')); console.log('end');",
        a: "Output: 'start', 'end', 'promise', 'timeout'. Sync code runs first (start, end). Then the event loop processes microtasks (Promise.then) before macrotasks (setTimeout). Even though setTimeout has 0ms delay, microtasks always execute first.",
        oneLiner: "start, end, promise, timeout — sync first, then microtasks (Promise), then macrotasks (setTimeout).",
      },
    ],
    SystemDesign: [
      {
        q: "Design a URL Shortener (like bit.ly)",
        a: "Key components: (1) API: POST /shorten takes a long URL, generates a short code (Base62 encoding of auto-increment ID or hash), stores mapping in DB, returns short URL. GET /:code looks up the original URL and redirects (301/302). (2) Database: Table with columns id, short_code (indexed), original_url, created_at, click_count. (3) Scalability: Use caching (Redis) for popular URLs, database sharding by short_code prefix, rate limiting to prevent abuse. (4) Analytics: Track clicks, referrers, geo-location.",
        oneLiner: "Generate short code (Base62/hash) → store in DB → redirect on access → cache popular URLs.",
        code: `// Simplified URL shortener logic
const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encode(num) {
  let str = "";
  while (num > 0) {
    str = BASE62[num % 62] + str;
    num = Math.floor(num / 62);
  }
  return str || "0";
}

// POST /shorten
async function shorten(originalUrl) {
  const id = await db.insert({ original_url: originalUrl }); // auto-increment ID
  const shortCode = encode(id); // e.g., 1000 → "g8"
  return "https://short.ly/" + shortCode;
}

// GET /:code — redirect
async function redirect(shortCode) {
  const cached = await redis.get(shortCode);
  if (cached) return redirect(cached); // cache hit
  const url = await db.findByCode(shortCode);
  await redis.set(shortCode, url, "EX", 3600); // cache 1hr
  return redirect(url);
}`
      },
      {
        q: "Design an Autocomplete/Search Component",
        a: "Key considerations: (1) Debounce input — don't fire API on every keystroke (300ms delay). (2) Cancel previous requests when new input arrives (AbortController). (3) Client-side cache — store results for previously typed queries. (4) Backend: Trie data structure or Elasticsearch for prefix matching. (5) UX: Show loading state, highlight matching text, keyboard navigation (arrow keys + Enter), handle empty states. (6) Performance: Virtualize long lists, limit results to 10-20.",
        oneLiner: "Debounce input → cancel old requests → cache results → trie/search backend → keyboard navigation.",
        code: `// React autocomplete with debounce + abort
function useAutocomplete(query) {
  const [results, setResults] = useState([]);
  const cache = useRef({});
  
  useEffect(() => {
    if (!query) { setResults([]); return; }
    if (cache.current[query]) {
      setResults(cache.current[query]);
      return;
    }
    
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(\`/api/search?q=\${query}\`, {
          signal: controller.signal
        });
        const data = await res.json();
        cache.current[query] = data;
        setResults(data);
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
      }
    }, 300); // debounce 300ms
    
    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);
  
  return results;
}`
      },
      {
        q: "Design Infinite Scroll",
        a: "Key components: (1) Intersection Observer — watch a sentinel element at the bottom; when visible, fetch next page. (2) Pagination: cursor-based (last item ID) is better than offset-based for dynamic data. (3) State management: track page/cursor, loading state, hasMore flag. (4) Performance: virtualize rendered items (react-window/react-virtuoso), keep only visible items in DOM. (5) UX: loading skeleton at bottom, 'back to top' button, preserve scroll position on back navigation.",
        oneLiner: "IntersectionObserver on sentinel → fetch next page (cursor-based) → virtualize for performance.",
        code: `// React infinite scroll with IntersectionObserver
function InfiniteList() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);
  
  const loadMore = useCallback(async () => {
    const res = await fetch(\`/api/items?cursor=\${cursor || ""}&limit=20\`);
    const { data, nextCursor } = await res.json();
    setItems(prev => [...prev, ...data]);
    setCursor(nextCursor);
    if (!nextCursor) setHasMore(false);
  }, [cursor]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && hasMore) loadMore(); },
      { threshold: 0.1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loadMore, hasMore]);
  
  return (
    <>
      {items.map(item => <div key={item.id}>{item.name}</div>)}
      {hasMore && <div ref={sentinelRef}>Loading...</div>}
    </>
  );
}`
      },
      {
        q: "Design a Real-Time Chat System",
        a: "Architecture: (1) WebSockets (Socket.io/native WS) for real-time messaging — persistent connection between client and server. (2) Message flow: client sends → server broadcasts to room → other clients receive. (3) Database: Store messages with sender_id, room_id, content, timestamp. (4) Features: typing indicators, read receipts, message history on scroll-up (pagination). (5) Scalability: Redis Pub/Sub for multi-server, message queue for offline users, connection pooling.",
        oneLiner: "WebSockets for real-time → server broadcasts to rooms → persist in DB → Redis for multi-server scale.",
        code: `// Client-side chat with WebSocket
const socket = new WebSocket("wss://chat.example.com");

socket.onopen = () => {
  socket.send(JSON.stringify({ type: "join", room: "general" }));
};

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.type === "message") displayMessage(msg);
  if (msg.type === "typing") showTypingIndicator(msg.user);
};

function sendMessage(text) {
  socket.send(JSON.stringify({
    type: "message",
    room: "general",
    content: text,
    timestamp: Date.now()
  }));
}

// Server-side (Node.js simplified)
// wss.on("connection", (ws) => {
//   ws.on("message", (data) => {
//     const msg = JSON.parse(data);
//     saveToDatabase(msg);
//     broadcastToRoom(msg.room, msg);
//   });
// });`
      },
      {
        q: "Design a Rate Limiter",
        a: "Algorithms: (1) Fixed Window — count requests per time window (e.g., 100/min). Simple but allows burst at window boundaries. (2) Sliding Window Log — track timestamps of each request, count within sliding time range. Accurate but memory-heavy. (3) Token Bucket — tokens added at fixed rate; each request consumes a token. Allows controlled bursts. (4) Sliding Window Counter — hybrid of fixed and sliding. Implementation: Use Redis for distributed rate limiting (INCR + EXPIRE). Return 429 status with Retry-After header.",
        oneLiner: "Token bucket or sliding window → Redis for distributed counting → 429 Too Many Requests + Retry-After.",
        code: `// Simple token bucket rate limiter
class RateLimiter {
  constructor(maxTokens, refillRate) {
    this.tokens = maxTokens;
    this.maxTokens = maxTokens;
    this.refillRate = refillRate; // tokens per second
    this.lastRefill = Date.now();
  }
  
  allowRequest() {
    this.refill();
    if (this.tokens > 0) {
      this.tokens--;
      return true; // allowed
    }
    return false; // rate limited (429)
  }
  
  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000;
    this.tokens = Math.min(this.maxTokens, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;
  }
}

const limiter = new RateLimiter(10, 1); // 10 max, 1/sec refill
// In middleware:
// if (!limiter.allowRequest()) return res.status(429).json({ error: "Too many requests" });`
      },
      {
        q: "Design a Caching Strategy for a Web App",
        a: "Layers: (1) Browser cache — Cache-Control headers (max-age, stale-while-revalidate). (2) CDN — cache static assets at edge locations (Cloudflare, AWS CloudFront). (3) Application cache — in-memory LRU cache (Redis/Memcached) for DB query results. (4) Strategies: Cache-Aside (check cache, miss → fetch → store), Write-Through (write to cache + DB), Write-Behind (write cache, async DB). (5) Invalidation: TTL-based, event-driven (on data change), versioned keys. Cache invalidation is the hardest problem in CS.",
        oneLiner: "Browser → CDN → App cache (Redis) with Cache-Aside pattern → TTL + event-based invalidation.",
        code: `// Cache-Aside pattern (most common)
async function getUserById(id) {
  // 1. Check cache first
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached); // cache HIT
  
  // 2. Cache MISS — fetch from DB
  const user = await db.users.findById(id);
  
  // 3. Store in cache with TTL
  await redis.set(\`user:\${id}\`, JSON.stringify(user), "EX", 3600); // 1hr
  
  return user;
}

// Cache invalidation on update
async function updateUser(id, data) {
  await db.users.update(id, data);
  await redis.del(\`user:\${id}\`); // invalidate cache
}

// HTTP caching headers
// Cache-Control: public, max-age=3600, stale-while-revalidate=60
// ETag: "abc123" (conditional requests with If-None-Match)`
      },
    ],
  },
  aws: {
    Beginner: [
      { q: "What is AWS?", a: "AWS (Amazon Web Services) is a cloud computing platform by Amazon providing on-demand services like computing power (EC2), storage (S3), databases (RDS), networking, and more. Pay only for what you use — no upfront hardware costs.", oneLiner: "Amazon's cloud platform with 200+ services — compute, storage, databases on demand.", hinglish: "AWS Amazon ka cloud platform hai jahan servers, storage, databases sab rent pe milta hai. Apna hardware kharidne ki zaroorat nahi — jitna use karo utna pay karo." },
      { q: "What is EC2?", a: "EC2 (Elastic Compute Cloud) is a virtual server in the cloud. Choose instance type (CPU, RAM), operating system, and storage. It's like renting a computer online — start/stop anytime. t2.micro is free tier eligible.", oneLiner: "Virtual server in the cloud — rent compute power with custom CPU, RAM, and OS.", hinglish: "EC2 ek virtual server hai cloud mein. Jaise computer rent karte ho — CPU, RAM, OS choose karo aur apna code deploy karo. t2.micro free tier mein aata hai." },
      { q: "What is S3?", a: "S3 (Simple Storage Service) provides object storage for files, images, and static websites. It's highly durable (99.999999999%) and can host your React build as a static website. Objects are stored in buckets.", oneLiner: "Object storage service — store files, host static websites, 99.999999999% durable.", hinglish: "S3 ek storage service hai jahan files, images, videos store karte hain. React app ka build folder S3 pe host kar sakte ho as static website. Bahut reliable hai." },
      { q: "What is IAM?", a: "IAM (Identity and Access Management) controls who can access your AWS resources. Create users, groups, roles, and policies. Follow least privilege principle — give only permissions that are needed.", oneLiner: "Controls who can access what in AWS — users, roles, permissions, policies.", hinglish: "IAM se control karte hain ki kaun kya access kar sakta hai AWS mein. Users banao, roles assign karo, policies set karo. Sirf zaroori permissions do — security ke liye important hai." },
      { q: "What are AWS Regions and Availability Zones?", a: "Regions are geographic areas (us-east-1, ap-south-1) with multiple data centers. Each region has 2-6 Availability Zones (AZs) which are isolated data centers. Deploy in region closest to your users for low latency.", oneLiner: "Regions = geographic areas; AZs = isolated data centers within a region.", hinglish: "Regions geographic locations hain jaise Mumbai (ap-south-1). Har region mein multiple Availability Zones hain jo alag data centers hain. Users ke paas wala region choose karo for fast speed." },
    ],
    Intermediate: [
      { q: "How to deploy a Node.js backend on EC2?", a: "Steps: 1) Launch EC2 instance (Ubuntu). 2) SSH into it. 3) Install Node.js and Git. 4) Clone your repo. 5) npm install. 6) Set up PM2 for process management. 7) Configure Nginx as reverse proxy. 8) Open port 80 in security group. 9) Point domain via Route 53.", oneLiner: "Launch EC2 → SSH → install Node.js → clone repo → PM2 + Nginx → open ports.", hinglish: "EC2 launch karo (Ubuntu), SSH se connect karo, Node.js install karo, repo clone karo, PM2 se app chalao, Nginx reverse proxy lagao, aur port 80 kholo security group mein.",
        code: `# SSH into EC2
ssh -i my-key.pem ubuntu@ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone and run
git clone https://github.com/user/my-api.git
cd my-api && npm install

# PM2 — keeps app running
sudo npm install -g pm2
pm2 start server.js
pm2 startup && pm2 save` },
      { q: "How to deploy React frontend on S3 + CloudFront?", a: "Steps: 1) npm run build. 2) Create S3 bucket with static website hosting enabled. 3) Upload build files. 4) Create CloudFront distribution pointing to S3. 5) Set index.html as default root and error page (for SPA routing). 6) Add custom domain via Route 53.", oneLiner: "Build React → upload to S3 → CloudFront CDN → custom domain via Route 53.", hinglish: "React app build karo, S3 bucket banao, build files upload karo, CloudFront se CDN lagao speed ke liye, aur Route 53 se domain point karo. SPA routing ke liye error page bhi index.html set karo.",
        code: `# Build React app
npm run build

# Upload to S3
aws s3 sync build/ s3://my-react-app --delete

# CloudFront settings:
# Origin: my-react-app.s3.amazonaws.com
# Default Root Object: index.html
# Custom Error Response: 404 → /index.html (for SPA routing)` },
      { q: "What is Elastic Beanstalk?", a: "Elastic Beanstalk is a PaaS (Platform as a Service) that automatically handles deployment, scaling, load balancing, and monitoring. Upload your Node.js app and it provisions EC2, auto-scaling groups, and load balancers. Easier than manual EC2 setup.", oneLiner: "PaaS that auto-manages EC2, scaling, load balancing — just upload your code.", hinglish: "Elastic Beanstalk ek PaaS hai — code upload karo aur AWS automatically EC2, load balancer, auto-scaling sab set kar deta hai. Manual setup nahi karna padta." },
      { q: "What is PM2 and why use it for Node.js?", a: "PM2 is a production process manager for Node.js. It keeps your app running (auto-restart on crash), manages multiple instances (cluster mode for multi-core), provides logging, and survives server reboots with pm2 startup.", oneLiner: "Node.js process manager — auto-restart, cluster mode, logs, survives reboots.", hinglish: "PM2 ek process manager hai Node.js ke liye. App crash hone pe auto-restart karta hai, cluster mode mein multiple instances chala sakta hai, aur server reboot ke baad bhi app live rehti hai." },
      { q: "How to set up Nginx as reverse proxy for Node.js?", a: "Nginx sits in front of your Node.js app, handling HTTP (port 80), HTTPS (port 443), load balancing, and static files. It forwards requests to your Node.js app running on port 3000/5000.", oneLiner: "Nginx handles HTTP/HTTPS on port 80/443 and forwards to Node.js on port 3000.", hinglish: "Nginx ek reverse proxy hai — port 80 pe requests aati hain, Nginx unhe Node.js app (port 3000) pe forward karta hai. SSL, load balancing, aur caching bhi handle karta hai.",
        code: `# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name myapp.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}` },
      { q: "How to manage environment variables on AWS?", a: "Options: 1) .env file on EC2 (not in Git). 2) AWS Systems Manager Parameter Store — secure, versioned, free tier. 3) AWS Secrets Manager — auto-rotation, paid. 4) Elastic Beanstalk environment variables (dashboard). Never commit secrets to Git.", oneLiner: "Use Parameter Store (free) or Secrets Manager — never commit .env to Git.", hinglish: "Environment variables .env file mein rakh sakte ho EC2 pe (Git mein mat dalo!). Better way: AWS Parameter Store use karo — secure hai aur free tier mein aata hai." },
      { q: "What is Route 53?", a: "Route 53 is AWS's DNS service. It maps domain names to IP addresses. You can register domains, create hosted zones, and set up routing policies (simple, weighted, latency-based, failover). Use it to point your domain to EC2 or CloudFront.", oneLiner: "AWS DNS service — maps domains to IPs, supports routing policies and health checks.", hinglish: "Route 53 AWS ka DNS service hai. Custom domain (jaise myapp.com) ko EC2 ya CloudFront pe point karne ke liye use hota hai. Domain registration bhi kar sakte ho." },
    ],
    Advanced: [
      { q: "Explain full MERN deployment architecture on AWS.", a: "Architecture: Frontend (React build) → S3 + CloudFront (CDN + HTTPS). Backend (Node.js/Express) → EC2 + PM2 + Nginx (or Elastic Beanstalk). Database → MongoDB Atlas (managed) or DocumentDB. Domain → Route 53. SSL → ACM (free certificates). CI/CD → GitHub Actions or CodePipeline.", oneLiner: "React on S3+CloudFront, Node.js on EC2+Nginx+PM2, MongoDB Atlas, Route 53+ACM.", hinglish: "Full architecture: React app S3 + CloudFront pe host karo, Node.js API EC2 pe PM2 + Nginx ke saath chalao, MongoDB Atlas use karo database ke liye, Route 53 se domain point karo, aur ACM se free SSL lagao." },
      { q: "How to set up CI/CD for MERN app on AWS?", a: "Use GitHub Actions: On push to main → build React → upload to S3 → invalidate CloudFront cache. For backend → SSH into EC2 → git pull → npm install → pm2 restart. Alternatively use AWS CodePipeline + CodeBuild for fully AWS-native CI/CD.", oneLiner: "GitHub Actions: push → build → deploy to S3/EC2 automatically on every commit.", hinglish: "CI/CD matlab har commit pe automatically deploy ho jaaye. GitHub Actions use karo — push karo, React build ho, S3 pe upload ho, backend EC2 pe update ho. Sab automatic!",
        code: `# .github/workflows/deploy.yml
name: Deploy MERN
on:
  push:
    branches: [main]
jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: cd client && npm ci && npm run build
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_KEY }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET }}
          aws-region: ap-south-1
      - run: aws s3 sync client/build/ s3://my-app --delete` },
      { q: "What is CloudFront and why use it?", a: "CloudFront is AWS's CDN — it caches your content at 400+ edge locations worldwide. Benefits: faster page loads (content served from nearest edge), HTTPS with free ACM certificates, DDoS protection, and reduced S3 costs (fewer direct requests).", oneLiner: "AWS CDN — caches content at edge locations worldwide for faster delivery + free HTTPS.", hinglish: "CloudFront ek CDN hai — aapki files duniya bhar ke servers pe cache hoti hain. User ko nearest server se content milta hai toh fast load hota hai. Free HTTPS bhi milta hai." },
      { q: "How to set up SSL/HTTPS on AWS?", a: "Use ACM (AWS Certificate Manager) for free SSL certificates. For CloudFront: request certificate in ACM (us-east-1 region), attach to CloudFront distribution. For EC2: use Certbot (Let's Encrypt) with Nginx for free SSL, or use ACM with ALB (Application Load Balancer).", oneLiner: "ACM for free SSL + CloudFront/ALB, or Certbot + Nginx on EC2.", hinglish: "SSL ke liye ACM (AWS Certificate Manager) use karo — free hai! CloudFront ke saath attach karo. EC2 pe Certbot (Let's Encrypt) + Nginx se free SSL laga sakte ho." },
      { q: "What is AWS Lambda and when to use it?", a: "Lambda runs code without managing servers (serverless). Write a function, define trigger (API Gateway, S3 event, schedule), pay per execution. Use for: API endpoints, image processing, scheduled jobs, webhooks. Not ideal for long-running processes (15 min max).", oneLiner: "Serverless functions — write code, set trigger, pay per execution. No servers to manage.", hinglish: "Lambda serverless hai — code likho, trigger set karo (API call, S3 upload), aur sirf execution ke paise lagenge. Server manage nahi karna padta. Chhote tasks ke liye best hai." },
    ],
  },
  docker: {
    Beginner: [
      { q: "What is Docker?", a: "Docker is a platform that packages applications with all their dependencies into containers. Containers are lightweight, portable, and consistent — your app runs the same everywhere (development, testing, production). It solves the 'works on my machine' problem.", oneLiner: "Platform to package apps + dependencies into portable containers that run anywhere.", hinglish: "Docker ek tool hai jo aapke app ko saari dependencies ke saath ek container mein pack kar deta hai. Ye container har jagah same chalega — laptop pe, server pe, cloud pe. 'Mere machine pe toh chal raha tha' problem solve!" },
      { q: "What is the difference between Container and Virtual Machine?", a: "VMs run a full OS with its own kernel — heavy (GBs), slow to start (minutes). Containers share the host OS kernel — lightweight (MBs), start in seconds. VMs are more isolated; containers are more efficient. Docker uses containers.", oneLiner: "Containers share host OS (fast, light); VMs run full OS (heavy, isolated).", hinglish: "VM mein poora OS chalta hai — heavy hai aur slow start hota hai. Container host OS ka kernel share karta hai — lightweight hai aur seconds mein start hota hai. Docker containers use karta hai." },
      { q: "What is a Docker Image?", a: "A Docker image is a read-only template used to create containers. It contains the OS, application code, dependencies, and configurations. Images are built in layers — each Dockerfile instruction adds a layer. They're stored in registries like Docker Hub.", oneLiner: "Read-only template (OS + code + deps) used to create containers, built in layers.", hinglish: "Docker image ek template hai jisme OS, code, dependencies sab hota hai. Image se containers bante hain. Har Dockerfile instruction ek layer add karta hai. Docker Hub pe images store hoti hain." },
      { q: "What is a Dockerfile?", a: "A Dockerfile is a text file with instructions to build a Docker image. Key instructions: FROM (base image), WORKDIR (set directory), COPY (add files), RUN (execute commands), EXPOSE (declare port), CMD (default command when container starts).", oneLiner: "Recipe file with instructions (FROM, COPY, RUN, CMD) to build Docker images.", hinglish: "Dockerfile ek recipe hai jisme likha hota hai image kaise banani hai. FROM se base image, COPY se files, RUN se commands, aur CMD se app start hota hai.",
        code: `# Dockerfile for Node.js app
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]` },
      { q: "What are basic Docker commands?", a: "docker build -t myapp . (build image), docker run -p 3000:3000 myapp (run container), docker ps (list running), docker stop <id> (stop), docker images (list images), docker logs <id> (view logs), docker exec -it <id> bash (enter container).", oneLiner: "build, run, ps, stop, images, logs, exec — the essential Docker commands.", hinglish: "docker build (image banao), docker run (container chalao), docker ps (running containers dekho), docker stop (roko), docker logs (logs dekho), docker exec -it bash (container ke andar jao).",
        code: `# Build image
docker build -t my-app .

# Run container
docker run -d -p 3000:3000 --name my-app my-app

# View running containers
docker ps

# View logs
docker logs my-app

# Enter container shell
docker exec -it my-app sh

# Stop and remove
docker stop my-app && docker rm my-app` },
    ],
    Intermediate: [
      { q: "How to dockerize a Node.js application?", a: "Create a Dockerfile in your project root: use node:18-alpine as base, set WORKDIR, copy package.json first (for layer caching), run npm ci, copy source code, expose port, set CMD. Add .dockerignore to exclude node_modules and .git.", oneLiner: "Dockerfile with node:alpine base → copy package.json → npm ci → copy code → CMD.", hinglish: "Node.js app dockerize karne ke liye Dockerfile banao: node:18-alpine base use karo, package.json pehle copy karo (caching ke liye), npm ci chalao, phir baaki code copy karo, CMD set karo.",
        code: `# .dockerignore
node_modules
.git
.env

# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# Build & run
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app` },
      { q: "What is Docker Compose?", a: "Docker Compose defines multi-container apps in a YAML file (docker-compose.yml). Run docker-compose up to start all services together. Perfect for MERN stack — frontend, backend, and database in one command. Services can communicate by service name.", oneLiner: "YAML file defining multi-container apps — run everything with one command.", hinglish: "Docker Compose ek YAML file hai jisme multiple containers define karte hain. docker-compose up se sab ek saath start ho jaata hai. MERN ke liye perfect — React, Node, MongoDB ek command se chalao.",
        code: `# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./client
    ports: ['3000:3000']
  backend:
    build: ./server
    ports: ['5000:5000']
    environment:
      - MONGO_URI=mongodb://db:27017/myapp
    depends_on: [db]
  db:
    image: mongo:6
    volumes: ['mongo-data:/data/db']
    ports: ['27017:27017']
volumes:
  mongo-data:` },
      { q: "What are Docker Volumes?", a: "Volumes persist data beyond container lifecycle. Without volumes, data is lost when container stops. Types: named volumes (Docker-managed), bind mounts (host directory mapped to container). Use for databases, uploads, logs.", oneLiner: "Persist data outside containers — survives container restart/removal.", hinglish: "Volumes data ko container ke bahar store karte hain. Container delete ho jaaye phir bhi data safe rehta hai. Databases ke liye zaroori hai — nahi toh sab data ud jaayega." },
      { q: "What is Docker Networking?", a: "Docker networking connects containers. Default bridge network lets containers communicate by IP. Custom bridge networks let containers find each other by name. Host network shares host's network stack. Overlay networks span multiple Docker hosts.", oneLiner: "Connects containers — bridge (default), custom bridge (by name), host, overlay.", hinglish: "Docker networking se containers ek dusre se baat kar sakte hain. Custom network banao toh containers naam se mil jaate hain (jaise 'db' se MongoDB connect karo). docker-compose automatically network bana deta hai." },
      { q: "What is a multi-stage Docker build?", a: "Multi-stage builds use multiple FROM statements to create smaller production images. Build stage compiles/bundles code; production stage only copies the output. This removes build tools and dev dependencies from final image.", oneLiner: "Multiple FROM stages — build in one, copy only output to final small image.", hinglish: "Multi-stage build mein pehle stage mein code compile/build hota hai, phir sirf output ko final image mein copy karte hain. Isse final image bahut chhoti hoti hai.",
        code: `# Multi-stage build for React app
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production (only serve build files)
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Final image is ~25MB instead of ~1GB!` },
      { q: "How to dockerize a full MERN stack?", a: "Create Dockerfiles for frontend (React) and backend (Node.js). Use docker-compose.yml to define all services: frontend, backend, MongoDB. Backend connects to MongoDB using service name 'db'. Frontend proxies API calls to backend service.", oneLiner: "Separate Dockerfiles for React + Node.js, docker-compose.yml ties them together with MongoDB.", hinglish: "React aur Node.js ke liye alag Dockerfile banao. docker-compose.yml mein teenon services define karo — frontend, backend, MongoDB. Backend 'db' naam se MongoDB se connect hoga. Ek command se poora stack chalega!" },
      { q: "How to use environment variables in Docker?", a: "Methods: 1) ENV in Dockerfile (baked into image). 2) -e flag in docker run. 3) environment key in docker-compose. 4) .env file with env_file in compose. 5) Docker secrets for sensitive data. Never put secrets in Dockerfile — they're visible in image layers.", oneLiner: "Use -e flag, docker-compose environment, or .env files — never hardcode secrets in Dockerfile.", hinglish: "ENV Dockerfile mein, -e flag docker run mein, ya docker-compose mein environment key use karo. Sensitive data (passwords) ke liye .env file ya Docker secrets use karo. Dockerfile mein secrets mat dalo!" },
    ],
    Advanced: [
      { q: "Docker security best practices?", a: "1) Don't run as root (USER node). 2) Use specific image tags (node:18.17-alpine, not node:latest). 3) Scan images for vulnerabilities (docker scout). 4) Use .dockerignore. 5) Don't store secrets in images. 6) Use read-only file systems. 7) Limit resources (--memory, --cpus).", oneLiner: "Non-root user, specific tags, scan images, no secrets in images, limit resources.", hinglish: "Root user mat use karo, specific image tags lagao (latest nahi), images scan karo vulnerabilities ke liye, secrets image mein mat dalo, resources limit karo. Security bahut important hai!" },
      { q: "How to optimize Docker image size?", a: "1) Use Alpine base images (node:18-alpine is 50MB vs node:18 at 350MB). 2) Multi-stage builds. 3) Combine RUN commands to reduce layers. 4) .dockerignore to exclude unnecessary files. 5) npm ci --production to skip dev dependencies. 6) Use specific COPY instead of COPY . .", oneLiner: "Alpine base, multi-stage builds, combine RUN, .dockerignore, production-only deps.", hinglish: "Alpine images use karo (bahut chhoti hain), multi-stage builds use karo, RUN commands combine karo, .dockerignore lagao, sirf production dependencies install karo. Image chhoti = fast deploy!" },
      { q: "How to use Docker in CI/CD pipeline?", a: "In CI/CD: 1) Build Docker image. 2) Run tests inside container. 3) Push image to registry (Docker Hub, ECR, GHCR). 4) Deploy using the new image tag. Benefits: consistent build environment, reproducible builds, easy rollbacks (just use previous image tag).", oneLiner: "Build image → test → push to registry → deploy with new tag. Consistent and reproducible.", hinglish: "CI/CD mein Docker: image build karo, tests chalao container mein, registry pe push karo, aur production pe deploy karo. Har build same environment mein hogi — no surprises!" },
      { q: "What is container orchestration? Kubernetes basics?", a: "Orchestration manages multiple containers across multiple servers. Kubernetes (K8s) handles: container deployment, scaling (auto-scale based on load), load balancing, self-healing (restart crashed containers), rolling updates. Key concepts: Pods (container groups), Services (networking), Deployments (scaling).", oneLiner: "Managing containers at scale — Kubernetes handles deployment, scaling, healing automatically.", hinglish: "Orchestration matlab bahut saare containers ko manage karna. Kubernetes (K8s) automatically containers deploy karta hai, scale karta hai, crash hone pe restart karta hai. Production mein bahut useful hai." },
      { q: "Common Docker troubleshooting tips?", a: "1) docker logs <container> for error messages. 2) docker exec -it <container> sh to enter and debug. 3) docker inspect for detailed config. 4) Check port conflicts with docker ps. 5) docker system prune to free disk space. 6) Check .dockerignore if files are missing.", oneLiner: "Use docker logs, exec, inspect for debugging; docker system prune for cleanup.", hinglish: "docker logs se errors dekho, docker exec se container ke andar jao debug karne, docker inspect se config check karo, docker system prune se disk space free karo. Port conflicts check karo docker ps se." },
    ],
  },
  authentication: {
    Beginner: [
      { q: "What is the difference between Authentication and Authorization?", a: "Authentication (AuthN) verifies WHO you are — login with username/password, proving your identity. Authorization (AuthZ) determines WHAT you can do — checking permissions after login. First authenticate, then authorize. Example: logging in is AuthN; accessing admin panel is AuthZ.", oneLiner: "Authentication = who are you (login); Authorization = what can you do (permissions).", hinglish: "Authentication matlab 'tum kaun ho' (login karo). Authorization matlab 'tumhe kya karne ki permission hai' (admin page access). Pehle identity verify hoti hai, phir permissions check hoti hain." },
      { q: "What is JWT (JSON Web Token)?", a: "JWT is a compact, self-contained token with three parts: Header (algorithm + type), Payload (user data/claims like userId, role, expiry), Signature (verification using secret key). Server creates JWT on login, client sends it with every request. Server verifies without database lookup.", oneLiner: "Self-contained token: Header.Payload.Signature — stateless authentication.", hinglish: "JWT ek token hai jo 3 parts ka hota hai — Header, Payload (user data), aur Signature. Login pe server JWT deta hai, client har request ke saath bhejta hai. Server verify karta hai bina database check kiye.",
        code: `// Creating JWT (Node.js)
const jwt = require('jsonwebtoken');

// Login — create token
const token = jwt.sign(
  { userId: '123', role: 'admin' },
  'my-secret-key',
  { expiresIn: '1h' }
);

// Verify — middleware
const decoded = jwt.verify(token, 'my-secret-key');
console.log(decoded.userId); // '123'` },
      { q: "What is the difference between Session-based and Token-based authentication?", a: "Session-based: server stores session data in memory/database, sends session ID as cookie. Stateful — server remembers each user. Token-based (JWT): server creates token, client stores it. Stateless — server doesn't store anything. JWT is better for APIs and mobile apps; sessions are simpler for traditional web apps.", oneLiner: "Session = server stores state (cookie); Token = client stores JWT (stateless).", hinglish: "Session mein server user ka data store karta hai aur cookie mein session ID bhejta hai. JWT mein server kuch store nahi karta — token hi sab contain karta hai. JWT APIs aur mobile apps ke liye better hai." },
      { q: "What is password hashing? Why never store plain text passwords?", a: "Hashing converts password to a fixed-length irreversible string. If database is breached, hackers can't reverse hashes to get passwords. Use bcrypt or argon2 — they add salt (random data) to prevent rainbow table attacks. Never use MD5 or SHA for passwords.", oneLiner: "One-way conversion of password to hash — can't reverse it. Use bcrypt with salt.", hinglish: "Hashing password ko ek irreversible string mein convert karta hai. Agar database hack ho jaaye toh bhi original password nahi mil sakta. Bcrypt use karo — ye salt add karta hai toh same password ka bhi alag hash banta hai." },
      { q: "What is bcrypt? How does it work?", a: "Bcrypt is a password hashing algorithm designed to be slow (intentionally). It uses salt rounds (default 10) — higher rounds = slower hash = harder to brute force. Steps: generate salt → hash password with salt → store hash. To verify: hash input and compare.", oneLiner: "Slow-by-design password hashing with salt rounds — harder to brute force.", hinglish: "Bcrypt ek hashing algorithm hai jo deliberately slow hai — taaki brute force attacks mushkil ho. Salt rounds set karte hain (10 recommended). Password hash karo, store karo. Login pe input hash karke compare karo.",
        code: `const bcrypt = require('bcrypt');

// Register — hash password
const saltRounds = 10;
const hashedPassword = await bcrypt.hash('myPassword123', saltRounds);
// Store hashedPassword in database

// Login — verify password
const isMatch = await bcrypt.compare('myPassword123', hashedPassword);
console.log(isMatch); // true` },
    ],
    Intermediate: [
      { q: "How to implement JWT authentication in Node.js/Express?", a: "Flow: 1) User sends email/password to /login. 2) Server verifies credentials. 3) Server creates JWT with user data. 4) Client stores JWT (httpOnly cookie or localStorage). 5) Client sends JWT with every request (Authorization: Bearer token). 6) Server middleware verifies JWT before processing request.", oneLiner: "Login → create JWT → client stores → send with requests → middleware verifies.", hinglish: "Login pe server JWT banata hai aur client ko deta hai. Client har request ke saath JWT bhejta hai header mein. Server middleware JWT verify karta hai — valid hai toh request process hoti hai, nahi toh 401 error.",
        code: `// Login route
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  
  const token = jwt.sign({ userId: user._id, role: user.role }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch { res.status(401).json({ error: 'Invalid token' }); }
};

// Protected route
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ userId: req.user.userId });
});` },
      { q: "What is OAuth 2.0?", a: "OAuth 2.0 is an authorization framework that lets users grant third-party apps access to their data without sharing passwords. Example: 'Login with Google' — your app redirects to Google, user approves, Google sends an authorization code, your app exchanges it for tokens.", oneLiner: "Authorization framework — lets users grant apps access without sharing passwords (Login with Google).", hinglish: "OAuth 2.0 ek framework hai jisme user bina password share kiye third-party apps ko access de sakta hai. Jaise 'Login with Google' — Google se permission lo, code milta hai, code se token lo, token se user data lo." },
      { q: "What is CORS and how to handle it?", a: "CORS (Cross-Origin Resource Sharing) is a browser security feature that blocks requests from different origins. Your React app (localhost:3000) calling API (localhost:5000) is cross-origin. Fix: configure server to allow specific origins using Access-Control-Allow-Origin header or cors middleware.", oneLiner: "Browser blocks cross-origin requests — fix with cors middleware or ACAO headers.", hinglish: "CORS ek security feature hai jo browser mein alag origin se requests block karta hai. React (port 3000) se Node (port 5000) call karo toh CORS error aayega. Fix: cors middleware install karo aur origin allow karo.",
        code: `// Node.js/Express — using cors middleware
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // React app
  credentials: true, // allow cookies
}));

// Or allow multiple origins
app.use(cors({
  origin: ['http://localhost:3000', 'https://myapp.com'],
}));` },
      { q: "What is CSRF attack and how to prevent it?", a: "CSRF (Cross-Site Request Forgery) tricks authenticated users into making unwanted requests. Attacker creates a hidden form on their site that submits to your site. Prevention: 1) CSRF tokens (unique per session). 2) SameSite cookie attribute. 3) Check Origin/Referer headers. 4) Double-submit cookie pattern.", oneLiner: "Tricked requests from authenticated users — prevent with CSRF tokens and SameSite cookies.", hinglish: "CSRF mein attacker authenticated user se unwanted request karwa deta hai (jaise money transfer). Prevention: CSRF token use karo har form mein, SameSite cookie set karo, Origin header check karo." },
      { q: "What are Refresh Tokens and why use them?", a: "Access tokens have short expiry (15 min - 1 hour) for security. Refresh tokens have longer expiry (7-30 days) and are used to get new access tokens without re-login. Flow: access token expires → send refresh token to /refresh → get new access token. Store refresh tokens securely (httpOnly cookie).", oneLiner: "Long-lived tokens to silently renew short-lived access tokens without re-login.", hinglish: "Access token jaldi expire hota hai (15 min). Refresh token lamba chalta hai (7 days). Jab access token expire ho, refresh token bhejo aur naya access token lo — user ko dubara login nahi karna padta." },
      { q: "How to store tokens securely in the browser?", a: "Best: httpOnly cookie (not accessible via JS, prevents XSS). OK: localStorage (convenient but vulnerable to XSS — if attacker injects JS, they can steal token). Never: regular cookie without httpOnly. For SPAs, httpOnly cookies with CSRF protection is the gold standard.", oneLiner: "httpOnly cookies (best, XSS-safe) > localStorage (convenient, XSS-vulnerable).", hinglish: "Sabse safe: httpOnly cookie mein store karo — JavaScript se access nahi ho sakta toh XSS attack se safe hai. localStorage convenient hai par XSS se vulnerable hai. Production mein httpOnly cookie use karo." },
      { q: "What is Passport.js?", a: "Passport.js is an authentication middleware for Node.js. It supports 500+ strategies: local (email/password), Google, Facebook, GitHub, JWT, etc. Each strategy handles a different auth method. It integrates with Express and manages serialization/deserialization of users.", oneLiner: "Node.js auth middleware with 500+ strategies — local, Google, GitHub, JWT, etc.", hinglish: "Passport.js ek authentication library hai Node.js ke liye. 500+ strategies support karti hai — local login, Google login, GitHub login, JWT, etc. Express ke saath easily integrate hoti hai." },
    ],
    Advanced: [
      { q: "How to implement Role-Based Access Control (RBAC)?", a: "RBAC assigns roles (admin, editor, viewer) to users. Each role has specific permissions. Middleware checks user's role before allowing access to routes. Steps: 1) Add role field to user model. 2) Create role-checking middleware. 3) Apply to routes.", oneLiner: "Assign roles to users, middleware checks role permissions before route access.", hinglish: "RBAC mein har user ko role milta hai (admin, editor, viewer). Middleware check karta hai ki user ke role mein wo permission hai ya nahi. Route pe middleware lagao jo role verify kare.",
        code: `// Role middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

// Usage
app.delete('/users/:id', authMiddleware, authorize('admin'), deleteUser);
app.put('/posts/:id', authMiddleware, authorize('admin', 'editor'), updatePost);
app.get('/posts', authMiddleware, authorize('admin', 'editor', 'viewer'), getPosts);` },
      { q: "Explain OAuth 2.0 Authorization Code Flow in detail.", a: "Steps: 1) User clicks 'Login with Google'. 2) App redirects to Google's auth server with client_id, redirect_uri, scope. 3) User approves. 4) Google redirects back with authorization code. 5) App backend exchanges code for access token + refresh token (using client_secret). 6) App uses access token to get user info from Google API.", oneLiner: "Redirect → user approves → auth code → exchange for tokens → access user data.", hinglish: "User 'Login with Google' click karta hai → Google pe redirect hota hai → user approve karta hai → Google code bhejta hai → backend code ko tokens mein exchange karta hai → tokens se user data milta hai." },
      { q: "What are authentication security best practices?", a: "1) Hash passwords with bcrypt (10+ rounds). 2) Use HTTPS everywhere. 3) Short-lived access tokens (15 min). 4) httpOnly cookies for tokens. 5) Rate limit login attempts. 6) Implement account lockout after failed attempts. 7) Validate input (prevent SQL injection, XSS). 8) Use CORS properly. 9) Enable MFA for sensitive accounts.", oneLiner: "Bcrypt, HTTPS, short tokens, httpOnly cookies, rate limiting, input validation, MFA.", hinglish: "Bcrypt se password hash karo, HTTPS use karo, tokens short-lived rakho, httpOnly cookies mein store karo, login attempts rate limit karo, input validate karo (XSS/SQL injection rokne ke liye), aur MFA lagao." },
      { q: "How to implement Social Login (Google/GitHub)?", a: "Steps: 1) Register your app with provider (get client_id, client_secret). 2) Redirect user to provider's auth URL. 3) User approves access. 4) Provider redirects back with code. 5) Exchange code for tokens. 6) Get user profile from provider API. 7) Create or find user in your database. 8) Issue your own JWT.", oneLiner: "Register app → redirect to provider → get code → exchange for tokens → get profile → issue JWT.", hinglish: "Provider (Google/GitHub) pe app register karo, user ko wahan redirect karo login ke liye, code milega, code se token lo, token se profile lo, apne database mein user banao ya dhundho, aur apna JWT do." },
      { q: "What is Multi-Factor Authentication (MFA)?", a: "MFA requires two or more verification methods: 1) Something you know (password). 2) Something you have (phone/OTP/authenticator app). 3) Something you are (fingerprint/face). Common implementation: after password login, send OTP via SMS/email or use TOTP (Google Authenticator). Significantly reduces account compromise.", oneLiner: "Multiple verification layers — password + OTP/authenticator. Much harder to hack.", hinglish: "MFA mein sirf password se kaam nahi chalta — ek aur verification chahiye jaise OTP ya Google Authenticator. Do layers of security — agar password leak ho bhi jaaye toh account safe rehta hai." },
    ],
  },
  typescript: {
    Beginner: [
      { q: "What is TypeScript?", a: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking, interfaces, generics, and better tooling support for large-scale applications.", oneLiner: "Typed JS superset with static checking, interfaces, and generics.", hinglish: "TypeScript JavaScript ka superset hai jisme types add hote hain. Compile time pe errors catch hoti hain aur IDE support better hota hai. Large projects ke liye bahut useful hai." },
      { q: "What are type annotations?", a: "Type annotations explicitly declare variable types: let name: string = 'Alice'. They catch type errors at compile time and improve IDE autocompletion and refactoring.", oneLiner: "Explicit type declarations that catch errors at compile time.", hinglish: "Type annotations mein hum variable ka type likhte hain — let name: string. Isse galat type assign karne pe compile time pe error aati hai aur autocomplete better hota hai." },
    ],
    Intermediate: [
      { q: "Explain generics.", a: "Generics create reusable typed components: function identity<T>(arg: T): T. They maintain type safety while working with multiple types. Constraints (extends) limit acceptable types.", oneLiner: "Reusable type-safe components: function<T>(arg: T): T.", hinglish: "Generics se ek function ya class multiple types ke saath kaam kar sakta hai — type safety ke saath. <T> ek placeholder hai jo use karte waqt actual type ban jaata hai." },
      { q: "What are utility types?", a: "Built-in types that transform others: Partial<T> makes all props optional, Required<T> makes them required, Pick<T,K> selects specific props, Omit<T,K> removes them.", oneLiner: "Built-in type transformers: Partial, Required, Pick, Omit.", hinglish: "Utility types existing types ko transform karte hain bina rewrite kiye. Partial sab optional, Required sab mandatory, Pick specific props select, Omit specific props remove karta hai." },
    ],
    Advanced: [
      { q: "Explain conditional types.", a: "Conditional types select types based on conditions: T extends U ? X : Y. They enable sophisticated type-level programming, used in library type definitions for precise inference.", oneLiner: "Type-level if/else: T extends U ? X : Y.", hinglish: "Conditional types type-level pe if-else hain. T extends U ? X : Y — agar T U ka subtype hai toh X milega nahi toh Y. Library types banane mein use hota hai." },
      { q: "What are mapped types?", a: "Mapped types create new types by iterating over property keys: { [K in keyof T]: NewType }. They power utility types like Partial, Required, and Readonly.", oneLiner: "Create types by iterating keys: { [K in keyof T]: NewType }.", hinglish: "Mapped types mein existing type ke har key pe iterate karke naya type banate hain. Partial, Required jaise utility types internally mapped types use karte hain." },
    ],
  },
};

// Hinglish translations for JavaScript questions (merged at render time)
export const hinglishMap: Record<string, string> = {
  // === JS Beginner ===
  "What is JavaScript?": "JavaScript ek programming language hai jo browsers mein chalti hai aur web pages ko interactive banati hai — buttons, animations, form validation. Node.js se server pe bhi use hoti hai.",
  "What are the different data types in JavaScript?": "JavaScript mein 7 primitive types hain — string, number, bigint, boolean, undefined, null, symbol. Aur ek non-primitive: object (arrays aur functions bhi objects hain).",
  "What is the difference between var, let, and const?": "var function-scoped hai aur hoisting mein undefined milta hai. let aur const block-scoped hain aur TDZ mein rehte hain. const ko reassign nahi kar sakte par object ke properties change kar sakte ho.",
  "What is the difference between == and ===?": "== pehle type convert karta hai phir compare karta hai (loose). === bina convert kiye value AUR type dono check karta hai (strict). Hamesha === use karo unexpected bugs se bachne ke liye.",
  "What is the difference between null and undefined?": "undefined matlab variable declare hua par value assign nahi hui — JS automatically set karta hai. null matlab intentionally 'kuch nahi' set kiya hai. typeof null 'object' aata hai — ye JS ka purana bug hai.",
  "What will be the output? console.log(null === undefined) and console.log(null == undefined)?": "null === undefined false hai kyunki alag types hain. null == undefined true hai kyunki loose equality mein ek special rule hai — dono ek dusre ke equal hain.",
  "What is the typeof an array in JavaScript?": "typeof [] 'object' aata hai kyunki arrays internally objects hain JavaScript mein. Sahi se check karne ke liye Array.isArray() use karo.",
  "How can you check if a variable is an array?": "Array.isArray() sabse reliable method hai array check karne ka. instanceof Array bhi kaam karta hai par cross-frame mein issues aa sakte hain.",
  "What is the NaN property in JavaScript?": "NaN ka matlab hai 'Not a Number' — jab math operation fail ho (jaise parseInt('hello')). NaN khud se equal nahi hota! Check karne ke liye Number.isNaN() use karo.",
  "What are anonymous functions in JavaScript?": "Anonymous functions wo functions hain jinke naam nahi hota. Callbacks, arrow functions, aur variable mein store karke use hote hain.",
  "What is the data type of variables in JavaScript?": "JavaScript mein 8 data types hain — 7 primitives (string, number, bigint, boolean, undefined, null, symbol) aur 1 non-primitive (object). JS dynamically typed hai — type runtime pe decide hota hai.",
  "What are escape characters? Why are they used?": "Escape characters backslash (\\) se start hote hain aur special characters represent karte hain — \\n (new line), \\t (tab), \\\" (quote andar quote). Strings mein special characters likhne ke liye use hote hain.",
  "What is the difference between break and continue statements?": "break poora loop tod deta hai — aage koi iteration nahi. continue current iteration skip karta hai aur next pe chala jaata hai. break = 'bahar niklo', continue = 'ye chhodo, aage badho'.",
  "What is hoisting in JavaScript?": "Hoisting mein JS declarations ko scope ke top pe le jaata hai. var undefined milta hai, let/const TDZ mein rehte hain (access nahi kar sakte), function declarations puri hoist hoti hain (call before define kar sakte ho).",
  "Explain pass by value and pass by reference in JavaScript?": "Primitives (string, number) copy hoke jaati hain — original nahi badalta. Objects/arrays ka reference jaata hai — function mein change karoge toh original bhi badlega!",

  // === JS Intermediate ===
  "What is the output of this function? function sample(){ for(let i=0; i<=5; i++){ setTimeout(() => console.log(i), 1000); } }": "Output: 0, 1, 2, 3, 4, 5 aayega. let block-scoped hai toh har iteration mein naya 'i' banta hai. Agar var hota toh 6 chhe baar print hota kyunki var function-scoped hai.",
  "What is the output? setTimeout(()=>{ console.log('a'); }, 2000); console.log('b');": "Pehle 'b' print hoga (sync code) phir 2 second baad 'a' (async). JavaScript single-threaded hai — sync code pehle chalta hai, setTimeout callback event loop se baad mein aata hai.",
  "How can you print 'a' first and 'b' later without using any extra setTimeout?": "async/await use karo — Promise mein delay wrap karo, await se 'a' pehle print karo, phir 'b'. async/await se execution order control hota hai.",
  "What are closures? Explain with an example.": "Closure tab hota hai jab inner function outer function ke variables 'yaad rakhta hai' baad mein bhi. Data privacy aur function factories ke liye use hota hai. Har function JS mein closure banata hai.",
  "What is the difference between array.map and array.filter?": "map har element ko transform karta hai aur same length ka naya array deta hai. filter condition check karta hai aur sirf pass hone wale elements ka (chhota) array deta hai.",
  "What is the difference between arr.forEach, array.map and array.filter?": "forEach sirf loop karta hai, kuch return nahi karta (side effects ke liye). map transform karta hai (naya array return). filter select karta hai (condition pass wale elements ka array). forEach vs map — map array deta hai, forEach undefined.",
  "What is the use of arr.reduce? Explain with an example.": "reduce array ko ek single value mein convert karta hai — sum, count, flatten, group karna. Ek accumulator rakhta hai jo har element pe update hota hai.",
  "How to find the length of an object?": "Objects mein .length nahi hota. Object.keys(obj).length use karo — ye keys ka array banata hai aur uski length deta hai.",
  "What are promises? What are the 3 states of promises?": "Promise ek async operation ka result represent karta hai. 3 states: Pending (chal raha hai), Fulfilled (success — .then chalta hai), Rejected (fail — .catch chalta hai). Ek baar settle ho gayi toh change nahi hoti.",
  "What is the difference between promise and callback?": "Callbacks nesting mein phans jaate hain (callback hell). Promises flat chain dete hain (.then().then()), ek jagah error handle hota hai (.catch), aur Promise.all se parallel operations hote hain.",
  "Can you show how to convert callback-based code to promise-based code?": "new Promise mein callback wrap karo — success pe resolve() call karo, error pe reject(). Phir .then() aur .catch() ya async/await use karo.",
  "What are the different methods for async operations in JavaScript?": "4 tarike: Callbacks (purana, nesting problem), Promises (.then chain), async/await (clean, try/catch), Observables (RxJS, streams ke liye). Modern code mein async/await sabse popular hai.",
  "What are callbacks? What is callback hell? Give an example.": "Callback ek function hai jo dusre function ko argument mein pass hota hai. Callback hell tab hota hai jab bahut nested callbacks ho — pyramid jaisa code ban jaata hai, padna mushkil.",
  "How are promises more superior than callbacks? How do promises solve callback hell?": "Promises flat .then() chain dete hain nesting ki jagah, .catch() se ek jagah error handle hota hai, Promise.all se parallel calls hote hain, aur async/await ka foundation hai.",
  "What is event bubbling and event capturing (Event Propagation)?": "Event propagation mein 3 phases hain: Capturing (upar se neeche), Target (clicked element), Bubbling (neeche se upar). Default mein handlers bubbling phase mein chalte hain. stopPropagation() se rok sakte ho.",
  "What is the difference between event.preventDefault() and event.stopPropagation()?": "preventDefault browser ki default action rokta hai (form submit, link click). stopPropagation event ko parent elements tak jaane se rokta hai. Dono alag problems solve karte hain.",
  "What is function currying?": "Currying mein f(a,b,c) ko f(a)(b)(c) bana dete hain — har call ek argument leta hai. Partial application se specialized functions ban sakte hain jaise multiply(2) se double function.",
  "What is an IIFE (Immediately Invoked Function Expression)?": "IIFE ek function hai jo turant execute hota hai define hone ke baad: (function(){...})(). Private scope banata hai — variables bahar leak nahi hote. Module pattern mein use hota hai.",
  "What are higher order functions?": "Higher order functions wo hain jo functions ko argument mein lete hain ya functions return karte hain. map, filter, reduce, forEach — ye sab higher order functions hain.",
  "Explain the 'this' keyword in JavaScript?": "'this' ka value depend karta hai function KAISE call hua — method mein: object, normal function mein: global/undefined, arrow function mein: parent se inherit. call/apply/bind se manually set kar sakte ho.",
  "What is the main difference between fat arrow function and normal function?": "Arrow function ka 'this' parent se inherit hota hai (lexical). Normal function ka apna 'this' hota hai. Arrow function constructor nahi ban sakta, arguments object nahi hota.",
  "What is memoization in JavaScript?": "Memoization ek optimization technique hai — function ke results cache karte hain. Same inputs pe dubara compute nahi karta, cached value return karta hai. Fibonacci, expensive calculations ke liye use hota hai.",
  "How to iterate inside an object and print all values without keys?": "Object.values(obj) se saari values ka array milta hai, phir forEach se print karo. Object.keys() se keys milti hain, Object.entries() se key-value pairs milte hain.",
  "What are Spread and Rest operators (...)?": "Same syntax (...) par ulta kaam. Spread array/object ko expand karta hai (copy, merge). Rest multiple arguments ko ek array mein collect karta hai (function parameters, destructuring).",
  "What are Pure and Impure Functions?": "Pure function: same input pe hamesha same output, koi side effect nahi. Impure function: external state pe depend karta ya modify karta hai (API calls, DOM, Math.random). Pure functions testable aur predictable hote hain.",
  "What is Event Delegation?": "Event delegation mein parent pe ek listener lagao, event.target se pata karo kaunsa child click hua. Bubbling ki wajah se kaam karta hai. Dynamic elements ke liye bhi kaam karta hai!",
  "What is JSON? Explain parse and stringify.": "JSON ek text format hai data exchange ke liye. JSON.stringify() object ko string mein convert karta hai (sending/storing). JSON.parse() string ko wapas object mein convert karta hai.",
  "How do you make an AJAX call using XMLHttpRequest?": "XMLHttpRequest purana tarika hai async data fetch karne ka. new XMLHttpRequest() banao, open() se method/url set karo, onreadystatechange handler lagao, send() karo. Modern mein fetch API ya Axios use karo.",
  "What is Shallow Copy vs Deep Copy?": "Shallow copy sirf pehla level copy karta hai — nested objects ka reference share hota hai. Deep copy complete independent clone banata hai. structuredClone() ya JSON.parse(JSON.stringify()) se deep copy karo.",

  // === JS Advanced ===
  "What is process.nextTick?": "process.nextTick() Node.js mein callback ko next event loop iteration se PEHLE schedule karta hai. setTimeout aur setImmediate se pehle chalta hai. Zyada use karne se I/O block ho sakta hai.",
  "When do we use async/await? Why must await be inside an async function?": "async/await Promises ke saath readable, sequential code likhne ke liye use hota hai. await async function ke andar hona chahiye kyunki ye execution pause karta hai aur Promise return karta hai.",
  "What is a function definition?": "Function definition wo code hai jisme function ka naam, parameters, aur body define hote hain. Function declaration hoisted hoti hai, function expression nahi. Arrow function lexical this deta hai.",
  "Explain prototypal inheritance in JavaScript.": "JavaScript mein objects ka [[Prototype]] link hota hai. Property dhundhte waqt JS prototype chain walk karta hai — object pe nahi mili toh prototype pe dekhta hai, phir uske prototype pe. Classes prototype ka syntactic sugar hain.",
  "What were the 10 new features introduced in ES6? Explain each.": "ES6 ke 10 features: let/const, arrow functions, template literals, destructuring, default parameters, rest/spread, Promises, classes, modules (import/export), Symbol. Inse JS modern aur readable bani.",
  "Explain Call, Apply, Bind. When to use what?": "Teeno 'this' set karte hain. call() turant call karta hai args individually. apply() turant call karta hai args array mein. bind() naya function return karta hai (call nahi karta). Event handlers mein bind, method borrowing mein call use hota hai.",
  "What are different ways to store data in the browser?": "5 tarike: localStorage (permanent, 5MB), sessionStorage (tab band hone tak), cookies (4KB, server ke saath jaate hain), IndexedDB (bada data, async), Cache API (offline/Service Worker). Use case ke hisaab se choose karo.",
  "What are generator functions? How are they different from normal functions?": "Generator functions (function*) yield se execution pause kar sakte hain aur baad mein resume. .next() se next value milti hai. Normal functions pura ek baar chalte hain. Lazy evaluation aur infinite sequences ke liye use hote hain.",
  "Explain the different ways of creating objects in JavaScript.": "3 main tarike: Object literal {} (sabse common), Constructor function + new, Object.create(proto). Class syntax bhi hai jo constructor ka sugar hai.",
  "What are Object Prototype Methods?": "Prototype methods sab objects ko milte hain: hasOwnProperty() (direct property check), toString(), valueOf(). Static methods: Object.keys(), Object.values(), Object.entries(), Object.freeze(), Object.assign().",
  "What is object chaining in JavaScript?": "Method chaining mein har method 'this' return karta hai — obj.method1().method2().method3(). jQuery, builder pattern mein use hota hai. Key: har method mein 'return this' likhna zaroori hai.",
  "What are the advantages of Axios vs other competitors (fetch, http, got)?": "Axios ke fayde: automatic JSON parsing, interceptors (har request mein token add karo), timeout support, upload progress, Node+browser dono mein chalta hai, aur 4xx/5xx pe automatically reject karta hai.",
  "What are polyfills in JavaScript?": "Polyfill wo code hai jo purane browsers mein modern features add karta hai. Jaise agar browser mein Array.includes() nahi hai toh polyfill likh ke add kar sakte ho. Babel aur core-js automatically polyfills handle karte hain.",
  "Higher Order Functions — Detailed with Polyfill": "HOF functions ko argument mein lete ya return karte hain. map, filter, reduce sabke polyfills likhna interview mein common hai — isse pata chalta hai ki aapko 'this', callbacks, aur arrays ki deep understanding hai.",
  "Promise.all, Promise.allSettled, Promise.race, Promise.any — What's the difference?": "Promise.all: sab success toh result, ek bhi fail toh reject. allSettled: sab ka result (success ya fail). race: pehli settle hone wali (chahe success ya fail). any: pehli SUCCESS wali, sab fail toh reject.",
  "How does __proto__ / prototype chain work?": "Har object ka __proto__ uske prototype ko point karta hai. Property dhundhne mein JS pehle object pe dekhta hai, nahi mila toh __proto__ pe, phir uske __proto__ pe — jab tak null na mile.",
  "Explain the Event Loop in detail (Call Stack, Web APIs, Callback Queue, Microtask Queue).": "Event Loop: Sync code call stack pe chalta hai. Async (setTimeout, fetch) Web APIs ko jaata hai. Complete hone pe callbacks queue mein jaate hain. Microtasks (Promises) HAMESHA macrotasks (setTimeout) se pehle chalte hain.",
  "How does JavaScript execute a program? (GEC, Function Execution Context, Call Stack)": "JS pehle Global Execution Context banata hai: Memory phase mein hoisting hoti hai, phir Execution phase mein code line by line chalta hai. Function call pe naya context stack pe push hota hai, return pe pop.",
  "What are Interceptors? (Axios Interceptors example)": "Interceptors middleware hain HTTP calls ke liye. Request interceptor mein har request mein auth token add karo. Response interceptor mein 401 pe login page pe redirect karo. Axios mein built-in support hai.",

  // === JS CodingOutput ===
  "What is the output? var a = 1; function foo() { console.log(a); var a = 2; } foo();": "Output: undefined. foo() ke andar var a hoisting se top pe jaata hai par value assign nahi hoti. Local 'a' global 'a' ko shadow kar deta hai. console.log ke time local a undefined hai.",
  "What is the output? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }": "Output: 3, 3, 3. var function-scoped hai toh sirf EK 'i' hai jo sab callbacks share karte hain. Loop khatam hone pe i=3 hai. Fix: let use karo (har iteration ka apna i).",
  "What is the output? console.log(typeof null); console.log(typeof undefined); console.log(typeof NaN);": "'object', 'undefined', 'number'. typeof null 'object' JS ka famous bug hai. NaN technically number type hai — failed numeric operation represent karta hai.",
  "What is the output? console.log(1 + '2' + 3); console.log(1 + 2 + '3');": "'123' aur '33'. JS left-to-right evaluate karta hai. Pehle mein: 1+'2'='12', '12'+3='123'. Dusre mein: 1+2=3 (number), 3+'3'='33' (string concat start).",
  "What is the output? const obj = { a: 1, b: 2 }; const { a: x, b: y } = obj; console.log(a); console.log(x);": "ReferenceError aayega console.log(a) pe. { a: x } mein 'a' property name hai aur 'x' naya variable. Sirf x aur y variables bane hain, 'a' variable nahi hai.",
  "What is the output? console.log([] == false); console.log([] == ![]); console.log('' == false);": "Teenon true hain — type coercion ki wajah se. [] ko '' phir 0 mein convert hota hai, false bhi 0 ban jaata hai. Isliye hamesha === use karo!",
  "What is the output? async function foo() { return 1; } const result = foo(); console.log(result);": "Promise {1} print hoga. async function HAMESHA Promise return karta hai, chahe plain value return karo. Value lene ke liye await ya .then() use karo.",
  "What is the output? let x = 10; const fn = () => { console.log(x); let x = 20; }; fn();": "ReferenceError aayega. fn() ke andar let x = 20 local x banata hai jo global x ko shadow karta hai. Par let TDZ (Temporal Dead Zone) mein hai — declaration line se pehle access nahi kar sakte.",
  "What is the output? console.log('start'); setTimeout(() => console.log('timeout'), 0); Promise.resolve().then(() => console.log('promise')); console.log('end');": "start, end, promise, timeout. Sync code pehle (start, end), phir microtask (Promise), phir macrotask (setTimeout). Microtasks hamesha macrotasks se pehle chalte hain.",

  // === JS SystemDesign ===
  "Design a URL Shortener (like bit.ly)": "Short code generate karo (Base62 encoding), database mein original URL ke saath store karo. Short URL access hone pe database se original URL dhundho aur redirect karo. Popular URLs Redis mein cache karo speed ke liye.",
  "Design an Autocomplete/Search Component": "Input pe debounce lagao (300ms) taaki har keystroke pe API call na ho. Pichli request cancel karo (AbortController). Results cache karo. Keyboard navigation (arrow keys) aur loading state handle karo.",
  "Design Infinite Scroll": "Page ke bottom pe Intersection Observer lagao. Jab sentinel element visible ho tab next page fetch karo. Data append karo (replace mat karo). cursor-based pagination offset se better hai.",
  "Design a Real-Time Chat System": "WebSockets se real-time connection banao. Client message bhejta hai → server room mein broadcast karta hai → doosre clients receive karte hain. Messages database mein store karo. Typing indicators aur read receipts add karo.",
  "Design a Rate Limiter": "Rate limiter request ki speed control karta hai. Token Bucket (tokens refill hote hain, har request ek token leta hai) ya Sliding Window (time window mein count) use karo. Redis mein distributed counting karo. 429 status code return karo.",
  "Design a Caching Strategy for a Web App": "Multiple layers: Browser cache (Cache-Control headers), CDN (CloudFront/Cloudflare), Application cache (Redis — Cache-Aside pattern), aur React Query (in-memory). TTL set karo aur data change hone pe invalidate karo.",
};


