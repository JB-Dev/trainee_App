import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListData from "../screens/ListData";
import Login from "../screens/Login";

const Navigator = createStackNavigator({
  ListDataScreen: ListData,
  LoginScreen: Login,
});
export default createAppContainer(Navigator);
