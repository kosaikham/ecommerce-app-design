import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
const window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4c69a5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30
  }
});

const Demo = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
    </KeyboardAvoidingView>
  );
};

export default Demo;
