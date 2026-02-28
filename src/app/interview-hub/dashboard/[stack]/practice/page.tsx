

// "use client";

// import { useState } from "react";
// import Editor from "@monaco-editor/react";
// import { practiceChallenges } from "@/data/practiceData";
// import { Play, RotateCcw, Check } from "lucide-react";

// export interface Challenge {
//   title: string;
//   description: string;
//   starterCode: string;
//   expectedOutput: string;
// }

// export default function PracticePage() {
//   const [selectedIdx, setSelectedIdx] = useState(0);
//   const [code, setCode] = useState(
//     practiceChallenges[0].starterCode
//   );
//   const [output, setOutput] = useState("");
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

//   const challenge = practiceChallenges[selectedIdx];

//   const selectChallenge = (i: number) => {
//     setSelectedIdx(i);
//     setCode(practiceChallenges[i].starterCode);
//     setOutput("");
//     setIsCorrect(null);
//   };

//   // ✅ LEETCODE STYLE VALIDATOR
//   const runCode = () => {
//     try {
//       const wrappedCode = `
//         ${code}
//         return typeof ${challenge.functionName} === "function"
//           ? ${challenge.functionName}
//           : null;
//       `;

//       const userFunction = new Function(wrappedCode)();

//       if (!userFunction) {
//         setOutput("❌ Function not found. Check function name.");
//         setIsCorrect(false);
//         return;
//       }

//       let allPassed = true;
//       const results: string[] = [];

//       for (const test of challenge.tests) {
//         const result = userFunction(...test.input);

//        const pass =
//   test.expected === "function"
//     ? typeof result === "function"
//     : JSON.stringify(result) === JSON.stringify(test.expected);

//         if (!pass) allPassed = false;

//         results.push(
// `Input: ${JSON.stringify(test.input)}
// Expected: ${JSON.stringify(test.expected)}
// Got: ${JSON.stringify(result)}
// Result: ${pass ? "✅ PASS" : "❌ FAIL"}`
//         );
//       }

//       setOutput(results.join("\n\n"));
//       setIsCorrect(allPassed);
//     } catch (err: any) {
//       setOutput("❌ Error: " + err.message);
//       setIsCorrect(false);
//     }
//   };

//   const resetCode = () => {
//     setCode(challenge.starterCode);
//     setOutput("");
//     setIsCorrect(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-6">
//         Practice Challenges
//       </h1>

//       {/* Challenge Selector */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {practiceChallenges.map((c, i) => (
//           <button
//             key={i}
//             onClick={() => selectChallenge(i)}
//             className={`px-3 py-1 rounded-full text-sm border ${
//               selectedIdx === i
//                 ? "bg-black text-white"
//                 : "bg-white"
//             }`}
//           >
//             {c.title}
//           </button>
//         ))}
//       </div>

//       {/* Challenge Info */}
//       <div className="mb-4">
//         <h2 className="font-semibold text-lg">
//           {challenge.title}
//         </h2>
//         <p className="text-gray-600 text-sm">
//           {challenge.description}
//         </p>
//         {challenge.hint && (
//           <p className="text-xs mt-2 text-gray-500">
//             💡 {challenge.hint}
//           </p>
//         )}
//       </div>

//       {/* Editor */}
//       {/* <Editor
//         height="320px"
//         defaultLanguage="javascript"
//         theme="vs-dark"
//         value={code}
//         onChange={(val) => setCode(val || "")}
//         options={{
//           minimap: { enabled: false },
//           fontSize: 14,
//         }}
//       /> */}
//       <Editor
//   height="320px"
//   defaultLanguage="javascript"
//   theme="vs-dark"
//   value={code}
//   onChange={(val) => setCode(val || "")}
//   options={{
//     minimap: { enabled: false },
//     fontSize: 14,

//     scrollBeyondLastLine: false,
//     wordWrap: "on",

//     // ⭐ IMPORTANT FIX
//     scrollbar: {
//       alwaysConsumeMouseWheel: false
//     }
//   }}
// />

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={runCode}
//           className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded"
//         >
//           <Play size={16} /> Run Code
//         </button>

//         <button
//           onClick={resetCode}
//           className="flex items-center gap-2 px-4 py-2 border rounded"
//         >
//           <RotateCcw size={16} /> Reset
//         </button>
//       </div>

