import { Challenge } from "@/types/practice";

export const reactChallenges: Challenge[] = [
    {
        title: "React Todo List (CRUD)",
        description: "Implement a reducer for a Todo list. Handle 'ADD', 'TOGGLE', 'UPDATE_TEXT', and 'DELETE' actions. State is an array of objects: { id, text, completed }.",
        functionName: "todoReducer",
        starterCode: `function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case 'TOGGLE':
      // Toggle 'completed' status
    case 'UPDATE_TEXT':
      // Update the 'text' property of the todo with given id
    case 'DELETE':
      // Remove the todo with given id
    default:
      return state;
  }
}`,
        tests: [
            {
                input: [[{ id: 1, text: "Task 1", completed: false }], { type: 'UPDATE_TEXT', payload: { id: 1, text: "Updated Task" } }],
                expected: [{ id: 1, text: "Updated Task", completed: false }]
            },
            {
                input: [[{ id: 1, text: "Task 1", completed: false }], { type: 'TOGGLE', payload: 1 }],
                expected: [{ id: 1, text: "Task 1", completed: true }]
            }
        ],
        difficulty: "Easy",
        topic: "Hooks & State",
        answer: `function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'UPDATE_TEXT':
      return state.map(todo => 
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}`
    },
    {
        title: "Fetch & Filter API Users",
        description: "Fetch users from 'https://jsonplaceholder.typicode.com/users'. Return an array of objects containing only { id, name, email } for users whose name starts with 'C'.",
        functionName: "fetchSpecificUsers",
        starterCode: `async function fetchSpecificUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  // 1. Fetch data
  // 2. Filter by name starting with 'C'
  // 3. Map to specific fields
}`,
        tests: [
            { input: [], expected: "function" }
        ],
        difficulty: "Easy",
        topic: "API Integration",
        answer: `async function fetchSpecificUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();

  return users
    .filter(user => user.name.startsWith('C'))
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
}`
    },
    {
        title: "Pagination Calculation",
        description: "Given a list of items, current page, and page size, return an object { data: [], totalPages: 0, hasNext: boolean, hasPrev: boolean }.",
        functionName: "getPaginationData",
        starterCode: `function getPaginationData(items, page, pageSize) {
  
}`,
        tests: [
            {
                input: [[1, 2, 3, 4, 5], 1, 2],
                expected: { data: [1, 2], totalPages: 3, hasNext: true, hasPrev: false }
            }
        ],
        difficulty: "Easy",
        topic: "Features",
        answer: `function getPaginationData(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = items.slice(start, end);
  const totalPages = Math.ceil(items.length / pageSize);
  
  return {
    data: data,
    totalPages: totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}`
    },
    {
        title: "Chat Application Logic",
        description: "Implement logic to add a message to a chat state. If the message is empty or only whitespace, don't add it. Each message should have a timestamp and unique ID.",
        functionName: "addMessage",
        starterCode: `function addMessage(messages, text, user) {
  
}`,
        tests: [
            {
                input: [[], "Hello", "User1"],
                expected: "object"
            },
            {
                input: [[], "   ", "User1"],
                expected: []
            }
        ],
        difficulty: "Easy",
        topic: "Features",
        answer: `function addMessage(messages, text, user) {
  if (!text.trim()) return messages;
  
  const newMessage = {
    id: Date.now() + Math.random(),
    text: text.trim(),
    user: user,
    timestamp: new Date().toISOString()
  };
  
  return [...messages, newMessage];
}`
    },
    {
        title: "Infinite Scroll / Auto-scroll",
        description: "Determine if the user has reached the bottom of a container (within 20px threshold) to trigger a 'load more' action. Inputs: (scrollTop, scrollHeight, clientHeight).",
        functionName: "isAtBottom",
        starterCode: `function isAtBottom(scrollTop, scrollHeight, clientHeight) {
  
}`,
        tests: [
            { input: [580, 700, 100], expected: true },
            { input: [100, 700, 100], expected: false }
        ],
        difficulty: "Easy",
        topic: "Features",
        answer: `function isAtBottom(scrollTop, scrollHeight, clientHeight) {
  // scrollHeight - clientHeight = maximum possible scrollTop
  const threshold = 20;
  return (scrollHeight - clientHeight - scrollTop) <= threshold;
}`
    }
];
