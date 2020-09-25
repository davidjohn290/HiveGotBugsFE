import styled from "styled-components";
import SingleProblem from "../components/singleProblem/SingleProblem";
import SingleProblemCard from "../components/singleProblem/SingleProblemCard";
import EditProblemForm from "../components/singleProblem/EditProblemForm";
import AddSuggestionForm from "../components/singleProblem/AddSuggestionForm";
import SuggestionsList from "../components/singleProblem/SuggestionsList";
import SuggestionCard from "../components/singleProblem/SuggestionCard";
import EditSuggestionForm from "../components/singleProblem/EditSuggestionForm";

// <main>
export const StyledSingleProblem = styled(SingleProblem)`
  text-align: center;
`;

// <article>
export const StyledSingleProblemCard = styled(SingleProblemCard)`
  background-color: gray;
  padding: 1em;
  max-width: 60%;
  margin: 1.5em auto;

  @media only screen and (max-width: 600px) {
    max-width: 80%;
  }

  --notchSize: 30px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
  }

  .textLeft {
    font-size: 11pt;
  }

  .textCenter {
    font-size: 11pt;
    margin: auto;
  }

  .buttons {
    display: flex;
    gap: 0.3em;
  }
`;

// <form>
export const StyledEditProblemForm = styled(EditProblemForm)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
  padding-bottom: 0.7em;

  label {
    margin-top: 0.5em;
    margin-bottom: 0.4em;
    width: 80%;
  }

  .formElement {
    width: 100%;
  }

  --notchSize: 10px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );
`;

// <section>
export const StyledSuggestionsList = styled(SuggestionsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  padding: 1em;
  max-width: 60%;
  margin: 1.5em auto;

  @media only screen and (max-width: 600px) {
    max-width: 80%;
  }

  --notchSize: 30px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );

  ul {
    padding: 0em;
    width: 100%;
  }
`;

// <form>
export const StyledAddSuggestionForm = styled(AddSuggestionForm)`
  width: 100%;
  margin: auto;

  h3 {
    margin: 0em;
  }

  form {
    display: flex;
    align-items: center;
    max-width: 100%;
  }

  textarea {
    margin: 0.3em;
    width: 100%;
  }
`;

// <li>
export const StyledSuggestionCard = styled(SuggestionCard)`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: white;
  color: #272c35;
  margin: 1em auto;
  max-width: 100%;
  padding: 0.3em;

  --notchSize: 10px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;

    .textLeft {
      font-size: 9pt;
    }

    .textCenter {
      font-size: 9pt;
      margin: auto;
    }

    .buttons {
      display: flex;
      gap: 0.3em;
    }
  }

  p {
    overflow-wrap: anywhere;
  }
`;

// <form>
export const StyledEditSuggestionForm = styled(EditSuggestionForm)`
  display: flex;
  align-items: flex-end;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: auto;

  textarea {
    margin: 0.3em;
    width: 100%;
  }
`;
