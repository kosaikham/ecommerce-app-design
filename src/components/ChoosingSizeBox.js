import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

class ChoosingBoxSize extends Component {
  render() {
    const {
      color,
      top,
      opacity,
      firstItem,
      secondItem,
      thirdItem,
      onPressFirst,
      onPressSecond,
      onPressThird,
      onBasketPage,
      label
    } = this.props;
    return (
      <Animated.View
        style={[
          {
            height: hp("35%"),
            backgroundColor: "rgba(255,255,255,0.7)",
            position: "absolute",
            top: top, // props
            left: 0,
            right: 0,
            zIndex: 100,
            justifyContent: "space-around",
            paddingHorizontal: 15,
            opacity: opacity // props
          },
          onBasketPage
            ? {
                position: "relative",
                top: null,
                left: null,
                right: null,
                height: hp("25%")
              }
            : null
        ]}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#5BBC9D",
            fontWeight: "bold"
          }}
        >
          {label}
        </Text>
        <TouchableOpacity
          onPress={onPressFirst} // props
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              backgroundColor: color ? "white" : "gray",
              width: wp("4.3%"),
              height: wp("4.3%"),
              borderWidth: color ? 1 : 0,
              borderColor: color ? firstItem : null
            }}
          />
          <Text
            style={{
              paddingLeft: 15,
              textTransform: "capitalize"
            }}
          >
            {firstItem}
          </Text>
          {/* props */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressSecond}
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              backgroundColor: color ? "white" : "gray",
              width: wp("4.3%"),
              height: wp("4.3%"),
              borderWidth: color ? 1 : 0,
              borderColor: color ? secondItem : null
            }}
          />
          <Text
            style={{
              paddingLeft: 15,
              textTransform: "capitalize"
            }}
          >
            {secondItem}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressThird}
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              backgroundColor: color ? "white" : "gray",
              width: wp("4.3%"),
              height: wp("4.3%"),
              borderWidth: color ? 1 : 0,
              borderColor: color ? thirdItem : null
            }}
          />
          <Text
            style={{
              paddingLeft: 15,
              textTransform: "capitalize"
            }}
          >
            {thirdItem}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default ChoosingBoxSize;
