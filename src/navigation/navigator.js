import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListData from "../screens/ListData";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";

const Navigator = createStackNavigator({
  SplashScreen : {
    screen: Splash
  },
  LoginScreen: {
    screen: Login
  },
  SignUpScreen: {
    screen: SignUp },
  ListDataScreen: {
    screen: ListData
  },
});
export default createAppContainer(Navigator);
