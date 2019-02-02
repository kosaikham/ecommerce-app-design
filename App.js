import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./src/views/Login";
import Register from "./src/views/Register";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(StackNavigator);
