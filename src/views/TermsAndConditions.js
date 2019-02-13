import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

class TermsAndConditions extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          style={{
            padding: 15
          }}
        >
          <Text style={styles.titleStyle}>General Terms</Text>
          <Text style={styles.contentStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </Text>
          <Text style={styles.contentStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </Text>
          <Text style={styles.titleStyle}>Privacy Agreement</Text>
          <Text style={styles.contentStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </Text>
          <Text style={styles.titleStyle}>Personal Data</Text>
          <Text style={styles.contentStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: "#5BBC9D",
    paddingBottom: 10
  },
  contentStyle: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 15,
    lineHeight: 20
  }
};

export default TermsAndConditions;
