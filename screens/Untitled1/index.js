import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import { TextInput } from "react-native";
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
    }}></View><TextInput style={{
      left: 9,
      top: 62,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} multiline={true} autoCorrect={true}></TextInput><TextInput style={{
      left: 11,
      top: 100,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} spellCheck={true} enablesReturnKeyAutomatically={true} clearTextOnFocus={true} rejectResponderTermination={true} scrollEnabled={true} disableFullscreenUI={true} showSoftInputOnFocus={true} autoFocus={false} allowFontScaling={true} secureTextEntry={true} selectTextOnFocus={true} multiline={true} autoCorrect={true} placeholder="dan" defaultValue="daniel" maxLength={200} placeholderTextColor="red"></TextInput><Switch style={{
      left: 24,
      top: 138,
      position: "absolute",
      width: 50,
      height: 25
    }} value={true}></Switch><Slider thumbStyle={{
      height: 20,
      width: 20,
      backgroundColor: "blue"
    }} maximumValue={10} minimumValue={0} style={{
      left: 16,
      top: 182,
      position: "absolute",
      width: 150,
      height: 40
    }} value={8}></Slider><Slider thumbStyle={{
      height: 20,
      width: 20,
      backgroundColor: "blue"
    }} maximumValue={1} minimumValue={0} style={{
      left: 16,
      top: 231,
      position: "absolute",
      width: 150,
      height: 40
    }} value={1}></Slider><Slider thumbStyle={{
      height: 20,
      width: 20,
      backgroundColor: "blue"
    }} maximumValue={1} minimumValue={0} style={{
      left: 17,
      top: 280,
      position: "absolute",
      width: 150,
      height: 40
    }}></Slider></View>;
};

export default Untitled1;