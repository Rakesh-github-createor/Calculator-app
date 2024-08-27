import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-blue-400 p-8 rounded-lg shadow-lg">
        
        <div className="mb-4 text-right text-2xl font-semibold">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded text-xl"
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded text-xl"
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-green-600 rounded-md text-xl"
            >
              {item}
            </button>
          ))}
          {["0", ".", "=", "+"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-4 bg-gray-200 rounded text-xl"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleClick("C")}
            className="col-span-4 p-4 bg-red-400 text-white rounded text-xl"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
