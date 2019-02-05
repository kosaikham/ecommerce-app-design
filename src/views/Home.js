import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-menu"
        style={{
          color: "red",
          fontSize: 30
        }}
      />
    )
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Text> Home Home</Text>
      </View>
    );
  }
}

export default Home;
