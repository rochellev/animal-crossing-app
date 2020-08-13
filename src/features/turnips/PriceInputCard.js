import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
// import { TurnipSlider } from "./TurnipSlider";

// <View style={styles.cardInput}>
//         <Text>AM.....{morningPrice}</Text>
//         <TurnipSlider value={props.morning} />
//       </View>
//       <View style={styles.cardInput}>
//         <Text>PM.....{props.afternoon}</Text>
//         <TurnipSlider value={props.morning} />
//       </View>

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
        <Text>Morning.......{morningPrice}</Text>
        <Text>Afternoon.....{afternoonPrice}</Text>
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
