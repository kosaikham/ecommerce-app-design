import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";

class Login extends Component {
  onPressRegister = () => {
    this.props.navigation.navigate("Register");
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
              // fontSize: hp("11.25%"),
              fontSize: 90,
              fontWeight: "bold"
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
            style={{
              flex: 1,
              width: null,
              height: hp("78%")
              // height: 550
            }}
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
                  justifyContent: "space-between",
                  paddingBottom: hp("5%"),
                  paddingHorizontal: hp("2.5%")
                }}
              >
                <Button
                  onPress={this.onPressRegister}
                  backgroundColor="#F08C4F"
                  text="Register"
                />
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
