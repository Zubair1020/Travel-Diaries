export const selectCurrentUser = ({ user }) => user.currentUser;

export const selectCurrentUserDetails = ({ user }) => user.currentUserDetails;

export const selectIsLoggedIn = ({ user }) => !!user.currentUser;

export const selectCurrentUserIsLoading = ({ user }) => user.isLoading;

export const selectCurrentUserError = ({ user }) => user.error;
