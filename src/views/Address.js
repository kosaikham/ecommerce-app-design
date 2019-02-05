import React, { Component } from "react";
import { View, Text } from "react-native";

class Address extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Address</Text>
      </View>
    );
  }
}

export default Address;
