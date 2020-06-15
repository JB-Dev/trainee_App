import constant from "../../constants/const";
export const setLoginState = (isLoggedIn) => ({
  type: constant.SET_LOGIN,
  isLoggedIn,
});
