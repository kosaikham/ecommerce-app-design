import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class ItemList extends Component {
  render() {
    const { imageUri, name, priceOne, priceTwo, onPress } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View
          style={{
            width: wp("44%"),
            marginHorizontal: 10,
            marginTop: 10
          }}
        >
          <View
            style={{
              width: wp("44%"),
              height: wp("55%"),
              marginBottom: 10
            }}
          >
            <Image
              source={imageUri}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain"
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 5
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#63CBA7",
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 5
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold"
                }}
              >
                ${priceOne}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "line-through",
                  marginLeft: 10
                }}
              >
                {priceTwo}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemList;
