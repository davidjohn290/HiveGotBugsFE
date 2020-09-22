import React from "react";
import ErrorPage from "../ErrorPage";
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
        this.setState({
          isLoading: false,
          err: {
            type: "fetchSuggestions",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  addSuggestionOptimistic = (problem_id) => {
    console.log("add suggestion optimistic called");
  };

  deleteSuggestionOptimistic = (suggestion_id) => {
    const { suggestions } = this.state;
    api.deleteSuggestion(suggestion_id).catch(({ response }) => {
      this.setState({
        isLoading: false,
        err: {
          type: "deleteSuggestion",
          msg: response.data.msg,
          status: response.status,
        },
      });
    });
    const filteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.suggestion_id !== suggestion_id
    );
    this.setState({ suggestions: [...filteredSuggestions] });
  };

  editSuggestionOptimistic = (suggestion_id, body) => {
    const { suggestions } = this.state;

    this.setState({
      suggestions: suggestions.map((suggestion) => {
        if (suggestion.suggestion_id === suggestion_id) {
          return { ...suggestion, body };
        } else return suggestion;
      }),
    });
  };

  solveOptimistic = () => {
    console.log("solveOptimistic called");
  };

  render() {
    const { className, problem } = this.props;
    const { suggestions, err } = this.state;
    const { username } = this.context;
    if (err) return <ErrorPage {...err} />;

    return (
      <>
        <h2>Suggestions</h2>
        {username && (
          <StyledAddSuggestionForm
            addSuggestionOptimistic={this.addSuggestionOptimistic}
          />
        )}
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
