import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ListData from "../screens/ListData";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";
import Home from "../screens/Home";
import TabHome from "../screens/TabHome";

const bottomTabConfig = {
  initialRouteName: "TabHome",
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    activeTintColor: "#000",
    inActiveTintColor: "#fff",
    labelStyle: {
      fontSize: 12,
    },
  },
};

const routeConfigs = {
  TabHome: {
    screen: TabHome,
    navigationOption: ({ navigation }) => ({
      title: "Home",
    }),
  },
  Splash: {
    screen: TabHome,
    navigationOption: ({ navigation }) => ({
      title: "Splash",
    }),
  },
  Login: {
    screen: TabHome,
    navigationOption: ({ navigation }) => ({
      title: "Login",
    }),
  },
};

const BottomTabNavigator = createBottomTabNavigator(
  routeConfigs,
  bottomTabConfig
);
const Navigator = createStackNavigator(
  {
    SplashScreen: {
      screen: Splash,
    },
    LoginScreen: {
      screen: Login,
    },
    SignUpScreen: {
      screen: SignUp,
    },
    ListDataScreen: {
      screen: ListData,
    },
    HomeScreen: {
      screen: Home,
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "SplashScreen",
  }
);
export default createAppContainer(Navigator);
