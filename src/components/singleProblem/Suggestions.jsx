import React from "react";

import SuggestionCard from "./SuggestionCard";

class Suggestions extends React.Component {
  state = {};

  render() {
    return (
      <div className="singleProblemContainer">
        <h3>Suggestions</h3>

        <div className="suggestionsForm">
          <br />
          <form action="">
            <label htmlFor="">Enter Your Suggestion Here:</label>
            <input type="text" id="textBox" />
            <button className="button-submit">
              <div className="hexagon-button">Submit</div>
            </button>
          </form>
        </div>

        <SuggestionCard />
        <br />
        <SuggestionCard />
      </div>
    );
  }
}

export default Suggestions;
