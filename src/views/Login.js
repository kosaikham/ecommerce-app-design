import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#F6F6F6",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* brandName part */}
          <Text
            style={{
              fontSize: 90,
              fontWeight: "600"
            }}
          >
            fash.
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "400"
            }}
          >
            your 24h fash.store
          </Text>
        </View>
        <View
          style={{
            flex: 2
          }}
        >
          {/* Image part */}
          <ImageBackground
            source={require("../../assets/login_bg_1.jpg")}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingBottom: 40
                }}
              >
                <Button backgroundColor="#F08C4F" text="Register" />
                <Button backgroundColor="#5BBC9D" text="Login" />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Login;
