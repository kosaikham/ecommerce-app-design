import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Input = ({ label, placeholder }) => {
  return (
    <View
      style={{
        height: 90
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "gray",
          marginBottom: 10
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={{
          flex: 1
        }}
      >
        <TextInput
          style={{
            height: 50,
            fontSize: 18,
            fontWeight: "500",
            paddingVertical: 10,
            paddingLeft: 20,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 4
          }}
          placeholder={placeholder}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
