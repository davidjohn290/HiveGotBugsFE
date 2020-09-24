import React from "react";
import ErrorPage from "../ErrorPage";
import {
  StyledSuggestionCard,
  StyledAddSuggestionForm,
} from "../../styled/singleProblem";
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
      .catch(() => {
        this.setState({
          isLoading: false,
          //   err: {
          //     type: "fetchSuggestions",
          //     msg: response.data.msg,
          //     status: response.status,
          //   },
        });
      });
  };

  renderNewSuggestion = (newSuggestion) => {
    this.setState(({ suggestions }) => {
      return { suggestions: [newSuggestion, ...suggestions] };
    });
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
    this.setState(({ suggestions }) => {
      return {
        suggestions: suggestions.map((suggestion) => {
          if (suggestion.suggestion_id === suggestion_id) {
            return { ...suggestion, body };
          } else return suggestion;
        }),
      };
    });
  };

  suggestionSolvedOptimistic = (suggestion_id, username) => {
    this.setState(({ suggestions }) => {
      return {
        suggestions: suggestions.map((suggestion) => {
          if (suggestion.suggestion_id === suggestion_id) {
            return { ...suggestion, approved_by: username };
          } else return suggestion;
        }),
      };
    });
  };

  render() {
    const { className, problem, problemSolvedOptimistic } = this.props;
    const { suggestions, err } = this.state;
    const { username } = this.context;
    if (err) return <ErrorPage {...err} />;

    return (
      <section>
        <h2>Suggestions</h2>
        {username && (
          <StyledAddSuggestionForm
            problem_id={problem.problem_id}
            renderNewSuggestion={this.renderNewSuggestion}
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
                suggestionSolvedOptimistic={this.suggestionSolvedOptimistic}
                problemSolvedOptimistic={problemSolvedOptimistic}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default SuggestionsList;
