import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { TurnipSlider } from "./TurnipSlider";

export const PriceInputCard = ({ day, morning, afternoon }) => {
  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text>AM.....{morning}</Text>
          <TurnipSlider value={morning} />
        </View>
        <View style={styles.cardInput}>
          <Text>PM.....{afternoon}</Text>
          <TurnipSlider value={morning} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardInput: {
    padding: 5
  },
  slider: {
    width: 150,
    height: 30,
    backgroundColor: Colors.lavenderGrey
  }
});
