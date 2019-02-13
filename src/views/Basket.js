import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import BasketItem from "../components/BasketItem";
import BasketTotalList from "../components/BasketTotalList";

class Basket extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1"
        }}
      >
        {/* ItemLists_upper */}
        <View
          style={{
            flex: 2
          }}
        >
          <ScrollView>
            <BasketItem
              editIcon={true}
              imageUri={require("../../assets/dresses/dresses_1.jpg")}
              name="Dress Helena"
              color="Black"
              size="M"
              price={120}
              {...this.props}
            />
            <BasketItem
              editIcon={true}
              imageUri={require("../../assets/dresses/dresses_2.jpg")}
              name="Dress Marie-Anne short"
              color="Black"
              size="M"
              price={180}
              {...this.props}
            />
            <BasketItem
              editIcon={true}
              imageUri={require("../../assets/dresses/dresses_3.jpg")}
              name="Dress Betruschka"
              color="Black"
              size="M"
              price={80}
              {...this.props}
            />
          </ScrollView>
        </View>
        {/* ItemLists_upper */}
        {/* total_lower */}
        <View
          style={{
            flex: 1,
            paddingTop: wp("10%")
          }}
        >
          <BasketTotalList label="Shipping" price={6} />
          <BasketTotalList label="Your total" price={380} />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              justifyContent: "flex-end",
              paddingBottom: 15
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Checkout")}
              style={{
                flexDirection: "row",
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
              <View
                style={{
                  marginRight: 15
                }}
              >
                <Icon name="md-cart" size={20} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Place your order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* total_lower */}
      </View>
    );
  }
}

export default Basket;

{
  /* <Button
          title="go to Checkout"
          onPress={() => this.props.navigation.navigate("Checkout")}
        />
        <Button
          title="go to EditBasket"
          onPress={() => this.props.navigation.navigate("EditBasket")}
        /> */
}
