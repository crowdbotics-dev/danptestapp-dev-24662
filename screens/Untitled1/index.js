import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#d4658b",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <RadioGroup radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column" style={{
      left: 55,
      top: 49,
      position: "absolute"
    }}></RadioGroup></View>;
};

export default Untitled1;