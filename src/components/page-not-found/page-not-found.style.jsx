import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background-color: #e9ff70;
  h2 {
    font-size: 12rem;
    font-weight: 700;
    letter-spacing: 10px;
  }
  h4 {
    font-weight: 600;
    word-spacing: 0.3rem;
  }
  p {
    font-size: 1.3rem;
    margin-top: 1.5rem;
  }
`;
