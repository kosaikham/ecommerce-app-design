import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

class ChoosingBoxSize extends Component {
  render() {
    const {
      top,
      opacity,
      firstItem,
      secondItem,
      thirdItem,
      onPressFirst,
      onPressSecond,
      onPressThird
    } = this.props;
    return (
      <Animated.View
        style={{
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
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: "#5BBC9D",
            fontWeight: "bold"
          }}
        >
          Choose a size
        </Text>
        <TouchableOpacity
          onPress={onPressFirst} // props
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              backgroundColor: "gray",
              width: wp("4.3%"),
              height: wp("4.3%")
            }}
          />
          <Text
            style={{
              paddingLeft: 15
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
              backgroundColor: "gray",
              width: wp("4.3%"),
              height: wp("4.3%")
            }}
          />
          <Text
            style={{
              paddingLeft: 15
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
              backgroundColor: "gray",
              width: wp("4.3%"),
              height: wp("4.3%")
            }}
          />
          <Text
            style={{
              paddingLeft: 15
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
