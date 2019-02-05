import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Payment extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Payment</Text>
        <Button
          title="go to TermsAndConditions"
          onPress={() => this.props.navigation.navigate("TermsAndConditions")}
        />
      </View>
    );
  }
}

export default Payment;
