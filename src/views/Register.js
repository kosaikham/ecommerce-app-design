import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

class Register extends Component {
  static navigationOptions = {
    ...Platform.select({
      android: {
        header: null
      }
    })
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
        <View
          style={{
            height: 130,
            paddingHorizontal: 20,
            marginTop: Platform.OS == "android" ? 30 : null
          }}
        >
          {/* header */}
          <Text
            style={{
              fontSize: 70,
              fontWeight: "400"
            }}
          >
            Signup.
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            marginBottom: Platform.OS == "android" ? 50 : null
          }}
          behavior="padding"
          enabled
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20
            }}
          >
            {/* form */}
            <Input label="Your name" placeholder="Enter your Full name" />
            <Input label="Your email address" placeholder="Email address" />
            <Input label="Your password" placeholder="Password" />
            <Text
              style={{
                fontWeight: "500",
                color: "gray"
              }}
            >
              Or easily{" "}
              <Text
                style={{
                  color: "#F08C4F"
                }}
              >
                connect with facebook
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20
          }}
        >
          {/* bgImage */}
          <ImageBackground
            source={require("../../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: Platform.OS == "android" ? 470 : 440
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: 40
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressRegister}
                backgroundColor="#F08C4F"
                text="Complete registration"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Register;
