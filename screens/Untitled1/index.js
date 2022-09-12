import { Switch } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.UspTIimn}>
      <Switch style={_styles.MeQFgUTX} thumbColor="#ee4949"></Switch></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  UspTIimn: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  MeQFgUTX: {
    left: 112,
    top: 104,
    position: "absolute",
    width: 50,
    height: 25,
    transform: "rotate(60deg)"
  }
});