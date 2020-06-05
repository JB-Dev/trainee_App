import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListData from "../screens/ListData";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Navigator = createStackNavigator({
  SignUpScreen: SignUp,
  LoginScreen: Login,
  ListDataScreen: ListData,
});
export default createAppContainer(Navigator);
