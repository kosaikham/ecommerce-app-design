import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Basket extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Basket</Text>
        <Button
          title="go to Checkout"
          onPress={() => this.props.navigation.navigate("Checkout")}
        />
      </View>
    );
  }
}

export default Basket;
