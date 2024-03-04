/**
 * App component that renders the MadLibs game UI.
 * Allows user to enter words, generates stories from templates,
 * and allows changing templates. State managed with React hooks.
 */
import React, { useState } from "react";
import MadLibForm from "./MadLibForm";
import MadLibStory from "./MadLibStory";
import "./styles.css";

function App() {
  const [wordData, setWordData] = useState({
    noun: "",
    verb: "",
    color: "",
    adjective: "",
    animal: "",
    story: "",
  });

  const [currentTemplate, setCurrentTemplate] = useState(0);

  const templates = [
    "There once was a {color} {animal} who loved to {verb}. It was the most {adjective} {animal} in the world!",
    "The {adjective} {noun} always {verb} {adverb}. It was a strange sight to see.",
    "On a {adjective} day, a {noun} decided to {verb} to the store.",
    "Never trust a {adjective} {animal} - they always {verb} when you least expect it.",
    "The {color} {noun} {verb} {adverb} across the {adjective} field.",
    "A {adjective} {animal} and a {color} {noun} went on a wild adventure.",
  ];

  const handleWordChange = (wordType, word) => {
    if (wordType === "generate") {
      const story = templates[currentTemplate].replace(
        /\{(.*?)\}/g,
        (match, p1) => wordData[p1]
      );
      setWordData({ ...wordData, story: story });
    } else {
      setWordData({ ...wordData, [wordType]: word });
    }
  };

  const clearStory = () => {
    setWordData({ ...wordData, story: "" });
  };

  const changeTemplate = () => {
    setCurrentTemplate((currentTemplate + 1) % templates.length);
  };

  return (
    <div className="container">
      <h1>MadLibs Fun!</h1>
      <MadLibForm onWordChange={handleWordChange} />
      <MadLibStory words={wordData} />
      <button onClick={clearStory}>Clear Story</button>
      <button onClick={changeTemplate}>Change Template</button>
    </div>
  );
}

export default App;
