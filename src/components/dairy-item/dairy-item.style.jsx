import { Card, CardActions, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 35rem;
  max-width: 32rem;
  height: 32rem;
`;

export const StyledCardActions = styled(CardActions)`
  .editButton:hover {
    color: #a4d0a4;
  }
  .deleteButton:hover {
    color: #db005b;
  }
  button {
    margin-left: auto;
    color: gray;
    transition: color 0.5s ease;
  }
`;

export const StyledLink = styled(Link)`
  color: #555;
  transition: color 0.3s ease;
  :hover {
    color: #eebe00;
  }
`;
