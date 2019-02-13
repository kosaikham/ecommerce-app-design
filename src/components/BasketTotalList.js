import React, { Component } from "react";
import { View, Text } from "react-native";

class BasketTotalList extends Component {
  render() {
    const { label, price } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderTopWidth: 0.6,
          borderTopColor: "gray"
          //   marginTop: wp("10%")
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          ${price}
        </Text>
      </View>
    );
  }
}

export default BasketTotalList;
