import styled from "styled-components";
import { Link } from "@reach/router";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";

// <Link>, sometimes overridden as <Button>
export const StyledHexButton = styled(Link)`
  position: relative;
  width: 70px;
  height: 40.41px;
  /* background-color: #b8dbd9; */
  background-color: rgb(0, 124, 146);
  margin: 20.21px 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 10pt;
  text-align: center;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
  }
  :before {
    bottom: 100%;
    border-bottom: 20.21px solid rgb(0, 124, 146);
  }
  :after {
    top: 100%;
    width: 0;
    border-top: 20.21px solid rgb(0, 124, 146);
  }

  &:hover {
    font-weight: bold;
  }
`;

export const StyledDifficultyButton = styled.button`
  margin-left: 0.2em;
  margin-right: 0.2em;
  text-align: center;
  border: none;
  height: 25px;
  width: 70px;
  outline: none;
  background-color: ${(props) => {
    const { difficulty } = props;
    if (difficulty === "easy") return "#8cc56f";
    if (difficulty === "medium") return "#da995c";
    if (difficulty === "hard") return "#ed6270";
  }};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLoader = styled(Loader)``;

export const StyledErrorPage = styled(ErrorPage)``;
