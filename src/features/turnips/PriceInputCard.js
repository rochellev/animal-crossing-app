import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import Slider from "@react-native-community/slider";

export const PriceInputCard = ({ day }) => {
  const [name, morning, afternoon] = useSelector(state =>
    Object.values(state.turnips[day])
  );
  const [morningPrice, setMorningPrice] = useState(morning);
  const [afternoonPrice, setAfternoonPrice] = useState(afternoon);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text>Morning.......{morningPrice}</Text>
          <Slider
            style={styles.slider}
            value={morningPrice}
            minimumValue={1}
            maximumValue={850}
            step={1}
            onValueChange={value => setMorningPrice(value)}
          />
        </View>
        <View style={styles.cardInput}>
          <Text>Afternoon.....{afternoonPrice}</Text>
          <Slider
            style={styles.slider}
            value={afternoonPrice}
            minimumValue={1}
            maximumValue={850}
            step={1}
            onValueChange={value => setAfternoonPrice(value)}
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
