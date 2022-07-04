import { Switch } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 7,
      top: 6,
      position: "absolute",
      height: 49,
      width: 97,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 77,
      top: 212,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }} maxLength={190} editable={true} selectTextOnFocus={true} multiline={true}>1234567890123456</Text><Text style={{
      left: 11,
      top: 289,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><TextInput style={{
      left: 9,
      top: 66,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} multiline={true} autoCorrect={true}></TextInput><TextInput style={{
      left: 9,
      top: 105,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><Switch style={{
      left: 24,
      top: 160,
      position: "absolute",
      width: 50,
      height: 25
    }}></Switch></View>;
};

export default Untitled1;