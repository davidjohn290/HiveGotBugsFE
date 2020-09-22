import React, { Component } from "react";

class AddSuggestionForm extends Component {
  state = {};

  handleSubmit = (submitEvent) => {
    const { addSuggestionOptimistic } = this.props;
    submitEvent.preventDefault();
    // Api call here
    addSuggestionOptimistic(); // Not written yet. Should Update array of suggestions in SuggestionList's state.
  };

  render() {
    const { className } = this.props;

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        Form elements here
      </form>
    );
  }
}

export default AddSuggestionForm;
