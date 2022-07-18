import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <RadioGroup radioButtons={[{
      id: "0",
      value: "0",
      label: "Option1"
    }, {
      id: "1",
      value: "1",
      label: "Option22"
    }]} layout="row" style={{
      left: 0,
      top: 69,
      position: "absolute",
      width: 196,
      height: 90
    }}></RadioGroup></View>;
};

export default Untitled3;