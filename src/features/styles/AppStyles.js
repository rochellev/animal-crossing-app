import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";

// fontFamily: "sans-serif-light"
// Inter_900Black

export const Colors = {
  spaceCadet: "#2B2D42",
  teaGreen: "#D4E3B5",
  cultured: "#F7F7F9",
  platinum: "#E8E8ED",
  oldLace: "#FAF6E7",
  blanchedAlmond: "#f8e7c9",
  lavenderGrey: "#c6c6d2",
  lightGrayBlue: "#e6eefd",
  lightBlue: "#E6FAFD",
  lightPurple:"#EAE6FD"
};

export const AppStyles = StyleSheet.create({
  slider: {
    width: 110,
    height: 20,
    backgroundColor: Colors.lavenderGrey,
    borderRadius: 8,
  },
  dayName: {
    fontSize: 18,
    padding: 0,
    alignSelf: 'center',
    color: Colors.spaceCadet,
    fontFamily: "Montserrat_400Regular"
  },
  shadows: {
    shadowColor: Colors.blanchedAlmond,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text: {
    color: Colors.spaceCadet,
    fontFamily: "Montserrat_400Regular"
  }
});

// export const TurnipText = ({ text }) => {
//   return (
//     <View>
//       <Text style={AppStyles.textStyle}>{text}</Text>
//     </View>
//   );
// };

// <View>
// <Text style={CommonStyles.textStyle}>{text}</Text>
// </View>
