import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors, SliderStyle } from "./commonStyles";
import Slider from "@react-native-community/slider";
import { sundayPriceUpdated } from "./turnipsSlice";

export const SundayInputCard = () => {
  const sundayPrice = useSelector(state => state.turnips.sunday);
  const [value, setValue] = useState(sundayPrice);

  const dispatch = useDispatch();
  const handleSlideComplete = value => {
    if (value) {
      dispatch(sundayPriceUpdated({ price: value }));
    }
  };
  return (
    <View style={styles.container}>
      <Text>Sunday</Text>
      <Text>{value}</Text>
      <Slider
        style={SliderStyle}
        value={value}
        minimumValue={25}
        maximumValue={850}
        step={1}
        onValueChange={value => setValue(value)}
        onSlidingComplete={value => handleSlideComplete(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.oldLace,
    paddingVertical: 10
  }
});