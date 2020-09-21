import styled from "styled-components";
import UserCard from "../components/dashboard/UserCard";

export const StyledUserCard = styled(UserCard)`
  h2 {
    text-align: center;
  }

  h4 {
    margin: 5px;
  }

  img {
    max-width: 2cm;
    max-height: 2cm;
  }

  header {
    text-align: center;
  }
  button {
    display: flex;
    margin: auto;
  }
`;
