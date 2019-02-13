import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class ShippingPartner extends Component {
  render() {
    const { imageUri, name, description } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 15
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: wp("4.3%"),
              height: wp("4.3%"),
              borderWidth: 1,
              borderColor: "gray",
              marginRight: 10
            }}
          />
          <View
            style={{
              width: wp("20%"),
              height: wp("15%")
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
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "gray"
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    );
  }
}

export default ShippingPartner;
