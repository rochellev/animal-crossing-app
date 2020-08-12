import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { TurnipSlider } from "./TurnipSlider";

export const PriceInputCard = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text>{props.day}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text>AM.....{props.morning}</Text>
          <TurnipSlider value={props.morning} />
        </View>
        <View style={styles.cardInput}>
          <Text>PM.....{props.afternoon}</Text>
          <TurnipSlider value={props.morning} />
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
