import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import Slider from "@react-native-community/slider";

// pass in props for slider value and setting the value

export const TurnipSlider = ({ ...props }) => {
  // const [sliderValue, setSliderValue] = useState(value);
  return (
    <View>
      <Slider
        style={styles.slider}
        value={props.value}
        minimumValue={1}
        maximumValue={850}
        step={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 150
  }
});
