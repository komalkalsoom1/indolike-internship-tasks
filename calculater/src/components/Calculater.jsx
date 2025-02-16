import React, { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Using eval for simplicity, but be cautious in production
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-80 bg-gray-900 p-5 rounded-lg shadow-lg">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-16 text-right text-white text-2xl bg-gray-800 px-3 rounded"
        />
        <div className="grid grid-cols-4 gap-2 mt-4">
          {["AC", "DEL",".", "/"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "AC"
                  ? handleClear()
                  : item === "DEL"
                  ? handleDelete()
                  : handleClick(item)
              }
              className="p-4 bg-gray-700 text-white rounded-lg text-xl"
            >
              {item}
            </button>
          ))}
          {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "%"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="p-4 bg-gray-800 text-white rounded-lg text-xl"
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={handleEvaluate}
            className="p-4 bg-gray-800 text-white rounded-lg text-xl col-span-2"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
