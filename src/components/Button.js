import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: backgroundColor,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 4,
        shadowOffset: { width: 2, height: 4 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        elevation: 4
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          color: "white"
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
