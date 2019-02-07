import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

class HomeCategory extends Component {
  state = {
    width: null,
    height: null
  };

  componentWillMount() {
    const { imageUri } = this.props;
    this.setState({
      width: Image.resolveAssetSource(imageUri).width,
      height: Image.resolveAssetSource(imageUri).height
    });
  }

  render() {
    const { imageUri, titleFirst, titleSecond, subTitle } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate("Category", {
            name: titleFirst
          })
        }
        style={{
          height: this.state.height
        }}
      >
        <ImageBackground
          source={imageUri}
          style={{
            flex: 1,
            width: width,
            height: this.state.height,
            alignSelf: "stretch",
            resizeMode: "contain",
            paddingLeft: wp("10%")
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "flex-end",
              paddingBottom: hp("5%")
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500"
              }}
            >
              {titleFirst}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500"
              }}
            >
              {titleSecond}
            </Text>
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "gray",
                fontWeight: "500"
              }}
            >
              {subTitle}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default HomeCategory;
