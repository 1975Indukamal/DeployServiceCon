import { Challenge } from "@/types/practice";

export { javascriptChallenges } from "./javascriptData";
export { reactChallenges } from "./reactData";

export type { Challenge };

export const practiceChallenges: Challenge[] = [
  {
    title: "Reverse String",
    description: "Return the reversed version of a string.",
    functionName: "reverseString",
    starterCode: `function reverseString(str) {

}`,
    tests: [
      { input: ["hello"], expected: "olleh" },
      { input: ["world"], expected: "dlrow" }
    ],
    hint: "Loop from end or build new string",
    difficulty: "Easy",
    topic: "",
    answer: `function reverseString(str) {
  return str.split('').reverse().join('');
}`
  },

  {
    title: "FizzBuzz",
    description: "Return an array from 1 to n using FizzBuzz rules.",
    functionName: "fizzBuzz",
    starterCode: `function fizzBuzz(n) {

}`,
    tests: [
      {
        input: [5],
        expected: [1, 2, "Fizz", 4, "Buzz"]
      },
      {
        input: [15],
        expected: [
          1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
          11, "Fizz", 13, 14, "FizzBuzz"
        ]
      }
    ],
    hint: "Check 15 first",
    difficulty: "Easy",
    topic: "",
    answer: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}`
  },

  {
    title: "Palindrome Check",
    description: "Return true if string is palindrome.",
    functionName: "isPalindrome",
    starterCode: `function isPalindrome(str) {

}`,
    tests: [
      { input: ["racecar"], expected: true },
      { input: ["hello"], expected: false },
      { input: ["Madam"], expected: true }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}`
  },

  {
    title: "Find Max in Array",
    description: "Return largest number without Math.max().",
    functionName: "findMax",
    starterCode: `function findMax(arr) {

}`,
    tests: [
      { input: [[3, 7, 2, 9, 1]], expected: 9 },
      { input: [[-5, -1, -8]], expected: -1 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`
  },

  {
    title: "Remove Duplicates",
    description: "Return array with duplicates removed.",
    functionName: "removeDuplicates",
    starterCode: `function removeDuplicates(arr) {

}`,
    tests: [
      { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
      { input: [["a", "b", "a", "c"]], expected: ["a", "b", "c"] }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`
  },

  {
    title: "Count Vowels",
    description: "Return number of vowels in string.",
    functionName: "countVowels",
    starterCode: `function countVowels(str) {

}`,
    tests: [
      { input: ["hello world"], expected: 3 },
      { input: ["AEIOU"], expected: 5 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}`
  },

  {
    title: "Fibonacci Number",
    description: "Return nth Fibonacci number.",
    functionName: "fibonacci",
    starterCode: `function fibonacci(n) {

}`,
    tests: [
      { input: [0], expected: 0 },
      { input: [6], expected: 8 },
      { input: [10], expected: 55 }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`
  },

  {
    title: "Two Sum",
    description: "Return indices of numbers that sum to target.",
    functionName: "twoSum",
    starterCode: `function twoSum(nums, target) {

}`,
    tests: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}`
  },

  {
    title: "Flatten Array",
    description: "Flatten nested array.",
    functionName: "flattenArray",
    starterCode: `function flattenArray(arr) {

}`,
    tests: [
      { input: [[1, [2, [3, 4], 5], 6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[[1, 2], [3, [4]]]], expected: [1, 2, 3, 4] }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}`
  },

  {
    title: "Debounce Function",
    description: "Return a debounced version of a function.",
    functionName: "debounce",
    starterCode: `function debounce(fn, delay) {

}`,
    tests: [
      { input: [() => { }, 100], expected: "function" }
    ],
    difficulty: "Hard",
    topic: "",
    answer: `function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`
  },
  // 🔹 Lucky Number (count frequency == number)
  {
    title: "Find Lucky Number",
    description: "Return the largest lucky number where frequency equals the number.",
    functionName: "findLucky",
    starterCode: `function findLucky(arr) {

}`,
    tests: [
      { input: [[2, 2, 3, 4]], expected: 2 },
      { input: [[1, 2, 2, 3, 3, 3]], expected: 3 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function findLucky(arr) {
  const count = {};
  for (const num of arr) count[num] = (count[num] || 0) + 1;
  let lucky = -1;
  for (const num in count) {
    if (parseInt(num) === count[num]) lucky = Math.max(lucky, count[num]);
  }
  return lucky;
}`
  },

  // 🔹 Rotate Array
  {
    title: "Rotate Array",
    description: "Rotate array to the right by k steps.",
    functionName: "rotateArray",
    starterCode: `function rotateArray(nums, k) {

}`,
    tests: [
      { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function rotateArray(nums, k) {
  k = k % nums.length;
  return [...nums.slice(-k), ...nums.slice(0, -k)];
}`
  },

  // 🔹 First Non-Repeating Character
  {
    title: "First Non-Repeating Character",
    description: "Return first non-repeating character.",
    functionName: "firstUniqueChar",
    starterCode: `function firstUniqueChar(str) {

}`,
    tests: [
      { input: ["leetcode"], expected: "l" },
      { input: ["aabb"], expected: "" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function firstUniqueChar(str) {
  const count = {};
  for (const char of str) count[char] = (count[char] || 0) + 1;
  for (const char of str) {
    if (count[char] === 1) return char;
  }
  return "";
}`
  },

  // 🔹 Missing Number
  {
    title: "Find Missing Number",
    description: "Find missing number from 1..n.",
    functionName: "missingNumber",
    starterCode: `function missingNumber(arr, n) {

}`,
    tests: [
      { input: [[1, 2, 4, 5], 5], expected: 3 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function missingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}`
  },

  // 🔹 Anagram Check
  {
    title: "Valid Anagram",
    description: "Return true if two strings are anagrams.",
    functionName: "isAnagram",
    starterCode: `function isAnagram(s, t) {

}`,
    tests: [
      { input: ["listen", "silent"], expected: true },
      { input: ["hello", "world"], expected: false }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}`
  },

  // 🔹 Move Zeros
  {
    title: "Move Zeros to End",
    description: "Move all zeros to the end while keeping order.",
    functionName: "moveZeros",
    starterCode: `function moveZeros(arr) {

}`,
    tests: [
      { input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function moveZeros(arr) {
  const nonZeros = arr.filter(x => x !== 0);
  const zeros = arr.filter(x => x === 0);
  return [...nonZeros, ...zeros];
}`
  },

  // 🔹 Max in 2D Array
  {
    title: "Max in 2D Array",
    description: "Return largest number in 2D array.",
    functionName: "max2D",
    starterCode: `function max2D(arr) {

}`,
    tests: [
      { input: [[[1, 5, 3], [9, 2, 8]]], expected: 9 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function max2D(arr) {
  let max = -Infinity;
  for (const row of arr) {
    for (const val of row) {
      if (val > max) max = val;
    }
  }
  return max;
}`
  },

  // 🔹 Linear Search
  {
    title: "Linear Search",
    description: "Return index of target using linear search.",
    functionName: "linearSearch",
    starterCode: `function linearSearch(arr, target) {

}`,
    tests: [
      { input: [[10, 20, 30], 20], expected: 1 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
  },

  // 🔹 Binary Search
  {
    title: "Binary Search",
    description: "Return index of target in sorted array.",
    functionName: "binarySearch",
    starterCode: `function binarySearch(arr, target) {

}`,
    tests: [
      { input: [[1, 2, 3, 4, 5], 4], expected: 3 }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
  },

  // 🔹 Sort Array
  {
    title: "Sort Array",
    description: "Return sorted array ascending.",
    functionName: "sortArray",
    starterCode: `function sortArray(arr) {

}`,
    tests: [
      { input: [[5, 2, 9, 1]], expected: [1, 2, 5, 9] }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}`
  },

  // 🔹 Factorial
  {
    title: "Factorial",
    description: "Return factorial of n.",
    functionName: "factorial",
    starterCode: `function factorial(n) {

}`,
    tests: [
      { input: [5], expected: 120 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}`
  },

  // 🔹 Prime Check
  {
    title: "Prime Number Check",
    description: "Return true if number is prime.",
    functionName: "isPrime",
    starterCode: `function isPrime(n) {

}`,
    tests: [
      { input: [7], expected: true },
      { input: [10], expected: false }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`
  },

  // 🔹 Print Primes
  {
    title: "Print Primes",
    description: "Return all primes up to n.",
    functionName: "printPrimes",
    starterCode: `function printPrimes(n) {

}`,
    tests: [
      { input: [10], expected: [2, 3, 5, 7] }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function printPrimes(n) {
  const primes = [];
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}`
  },

  // 🔹 Armstrong Number
  {
    title: "Armstrong Number",
    description: "Return true if number is Armstrong.",
    functionName: "isArmstrong",
    starterCode: `function isArmstrong(n) {

}`,
    tests: [
      { input: [153], expected: true },
      { input: [123], expected: false }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function isArmstrong(n) {
  const digits = n.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
  return sum === n;
}`
  },

  // 🔹 Reverse Number
  {
    title: "Reverse Number",
    description: "Return reversed number.",
    functionName: "reverseNumber",
    starterCode: `function reverseNumber(n) {

}`,
    tests: [
      { input: [1234], expected: 4321 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function reverseNumber(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}`
  },

  // 🔹 Even or Odd
  {
    title: "Even or Odd",
    description: "Return 'Even' or 'Odd'.",
    functionName: "evenOdd",
    starterCode: `function evenOdd(n) {

}`,
    tests: [
      { input: [4], expected: "Even" },
      { input: [7], expected: "Odd" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function evenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}`
  },

  // 🔹 Digits of Number
  {
    title: "Number to Digits",
    description: "Return digits of number as array.",
    functionName: "numberToDigits",
    starterCode: `function numberToDigits(n) {

}`,
    tests: [
      { input: [123], expected: [1, 2, 3] }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function numberToDigits(n) {
  return n.toString().split('').map(Number);
}`
  },

  // 🔹 Object: Count Properties
  {
    title: "Count Object Keys",
    description: "Return number of keys in object.",
    functionName: "countKeys",
    starterCode: `function countKeys(obj) {

}`,
    tests: [
      { input: [{ a: 1, b: 2, c: 3 }], expected: 3 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function countKeys(obj) {
  return Object.keys(obj).length;
}`
  },

  // 🔹 Object: Sum Values
  {
    title: "Sum Object Values",
    description: "Return sum of numeric values.",
    functionName: "sumValues",
    starterCode: `function sumValues(obj) {

}`,
    tests: [
      { input: [{ a: 10, b: 20, c: 5 }], expected: 35 }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function sumValues(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0);
}`
  },

  // 🔹 Pattern 1
  {
    title: "Print Pattern Triangle",
    description: "Return star triangle pattern.",
    functionName: "patternTriangle",
    starterCode: `function patternTriangle(n) {

}`,
    tests: [
      { input: [3], expected: "*\n**\n***" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function patternTriangle(n) {
  let res = [];
  for (let i = 1; i <= n; i++) res.push("*".repeat(i));
  return res.join("\n");
}`
  },

  // 🔹 Pattern 2
  {
    title: "Print Pyramid Pattern",
    description: "Return pyramid star pattern.",
    functionName: "patternPyramid",
    starterCode: `function patternPyramid(n) {

}`,
    tests: [
      { input: [3], expected: "  *\n ***\n*****" }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function patternPyramid(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    res.push(spaces + stars);
  }
  return res.join("\n");
}`
  },
  {
    title: "Inverted Triangle Pattern",
    description: "Return inverted triangle star pattern.",
    functionName: "patternInvertedTriangle",
    starterCode: `function patternInvertedTriangle(n) {

}`,
    tests: [
      { input: [3], expected: "***\n**\n*" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function patternInvertedTriangle(n) {
  let res = [];
  for (let i = n; i >= 1; i--) res.push("*".repeat(i));
  return res.join("\n");
}`
  },
  {
    title: "Reverse Number Triangle",
    description: "Return reverse number triangle.",
    functionName: "patternReverseNumber",
    starterCode: `function patternReverseNumber(n) {

}`,
    tests: [
      { input: [3], expected: "123\n12\n1" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function patternReverseNumber(n) {
  let res = [];
  for (let i = n; i >= 1; i--) {
    let row ="";
    for(let j=1; j<=i; j++) row += j;
    res.push(row);
  }
  return res.join("\n");
}`
  },
  {
    title: "Floyd Triangle",
    description: "Return Floyd’s triangle pattern.",
    functionName: "patternFloyd",
    starterCode: `function patternFloyd(n) {

}`,
    tests: [
      { input: [3], expected: "1\n2 3\n4 5 6" }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function patternFloyd(n) {
  let res = [];
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) row.push(num++);
    res.push(row.join(" "));
  }
  return res.join("\n");
}`
  },
  {
    title: "Square Pattern",
    description: "Return square star pattern.",
    functionName: "patternSquare",
    starterCode: `function patternSquare(n) {

}`,
    tests: [
      { input: [3], expected: "***\n***\n***" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function patternSquare(n) {
  let res = [];
  for (let i = 0; i < n; i++) res.push("*".repeat(n));
  return res.join("\n");
}`
  },
  {
    title: "Hollow Square Pattern",
    description: "Return hollow square pattern.",
    functionName: "patternHollowSquare",
    starterCode: `function patternHollowSquare(n) {

}`,
    tests: [
      { input: [3], expected: "***\n* *\n***" }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function patternHollowSquare(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) res.push("*".repeat(n));
    else res.push("*" + " ".repeat(n - 2) + "*");
  }
  return res.join("\n");
}`
  },
  {
    title: "Diamond Pattern",
    description: "Return diamond star pattern.",
    functionName: "patternDiamond",
    starterCode: `function patternDiamond(n) {

}`,
    tests: [
      { input: [3], expected: "  *\n ***\n*****\n ***\n  *" }
    ],
    difficulty: "Medium",
    topic: "",
    answer: `function patternDiamond(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  for (let i = n - 1; i >= 1; i--) {
    res.push(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  return res.join("\n");
}`
  },
  {
    title: "Alphabet Triangle",
    description: "Return alphabet triangle pattern.",
    functionName: "patternAlphabet",
    starterCode: `function patternAlphabet(n) {

}`,
    tests: [
      { input: [3], expected: "A\nAB\nABC" }
    ],
    difficulty: "Easy",
    topic: "",
    answer: `function patternAlphabet(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) row += String.fromCharCode(65 + j);
    res.push(row);
  }
  return res.join("\n");
}`
  }
];