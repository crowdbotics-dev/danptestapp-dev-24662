import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.UspTIimn}>
      <TextInput style={_styles.ANGTvtwg}></TextInput><FlatList style={_styles.hYBBhzvG} renderItem={() => <View style={_styles.oorXgZdK}><Switch style={_styles.mKQNZkUE}></Switch></View>} ItemSeparatorComponent={() => <View style={_styles.rIPvHvaX} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><Switch style={_styles.GUiutjyk} thumbColor="#ee6969"></Switch><ActivityIndicator style={_styles.QOkUmrPl}></ActivityIndicator><CheckBox style={_styles.qBRNvpSE} title="Checkbox Title"></CheckBox></View>;
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
  },
  ANGTvtwg: {
    left: 82,
    top: 52,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  hYBBhzvG: {
    left: 98,
    top: 164,
    position: "absolute",
    width: 100,
    height: 150
  },
  oorXgZdK: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  rIPvHvaX: {
    backgroundColor: "#000000",
    height: 1
  },
  mKQNZkUE: {
    left: -10,
    top: 0,
    position: "absolute",
    width: 50,
    height: 25
  },
  GUiutjyk: {
    left: 93,
    top: 457,
    position: "absolute",
    width: 50,
    height: 25,
    transform: "rotate(90deg)"
  },
  QOkUmrPl: {
    left: 258,
    top: 142,
    position: "absolute",
    width: 50,
    height: 50
  },
  qBRNvpSE: {
    left: 80,
    top: 350,
    position: "absolute",
    width: 183,
    height: 69
  }
});