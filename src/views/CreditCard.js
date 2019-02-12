import React, { Component } from "react";
import { View, Text } from "react-native";

class CreditCard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>CreditCard</Text>
      </View>
    );
  }
}

export default CreditCard;
