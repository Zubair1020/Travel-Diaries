import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPosts } from "../../../redux-store/posts/posts.selector";
import {
  StyledDescriptionBox,
  StyledTitleBox,
  StyledBox,
  StyledImgBox,
} from "./read-dairy.style";
import { Typography } from "@mui/material";

const ReadDairy = () => {
  const paramId = useParams().id;
  const posts = useSelector(selectPosts);
  const { title, description, image, location, date, name } = posts.filter(
    ({ id }) => id === paramId
  )[0];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month},${day},${year}`;
  };

  return (
    <StyledBox>
      <StyledTitleBox>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h6">
          <span>{location}</span> <span>{formatDate(date)}</span>
        </Typography>
      </StyledTitleBox>
      <StyledImgBox img={image} />
      <StyledDescriptionBox>
        <Typography variant="h4">By: {name}</Typography>
        <article>
          <span>Description : </span>
          {description}
        </article>
      </StyledDescriptionBox>
    </StyledBox>
  );
};

export default ReadDairy;
