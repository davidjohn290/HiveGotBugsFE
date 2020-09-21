import React from "react";

const AddSuggestionForm = ({ className }) => {
  return (
    <form className={className} action="">
      <label htmlFor="">Enter Your Suggestion Here:</label>
      <input type="text" id="textBox" />
      <button className="button-submit">
        <div className="hexagon-button">Submit</div>
      </button>
    </form>
  );
};

export default AddSuggestionForm;
