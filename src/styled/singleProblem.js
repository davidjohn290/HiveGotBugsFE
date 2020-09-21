import styled from "styled-components";
import SingleProblem from "../components/singleProblem/SingleProblem";
import SingleProblemCard from "../components/singleProblem/SingleProblemCard";
import EditProblemForm from "../components/singleProblem/EditProblemForm";
import AddSuggestionForm from "../components/singleProblem/AddSuggestionForm";
import SuggestionsList from "../components/singleProblem/SuggestionsList";
import SuggestionCard from "../components/singleProblem/SuggestionCard";
import SuggestionForm from "../components/singleProblem/EditSuggestionForm"

// <main>
export const StyledSingleProblem = styled(SingleProblem)`
  text-align: center;
`;

// <article>
export const StyledSingleProblemCard = styled(SingleProblemCard)`
  border-style: solid;
  border-width: 2px;
  border-color: red;
`;

// <form>
export const StyledEditProblemForm = styled(EditProblemForm)`
  border-style: solid;
  border-width: 2px;
  border-color: blue;
`;

// <form>
export const StyledAddSuggestionForm = styled(AddSuggestionForm)`
  border-style: solid;
  border-width: 2px;
  border-color: green;
`;

// <ul>
export const StyledSuggestionsList = styled(SuggestionsList)`
  padding: 0px;
`;

// <li>
export const StyledSuggestionCard = styled(SuggestionCard)`
  list-style-type: none;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;

// <form>
export const StyledEditSuggestionForm = styled(SuggestionForm)`

`
