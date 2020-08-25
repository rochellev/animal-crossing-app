import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";

// fontFamily: "sans-serif-light"

export const Colors = {
  spaceCadet: "#2B2D42",
  teaGreen: "#D4E3B5",
  cultured: "#F7F7F9",
  platinum: "#E8E8ED",
  oldLace: "#FAF6E7",
  blanchedAlmond: "#f8e7c9",
  lavenderGrey: "#c6c6d2"
};

export const CommonStyles = StyleSheet.create({
  sliderStyle: {
    width: 150,
    height: 30,
    backgroundColor: Colors.lavenderGrey
  },
  textStyle: {
    fontSize: 18,
    color: Colors.spaceCadet,
    fontFamily: "Montserrat_400Regular"
  }
});

export const TurnipText = ({ text }) => {
  return (
    <View>
      <Text style={CommonStyles.textStyle}>{text}</Text>
    </View>
  );
};

// <View>
// <Text style={CommonStyles.textStyle}>{text}</Text>
// </View>
