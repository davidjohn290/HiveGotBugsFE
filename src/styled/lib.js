import styled from "styled-components";
import { Link } from "@reach/router";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";
import PleaseLogin from "../components/PleaseLogin";

export const StyledLoader = styled(Loader)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledErrorPage = styled(ErrorPage)``;

export const StyledPleaseLogin = styled(PleaseLogin)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 10%;

  h3 {
    margin-top: 10%;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

// <Link>, sometimes overridden as <Button>
export const StyledHexButton = styled(Link)`
  position: relative;
  width: 70px;
  height: 40.41px;
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
  outline: none;

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
`;

export const SmallStyledHexButton = styled(StyledHexButton)`
  width: 50px;
  height: 28.87px;
  margin: 14.43px 0;
  font-size: 9pt;
  background-color: ${(props) => props.backgroundColor};

  :before,
  :after {
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
  :before {
    border-bottom: 14.43px solid ${(props) => props.backgroundColor};
  }
  :after {
    border-top: 14.43px solid ${(props) => props.backgroundColor};
  }
`;

export const TinyStyledHexButton = styled(StyledHexButton)`
  width: 43px;
  height: 24.83px;
  margin: 12.41px 0;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  :before,
  :after {
    border-left: 21.5px solid transparent;
    border-right: 21.5px solid transparent;
  }
  :before {
    border-bottom: 12.41px solid ${(props) => props.backgroundColor};
  }
  :after {
    border-top: 12.41px solid ${(props) => props.backgroundColor};
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
