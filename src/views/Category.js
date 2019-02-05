import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Category extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Category</Text>
        <Button
          title="go to Detail"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}

export default Category;
