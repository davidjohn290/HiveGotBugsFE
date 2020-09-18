import React from "react";

function SuggestionCard() {
  return (
    <article className="suggestionsCard">
      <p>Suggested By:</p>
      <p>Username</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt pariatur necessitatibus sunt mollitia excepturi ratione suscipit earum voluptas, odit molestias enim veniam sed ab labore, eaque sint in est?</p>

      <div className="buttonList">
        <button className="suggestionButtons">
          <div className="suggestion-button">Edit Suggestion</div>
        </button>
        <button className="suggestionButtons">
          <div className="suggestion-button">Delete Suggestion</div>
        </button>
        <button className="suggestionButtons">
          <div className="suggestion-button">This Solved My Problem</div>
        </button>
      </div>
    </article>
  );
}

export default SuggestionCard;
