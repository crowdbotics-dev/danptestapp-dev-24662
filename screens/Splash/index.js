import React from "react";
import { View, ImageBackground } from "react-native";

const Splash = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://crowdbotics-slack-dev.s3.amazonaws.com/media/components/screens/react-native-splash_EndMTfp.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center"
    }}>
        </ImageBackground>
      </View>;
};

export default Splash;