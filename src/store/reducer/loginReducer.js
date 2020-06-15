import constants from "../../constants/const";

export default (LoginReducer = (isLoggedIn = "false", action) => {
  switch (action.type) {
    case constants.SET_LOGIN:
      isLoggedIn = action.SET_LOGIN;
      return isLoggedIn;
  }
  return isLoggedIn;
});
