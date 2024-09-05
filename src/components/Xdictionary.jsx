import React, { useState } from "react";

function Dictionary() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Capture user input
  const [result, setResult] = useState(null); // Store the search result

  const handleSearch = () => {
    // Find the word in the dictionary (case-insensitive search)
    const foundWord = dictionary.find((entry) =>
      entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    // Set result based on search outcome
    setResult(
      foundWord || { word: "Not found", meaning: "Word not found in the dictionary." }
    );
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Conditionally render the result */}
      {result && (
        <div>
          <h3>Definition:</h3>
          <p>
            <strong>{result.word}</strong>: {result.meaning}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
