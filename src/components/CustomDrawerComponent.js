import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class CustomDrawerComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> CustomDrawerComponent </Text>
        <Button
          title="go to Basket"
          onPress={() => this.props.navigation.navigate("Basket")}
        />
      </View>
    );
  }
}

export default CustomDrawerComponent;
