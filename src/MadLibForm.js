/**
 * MadLibForm component renders a form to collect words from the user.
 * It calls the onWordChange callback when inputs change,
 * passing the input name and value.
 * Finally it has a button to generate the madlib.
 */
import React from "react";

function MadLibForm({ onWordChange }) {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="noun">Noun:</label>
        <input
          type="text"
          id="noun"
          onChange={(e) => onWordChange("noun", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="verb">Verb:</label>
        <input
          type="text"
          id="verb"
          onChange={(e) => onWordChange("verb", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          onChange={(e) => onWordChange("color", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="adjective">Adjective:</label>
        <input
          type="text"
          id="adjective"
          onChange={(e) => onWordChange("adjective", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="animal">Animal:</label>
        <input
          type="text"
          id="animal"
          onChange={(e) => onWordChange("animal", e.target.value)}
        />
      </div>

      <button onClick={() => onWordChange("generate")}>
        Generate MadLibs!
      </button>
    </div>
  );
}

export default MadLibForm;
