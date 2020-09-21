import React from "react";

import { StyledSuggestionCard } from "../../styled/singleProblem";
import { StyledAddSuggestionForm } from "../../styled/singleProblem";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";

class SuggestionsList extends React.Component {
  state = { suggestions: [], isLoading: true, err: null };

  static contextType = UserContext;

  componentDidMount() {
    const { problem_id } = this.props;
    this.fetchSuggestions(problem_id);
  }

  fetchSuggestions = (problem_id) => {
    this.setState({ isLoading: true });
    api
      .getSuggestions(problem_id)
      .then((suggestions) => {
        this.setState({ suggestions, isLoading: false });
      })
      .catch(({ response }) => {
        // this.setState({
        //   isLoading: false,
        //   err: {
        //     type: "fetchSuggestions",
        //     msg: response.data.msg,
        //     status: response.status,
        //   },
        // });
      });
  };

  deleteSuggestionOptimistic = (suggestion_id) => {
    const { suggestions } = this.state;
    console.log("deleteSuggestionsOptimistic called");
    api.deleteSuggestion(suggestion_id).catch(({ response }) => {
      // this.setState({
      //   isLoading: false,
      //   err: {
      //     type: "deleteSuggestion",
      //     msg: response.data.msg,
      //     status: response.status,
      //   },
      // });
    });
    const filteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.suggestion_id !== suggestion_id
    );
    this.setState({ comments: [...filteredSuggestions] });
  };

  editSuggestionOptimistic = () => {
    console.log("editSuggestionOptimistic called");
  };

  solveOptimistic = () => {
    console.log("solveOptimistic called");
  };

  render() {
    const { className, problem } = this.props;
    const { suggestions } = this.state;
    const { username } = this.context;

    return (
      <>
        <h2>Suggestions</h2>
        {username && <StyledAddSuggestionForm />}
        <ul className={className}>
          {suggestions.map((suggestion) => {
            return (
              <StyledSuggestionCard
                problem={problem}
                suggestion={suggestion}
                key={suggestion.suggestion_id}
                deleteSuggestionOptimistic={this.deleteSuggestionOptimistic}
                editSuggestionOptimistic={this.editSuggestionOptimistic}
                solveOptimistic={this.solveOptimistic}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default SuggestionsList;
