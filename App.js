import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Font } from "expo";
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
      screen: Login,
      navigationOptions: () => ({
        headerBackTitle: null
      })
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "#F6F6F6"
        }
      })
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(StackNavigator);
