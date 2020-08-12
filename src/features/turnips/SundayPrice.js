import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "./commonStyles";
import { TurnipSlider } from "./TurnipSlider";

// onValueChange={value => setPrice(value)}

export const SundayPrice = ({ ...props }) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Sunday</Text>
      <Text>{props.price}</Text>
      <TurnipSlider value={props.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.oldLace
  },
  slider: {
    width: 150
  }
});
