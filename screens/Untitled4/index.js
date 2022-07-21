import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled4 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={4} minimumValue={0} style={{
      left: 17,
      top: 17,
      position: "absolute",
      width: 150,
      height: 50
    }} value={2} maximumTrackTintColor="#e84343" minimumTrackTintColor="#41e565"></Slider><RadioGroup radioButtons={[{
      id: "0",
      value: "0",
      label: "Option 1"
    }, {
      id: "1",
      value: "1",
      label: "Option 2"
    }, {
      id: "2",
      value: "2",
      label: "Option 3"
    }]} layout="column" style={{
      left: 6,
      top: 95,
      position: "absolute",
      width: 169,
      height: 111
    }}></RadioGroup></View>;
};

export default Untitled4;