import React from "react";

import { StyledSuggestionCard } from "../../styled/singleProblem";

class SuggestionsList extends React.Component {
  state = {};

  render() {
    const { className } = this.props;

    return (
      <>
        <h2>Suggestions</h2>
        <ul className={className}>
          <StyledSuggestionCard />
          <br />
          <StyledSuggestionCard />
        </ul>
      </>
    );
  }
}

export default SuggestionsList;
