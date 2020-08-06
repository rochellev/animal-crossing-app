import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import Slider from "@react-native-community/slider";

// onValueChange={value => setPrice(value)}

export const SundayPrice = ({ price }) => {
  return (
    <View style={styles.container}>
      <Text>Sunday</Text>
      <Text>{price}</Text>
      <Slider
        style={styles.slider}
        value={price}
        minimumValue={1}
        maximumValue={400}
        step={1}
      />
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
