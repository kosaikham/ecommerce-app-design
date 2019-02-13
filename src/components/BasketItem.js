import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import FAIcon from "@expo/vector-icons/FontAwesome";
import Icon from "@expo/vector-icons/Ionicons";

class BasketItem extends Component {
  renderEditIcon = () => {
    const { imageUri, name, color, size, price, editIcon } = this.props;
    if (!editIcon) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("EditBasket", {
            basketItemName: name,
            basketItemPrice: price,
            basketItemColor: color,
            basketItemSize: size,
            basketItemImageUri: imageUri
          })
        }
        style={{
          marginRight: 8
        }}
      >
        <FAIcon
          name="edit"
          size={30}
          color="gray"
          style={{
            marginBottom: -5
          }}
        />
      </TouchableOpacity>
    );
  };
  render() {
    const { imageUri, name, color, size, price } = this.props;
    return (
      <View
        style={{
          height: wp("35%"),
          width: wp("100%"),
          backgroundColor: "white",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 14,
          marginBottom: 5
        }}
      >
        {/* image */}
        <View
          style={{
            width: wp("26%"),
            height: wp("26%"),
            marginRight: 10
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
        {/* image */}
        {/* imageInfo_right */}
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {/* imageInfo */}
          <View
            style={{
              flex: 3,
              justifyContent: "space-around"
            }}
          >
            <Text
              style={{
                color: "#5BBC9D",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  width: wp("2.5%"),
                  height: wp("2.5%"),
                  marginRight: 5
                }}
              />
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  marginRight: 5
                }}
              >
                {color} ,
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 15
                }}
              >
                {size}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: wp("14%"),
                  height: wp("8%"),
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 2,
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginRight: 8
                }}
              >
                <Text>1</Text>
                <Icon name="ios-arrow-down" size={20} color="gray" />
              </View>
              {this.renderEditIcon()}
              <TouchableOpacity>
                <FAIcon name="trash-o" size={30} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          {/* imageInfo */}
          {/* imageInfo_price */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 10
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              ${price}
            </Text>
          </View>
          {/* imageInfo_price */}
        </View>
        {/* imageInfo_right */}
      </View>
    );
  }
}

export default BasketItem;
