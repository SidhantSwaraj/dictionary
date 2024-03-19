import { useState } from "react";
import "./styles.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

export default function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const result = () => {
    const lowerCaseText = text.toLowerCase();
    const foundWord = dictionary.find(
      (dict) => dict.word.toLowerCase() === lowerCaseText
    );
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={result}>Search</button>
      <h4>Definition:</h4>
      <div>
        {!definition && text && <p>Word not found in the dictionary.</p>}
        {definition && <p>{definition}</p>}
      </div>
    </div>
  );
}
