import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserDetails,
} from "../../../redux-store/user/user.selector";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import { addPostById } from "../../../utils/firebase.utils";

import PostUpdate from "../../post-update/post-update.component";
import ErrorModal from "../../error-modal/error-modal.component";
import Spinner from "../../spinner/spinner.component";

const Add = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const currentUserId = useSelector(selectCurrentUser);
  const currentUserDetails = useSelector(selectCurrentUserDetails);
  const dispatch = useDispatch();

  const handelSubmit = async (data, reset) => {
    setIsLoading(true);
    try {
      await addPostById(data, currentUserId, currentUserDetails.name);
      reset();
      dispatch(setTabValue(1));
      navigate("/diaries");
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorModal
          errorMessage={error.message}
          resetError={setError}
        />
      ) : (
        <PostUpdate
          onSubmit={handelSubmit}
          post
        />
      )}
    </>
  );
};

export default Add;
