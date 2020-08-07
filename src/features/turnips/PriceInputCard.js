import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import Slider from "@react-native-community/slider";

export const PriceInputCard = ({ day, morning, afternoon }) => {
  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text>AM.....{morning}</Text>
          <Slider
            style={styles.slider}
            value={morning}
            minimumValue={0}
            maximumValue={850}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.cardInput}>
          <Text>PM.....{afternoon}</Text>
          <Slider
            style={styles.slider}
            value={afternoon}
            minimumValue={0}
            maximumValue={850}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
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
