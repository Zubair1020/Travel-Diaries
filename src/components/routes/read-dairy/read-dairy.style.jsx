import { Box, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)``;

export const StyledBox = styled(Box)`
  max-width: 70%;
  margin: auto;
`;

export const StyledTitleBox = styled(Box)`
  margin: clamp(1.5rem, 5vw, 5rem) 0 0.5rem;
  h2 {
    font-size: clamp(1.6rem, 5vw, 3rem);
  }
  h6 {
    font-size: clamp(0.3rem, 5vw, 1.3rem);
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
  }
`;

export const StyledImgBox = styled(Box)`
  height: clamp(5rem, 50vw, 28rem);
  background-image: url(${(prop) => prop.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledDescriptionBox = styled(Box)`
  margin-top: 2rem;
  padding-bottom: 2rem;
  h4 {
    font-size: clamp(1.2rem, 5vw, 2.4rem);
  }
  article {
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: 300;
    margin-top: 1rem;
    span {
      font-weight: 400;
    }
  }
`;
