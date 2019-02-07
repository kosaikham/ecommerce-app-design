import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
const { width } = Dimensions.get("window");

class Detail extends Component {
  render() {
    const {
      detailName,
      detailImageUri,
      detailPriceOne,
      detailPriceTwo
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          {/* image */}
          <View
            style={{
              width: width,
              height: hp("65%")
            }}
          >
            <Image
              source={detailImageUri}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "stretch"
              }}
            />
          </View>
          {/* image */}
          {/* priceBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
              {/* up bar */}
              {/* left */}
              <View
                style={{
                  width: wp("45%"),
                  flexDirection: "row",
                  borderWidth: 0.8,
                  borderColor: "gray",
                  borderRadius: 2,
                  padding: 5
                }}
              >
                <View
                  style={{
                    flex: 2,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "black",
                      width: wp("4.5%"),
                      height: wp("4.5%"),
                      marginRight: 15
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "gray"
                    }}
                  >
                    Black
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    paddingRight: 15
                  }}
                >
                  <Icon
                    onPress={() => alert("something")}
                    name="ios-arrow-down"
                    size={20}
                    color="gray"
                  />
                </View>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  width: wp("45%"),
                  flexDirection: "row",
                  borderWidth: 0.8,
                  borderColor: "gray",
                  borderRadius: 2,
                  padding: 5,
                  justifyContent: "space-between"
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "gray",
                    marginLeft: 15
                  }}
                >
                  Small
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    paddingRight: 15
                  }}
                >
                  <Icon
                    onPress={() => alert("something")}
                    name="ios-arrow-down"
                    size={20}
                    color="gray"
                  />
                </View>
              </View>
              {/* right */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              {/* down bar */}
              {/* left */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 15
                  }}
                >
                  $ {detailPriceOne}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "gray",
                    textDecorationLine: "line-through"
                  }}
                >
                  {detailPriceTwo}
                </Text>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  width: wp("45%"),
                  backgroundColor: "#F08C4F",
                  borderRadius: 2,
                  padding: 5
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15
                    }}
                  >
                    <Icon name="md-cart" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 2
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white"
                      }}
                    >
                      Purchase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* right */}
            </View>
          </View>
          {/* priceBox */}
          {/* DescriptionBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray"
            }}
          >
            {/* upper */}
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5BBC9D"
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </Text>
            </View>
            {/* upper */}
            {/* lower */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              {/* left */}
              <View
                style={{
                  flex: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#5BBC9D",
                    marginBottom: 5
                  }}
                >
                  Available Colors
                </Text>
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "black",
                      width: wp("4.5%"),
                      height: wp("4.5%"),
                      marginRight: 15
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "yellow",
                      width: wp("4.5%"),
                      height: wp("4.5%"),
                      marginRight: 15
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "blue",
                      width: wp("4.5%"),
                      height: wp("4.5%")
                    }}
                  />
                </View>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  flex: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#5BBC9D",
                    marginBottom: 5
                  }}
                >
                  Available Sizes
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold"
                  }}
                >
                  S, M, L, XL
                </Text>
              </View>
              {/* right */}
            </View>
            {/* lower */}
          </View>
          {/* DescriptionBox */}
          {/* reviews */}
          <View
            style={{
              paddingLeft: 25,
              paddingVertical: 5,
              backgroundColor: "#EFF0F1"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "gray"
              }}
            >
              33 Reviews
            </Text>
          </View>
          {/* reviews */}
          {/* reviewBox */}
          <View
            style={{
              flex: 1
            }}
          >
            {/* left */}
            <View
              style={{
                flex: 1
              }}
            >
              {/* profile */}
              <View
                style={{
                  width: wp("10%"),
                  height: wp("10%"),
                  borderRadius: wp("5%"),
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../../assets/reviewer.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "contain"
                  }}
                />
              </View>
            </View>
            {/* left */}
            {/* right */}
            <View
              style={{
                flex: 4
              }}
            >
              {/* right_up */}
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                {/* name and star */}
              </View>
              {/* right_up */}
              {/* right_down */}
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </Text>
              {/* right_down */}
            </View>
            {/* right */}
          </View>
          {/* reviewBox */}
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
