import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

class Shipping extends Component {
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
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: "gray"
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
                imageUri={require("../../assets/logo/logo_1.jpg")}
                name="DHL"
                description="No additional Costs"
              />
              <ShippingPartner
                imageUri={require("../../assets/logo/logo_2.jpg")}
                name="UPS"
                description="No additional Costs"
              />
              <ShippingPartner
                imageUri={require("../../assets/logo/logo_3.png")}
                name="FEDEX EXPRESS"
                description="Additional 12.99 $"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              marginBottom: 15
            }}
          >
            Shipping Address
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            Johnny Doe
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            11144 Military Trail (North)
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            Apartment #3122
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            23122 Palo Alot
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            California, United States
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Payment")}
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

export default Shipping;
