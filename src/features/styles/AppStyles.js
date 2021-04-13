import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Dimensions } from "react-native";

// fontFamily: "sans-serif-light"
// Inter_900Black
export const TurnipText = ({ text, size, extraStyle }) => {
  return (
    <View style={[{}, extraStyle]}>
      <Text style={[AppStyles.text, { fontSize: size }]}>{text}</Text>
    </View>
  );
};

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
  lavenderWeb:"#EAE6FD",
  armyGreen: "#2C3D01",
  artichoke: '#949B82',
  appleGreen: '#80BF02',
  maxPurple: '#7A3E7D',
  timeberwolf: '#CED2C6'
};

export const AppStyles = StyleSheet.create({
  slider: {
    width: 110,
    height: 20,
    backgroundColor: Colors.artichoke,
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

export const cardWidth = Dimensions.get("window").width - 50;
export const cardHeight = Math.floor(cardWidth * 0.36);

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
