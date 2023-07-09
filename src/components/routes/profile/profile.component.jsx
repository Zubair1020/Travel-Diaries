import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserDetails,
} from "../../../redux-store/user/user.selector";
import { setCurrentUserSuccess } from "../../../redux-store/user/user.action";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import { useNavigate } from "react-router-dom";
import {
  selectIsPostsLoading,
  selectPosts,
} from "../../../redux-store/posts/posts.selector";

import DairyItem from "../../dairy-item/dairy-item.component";
import Spinner from "../../spinner/spinner.component";
import { Button, Typography } from "@mui/material";
import { CardContainer } from "../diaries/diaries.style";
import { StyledBox } from "./profile.style";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(selectPosts);
  const currentUserId = useSelector(selectCurrentUser);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const currentUserDetails = useSelector(selectCurrentUserDetails);

  const userPosts = posts.filter((post) => post.user === currentUserId);
  console.log(currentUserDetails);
  const handelClick = () => {
    dispatch(setCurrentUserSuccess(null));
    dispatch(setTabValue(0));
    navigate("/");
  };
  return (
    <>
      {isPostsLoading ? (
        <Spinner />
      ) : (
        <>
          <StyledBox>
            <Typography variant="h2">User Profile</Typography>
            <div>
              <Typography variant="h4">{currentUserDetails.name}</Typography>
              <Typography variant="h5">{currentUserDetails.email}</Typography>
              <Button
                size="large"
                variant="contained"
                onClick={handelClick}
              >
                Log out
              </Button>
            </div>
          </StyledBox>
          <CardContainer>
            {userPosts.map((post) => (
              <DairyItem
                key={post.id}
                post={post}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
};

export default Profile;
