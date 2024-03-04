/**
 * MadLibStory component renders the completed madlib story.
 * It takes the words object containing the completed story text,
 * and displays the story in a paragraph if present.
 */
import React from "react";

const MadLibStory = ({ words }) => {
  return (
    <div>
      <h2>Your MadLibs Story</h2>
      {words.story && <p>{words.story}</p>}
    </div>
  );
};

export default MadLibStory;
