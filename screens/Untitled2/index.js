import { FlatList } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <CheckBox title="Checkbox Title" style={{
      left: 6,
      top: 0,
      position: "absolute"
    }}></CheckBox><FlatList renderItem={() => <View style={{
      width: 92,
      minHeight: 60,
      backgroundColor: "#FFFFFF",
      left: 0,
      top: 0
    }}></View>} ItemSeparatorComponent={() => <View style={{
      backgroundColor: '#000000',
      height: 1
    }} />} data={[1, 2, 3]} keyExtractor={item => item.toString()} style={{
      left: 33,
      top: 175,
      position: "absolute",
      width: 100,
      height: 150
    }}></FlatList><CheckBox title="hola" style={{
      left: 2,
      top: 71,
      position: "absolute"
    }} size={19} checked={true}></CheckBox></View>;
};

export default Untitled2;