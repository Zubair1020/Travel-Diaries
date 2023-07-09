import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux-store/user/user.selector";
import { fetchPostsAsync } from "./redux-store/posts/posts.action";
import { selectPostsUnsubscribe } from "./redux-store/posts/posts.selector";

import Home from "./components/routes/home/home.component";
import Diaries from "./components/routes/diaries/diaries.component";
import Auth from "./components/routes/auth/auth.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Profile from "./components/routes/profile/profile.component";
import Add from "./components/routes/add/add.component";
import Update from "./components/routes/update/update.component";
import ReadDairy from "./components/routes/read-dairy/read-dairy.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const unsubscribePost = useSelector(selectPostsUnsubscribe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());

    return () => {
      typeof unsubscribePost === "function" && unsubscribePost();
    };
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/diaries"
          element={<Diaries />}
        />
        {!isLoggedIn && (
          <Route
            path="/auth"
            element={<Auth />}
          />
        )}
        {isLoggedIn && (
          <>
            <Route
              path="/add"
              element={<Add />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/post/:id"
              element={<Update />}
            />
          </>
        )}
        <Route
          path="/diaries/:id"
          element={<ReadDairy />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};

export default App;
