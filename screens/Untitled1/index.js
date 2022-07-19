import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={() => navigation.navigate("Untitled2")}><View style={{
        left: 20,
        top: 27,
        position: "absolute",
        height: 60,
        width: 140,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 35,
      top: 228,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;