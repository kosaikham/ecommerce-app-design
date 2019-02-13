import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

class Payment extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            height: hp("45%"),
            width: "100%",
            marginTop: 20
          }}
        >
          <View
            style={{
              paddingHorizontal: 15
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 14
              }}
            >
              Which shipping partner do you like?
            </Text>
            <View
              style={{
                marginTop: 15
              }}
            >
              <ShippingPartner
                imageUri={require("../../assets/payment/payment_1.png")}
                name="Creditcard"
                description="Visa, Mastercard, JCB, Amex"
              />
              <ShippingPartner
                imageUri={require("../../assets/payment/payment_2.png")}
                name="Paypal"
                description="paypalaccount@gmail.com"
              />
              <ShippingPartner
                imageUri={require("../../assets/payment/payment_3.png")}
                name="ApplePay"
                description="applepay@gmail.com"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("CreditCard")}
              style={{
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Payment;

{
  /* <Button
          title="go to TermsAndConditions"
          onPress={() => this.props.navigation.navigate("TermsAndConditions")}
        />
        <Button
          title="go to CreditCard"
          onPress={() => this.props.navigation.navigate("CreditCard")}
        /> */
}
