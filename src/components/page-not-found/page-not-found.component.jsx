import { useNavigate } from "react-router-dom";
import { StyledBox } from "./page-not-found.style";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setTabValue } from "../../redux-store/user-interaction/userInteraction.action";
import { useEffect, useState } from "react";

const PageNotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      timer > 0 && setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      navigate("/");
      dispatch(setTabValue(0));
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <StyledBox>
      <Typography variant="h2">404</Typography>
      <Typography variant="h4">Ops Page not found !</Typography>
      <Typography>Sorry the page you looking for dose not exist.</Typography>
      <Typography>Redirecting in {timer}</Typography>
    </StyledBox>
  );
};

export default PageNotFound;
