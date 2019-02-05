import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Animated,
  Keyboard
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
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

  componentWillMount() {
    this.formPosition = new Animated.Value(0);
    this.animatedTitleOpacity = new Animated.Value(1);

    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );

    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  keyboardWillShow = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    // Animated.timing(this.formPosition, {
    //   duration: duration,
    //   toValue: -hp("8.25%")
    // }).start();
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: -hp("8.25%")
      }),
      Animated.timing(this.animatedTitleOpacity, {
        duration: duration,
        toValue: 0
      })
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    // Animated.timing(this.formPosition, {
    //   duration: duration,
    //   toValue: 0
    // }).start();
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.animatedTitleOpacity, {
        duration: duration,
        toValue: 1
      })
    ]).start();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6"
        }}
      >
        <View
          style={{
            height: hp("18%"),
            paddingHorizontal: hp("2.5%"),
            marginTop: Platform.OS == "android" ? hp("3.75%") : null
          }}
        >
          <Animated.Text
            style={{
              fontSize: 70,
              fontWeight: "400",
              opacity: this.animatedTitleOpacity
            }}
          >
            Signup.
          </Animated.Text>
        </View>
        <Animated.View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition
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
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%")
          }}
        >
          <ImageBackground
            source={require("../../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: hp("72%")
              // height: Platform.OS == "android" ? 470 : 440
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: hp("5%")
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
