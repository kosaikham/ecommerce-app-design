import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import Home from "./src/views/Home";
import Demo from "./src/views/Playground";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const customComponent = props => {
  return (
    <View
      style={{
        flex: 1
      }}
      {...props}
    >
      <Text>CustomComponent</Text>
    </View>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: customComponent
  }
);

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
        headerBackTitle: null
      })
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "#F6F6F6"
        },
        headerBackTitle: null
      })
    },
    Demo: {
      screen: Demo
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
      // navigationOptions: ({ navigation }) => ({
      //   title: "React"
      //   // headerLeft: (
      //   //   <TouchableOpacity
      //   //     onPress={() => {
      //   //       navigation.dispatch(DrawerActions.toggleDrawer());
      //   //     }}
      //   //   >
      //   //     <Ionicons name="md-menu" color="red" size={30} />
      //   //   </TouchableOpacity>
      //   // )
      // })
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(StackNavigator);
