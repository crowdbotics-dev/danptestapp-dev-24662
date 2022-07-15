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
      label: "Option232"
    }, {
      id: "2",
      value: "2",
      label: "Option3"
    }]} layout="column" style={{
      left: 21,
      top: 74,
      position: "absolute"
    }}></RadioGroup></View>;
};

export default Untitled3;