//       {/* Output */}
//       {output && (
//         <div className="mt-6 p-4 border rounded font-mono whitespace-pre-wrap text-sm">
//           <div className="mb-2 font-semibold">
//             {isCorrect === true && (
//               <span className="text-green-600 flex items-center gap-1">
//                 <Check size={16} /> All tests passed 🎉
//               </span>
//             )}
//             {isCorrect === false && (
//               <span className="text-red-500">
//                 Some tests failed
//               </span>
//             )}
//           </div>
//           {output}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Editor from "@monaco-editor/react";
import { practiceChallenges, javascriptChallenges, reactChallenges } from "@/data/practiceData";
import { Challenge } from "@/types/practice";
import { Play, RotateCcw, Check, ChevronDown, Eye, EyeOff } from "lucide-react";


const stackToLanguage: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  react: "javascript",
  nodejs: "javascript",
  java: "java",
  cpp: "cpp",
  dsa: "javascript", // Defaulting to JS for DSA
  aws: "yaml",
  docker: "yaml",
};

/* ---------- DIFFICULTY COLORS ---------- */
const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 border-green-300",
  Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Hard: "bg-red-100 text-red-700 border-red-300",
};

export default function PracticePage() {
  const params = useParams();
  const rawStack = params?.stack;
  const currentStack = (Array.isArray(rawStack) ? rawStack[0] : rawStack || "javascript").toLowerCase();
  const editorLanguage = stackToLanguage[currentStack] || "javascript";

  const [difficulty, setDifficulty] = useState("Easy");
  const [topic, setTopic] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [solved, setSolved] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  /* ---------- LOAD SOLVED ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("solvedChallenges");
    if (saved) setSolved(JSON.parse(saved));
  }, []);

  /* ---------- GET CURRENT CHALLENGES ---------- */
  const currentChallenges: Challenge[] =
    currentStack === "javascript" || currentStack === "js"
      ? javascriptChallenges
      : currentStack === "react"
        ? reactChallenges || []
        : practiceChallenges;

  /* ---------- TOPICS ---------- */
  const topics = [
    "All",
    ...Array.from(new Set(
      currentChallenges
        .map(c => c.topic)
        .filter(Boolean)
    )),
  ];

  /* ---------- FILTER ---------- */
  const filteredChallenges = currentChallenges.filter(
    c =>
      (difficulty === "All" || c.difficulty === difficulty) &&
      (topic === "All" || c.topic === topic)
  );

  const challenge = filteredChallenges[selectedIdx];

  /* ---------- LOAD CODE ---------- */
  useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode);
      setOutput("");
      setIsCorrect(null);
      setShowAnswer(false);
    }
  }, [selectedIdx, difficulty, topic]);

  /* ---------- RUN CODE ---------- */
  const runCode = () => {
    // Prevent execution of non-JS languages in the browser
    if (editorLanguage !== "javascript" && editorLanguage !== "typescript") {
      setOutput(`⚠️ Code execution for ${editorLanguage.toUpperCase()} is not natively supported in the browser yet.\nOnly syntax highlighting is available for this stack.`);
      setIsCorrect(null);
      return;
    }

    try {
      const wrappedCode = `
        ${code}
        return typeof ${challenge.functionName} === "function"
          ? ${challenge.functionName}
          : null;
      `;

      const userFunction = new Function(wrappedCode)();

      if (!userFunction) {
        setOutput("❌ Function not found.");
        setIsCorrect(false);
        return;
      }

      let allPassed = true;
      const results: string[] = [];

      for (const test of challenge.tests) {
        const result = userFunction(...test.input);

        const pass =
          test.expected === "function"
            ? typeof result === "function"
            : JSON.stringify(result) === JSON.stringify(test.expected);

        if (!pass) allPassed = false;

        results.push(
          `Input: ${JSON.stringify(test.input)}
Expected: ${JSON.stringify(test.expected)}
Got: ${JSON.stringify(result)}
Result: ${pass ? "✅ PASS" : "❌ FAIL"}`
        );
      }

      setOutput(results.join("\n\n"));
      setIsCorrect(allPassed);

      if (allPassed && !solved.includes(challenge.title)) {
        const updated = [...solved, challenge.title];
        setSolved(updated);
        localStorage.setItem("solvedChallenges", JSON.stringify(updated));
      }

    } catch (err: any) {
      setOutput("❌ Error: " + err.message);
      setIsCorrect(false);
    }
  };

  const resetCode = () => {
    setCode(challenge.starterCode);
    setOutput("");
    setIsCorrect(null);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <h1 className="text-3xl font-bold mb-6">Practice Challenges</h1>

      {/* ---------- CONTROL BAR ---------- */}
      <div className="flex flex-wrap items-center gap-3 mb-6">

        {/* Difficulty Tabs (HIDDEN FOR REACT) */}
        {currentStack !== "react" && ["All", "Easy", "Medium", "Hard"].map(level => (
          <button
            key={level}
            onClick={() => {
              setDifficulty(level);
              setSelectedIdx(0);
            }}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${difficulty === level
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
          >
            {level}
          </button>
        ))}


        {/* Topic Filter Dropdown */}
        {currentStack !== "dsa" && <div className="relative">
          <button
            onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium flex items-center gap-2 transition-all ${topicDropdownOpen || topic !== "All"
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
          >
            <span>Topic: {topic}</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${topicDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {topicDropdownOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setTopicDropdownOpen(false)}
              ></div>

              <div className="absolute z-50 mt-2 w-48 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-left">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTopic(t);
                      setSelectedIdx(0);
                      setTopicDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between ${topic === t ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"
                      }`}
                  >
                    {t}
                    {topic === t && <Check size={14} className="text-accent-foreground" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        }
      </div>

      {/* -------- Question Dropdown -------- */}
      <div className="relative mb-6">

        {/* Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full border rounded px-3 py-2 text-sm text-left text-primary"
        >
          {filteredChallenges.length > 0
            ? filteredChallenges[selectedIdx]
              ? `${selectedIdx + 1}. ${filteredChallenges[selectedIdx].title}`
              : "Select Question"
            : "No questions found for this topic"}
        </button>

        {/* Dropdown */}
        {open && (
          <>
            {/* Backdrop to close dropdown */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            ></div>

            <div className="absolute z-50 mt-1 w-full bg-dark border rounded shadow max-h-60 overflow-y-auto">

              {filteredChallenges.length > 0 ? (
                filteredChallenges.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedIdx(i);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 text-sm cursor-pointer flex justify-between items-center hover:bg-gray-600 ${selectedIdx === i ? "bg-gray-800" : ""
                      }`}
                  >
                    <span>
                      {i + 1}. {c.title}
                    </span>

                    {solved.includes(c.title) && (
                      <span className="text-green-600 text-xs ">✔</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="px-3 py-4 text-sm text-gray-400 text-center">
                  No questions found under this topic.
                </div>
              )}

            </div>
          </>
        )}
      </div>

      {/* -------- Challenge Section -------- */}
      {challenge ? (
        <>
          {/* -------- Challenge Info -------- */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="font-semibold text-lg">
                {selectedIdx + 1}. {challenge.title}
              </h2>

              {currentStack !== "react" && (
                <span className={`text-xs px-2 py-0.5 rounded border ${difficultyColors[challenge.difficulty]}`}>
                  {challenge.difficulty}
                </span>
              )}

              {challenge.topic && (
                <span className="text-xs px-2 py-0.5 rounded border border-gray-300 text-white">
                  {challenge.topic}
                </span>
              )}

              {solved.includes(challenge.title) && (
                <span className="text-xs px-2 py-0.5 rounded bg-green-600 text-white">
                  Solved ✓
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {challenge.description}
            </p>
          </div>

          {/* -------- Editor -------- */}
          <Editor
            height="320px"
            language={editorLanguage}
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              scrollBeyondLastLine: false,
              scrollbar: { alwaysConsumeMouseWheel: false },
            }}
          />

          {/* -------- Buttons -------- */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={runCode}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded"
            >
              <Play size={16} /> Run Code
            </button>

            <button
              onClick={resetCode}
              className="flex items-center gap-2 px-4 py-2 border rounded"
            >
              <RotateCcw size={16} /> Reset
            </button>

            {challenge.answer && (
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>
            )}
          </div>

          {/* -------- Answer Display -------- */}
          {showAnswer && challenge.answer && (
            <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2 text-green-600">
                <Check size={16} /> Reference Solution:
              </h3>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
                  <code>{challenge.answer}</code>
                </pre>
                <div className="absolute top-2 right-2 text-[10px] text-muted-foreground uppercase tracking-widest pointer-events-none">
                  Solution
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center bg-card border border-border rounded-xl">
          <p className="text-gray-500">No challenges found for the selected topic.</p>
          <button
            onClick={() => { setTopic("All"); setDifficulty("All"); }}
            className="mt-4 text-sm text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* -------- Output -------- */}
      {output && (
        <div className="mt-6 p-4 border rounded font-mono whitespace-pre-wrap text-sm">
          <div className="mb-2 font-semibold">
            {isCorrect === true && (
              <span className="text-green-600 flex items-center gap-1">
                <Check size={16} /> All tests passed 🎉
              </span>
            )}
            {isCorrect === false && (
              <span className="text-red-500">
                Some tests failed
              </span>
            )}
          </div>
          {output}
        </div>
      )}
    </div>
  );
}