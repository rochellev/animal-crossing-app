import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors, AppStyles } from "../styles/AppStyles";
import Slider from "@react-native-community/slider";
import { sundayPriceUpdated, getSundayData } from "./turnipsSlice";

export const SundayInputCard = () => {
  const sundayPrice = useSelector(state => getSundayData(state));
  const [value, setValue] = useState(sundayPrice);
  const dispatch = useDispatch();

  const handleSlideComplete = value => {
    if (value) {
      dispatch(sundayPriceUpdated({ value }));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={AppStyles.dayName}>Sunday</Text>
      <View style={styles.priceSlider}>
      <Text style={AppStyles.dayName}>{value}</Text>
      <Slider
        style={AppStyles.slider}
        value={value}
        minimumValue={1}
        maximumValue={1000}
        step={1}
        onValueChange={value => setValue(value)}
        onSlidingComplete={value => handleSlideComplete(value)}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.oldLace,
    paddingVertical: 10,
    width: 300
  },
  priceSlider:{
    alignSelf: 'flex-end'
  }
});


// <View style={styles.container}>
// <Text style={CommonStyles.textStyle}>Sunday</Text>
// <Text style={CommonStyles.textStyle}>{value}</Text>
// <Slider
//   style={CommonStyles.sliderStyle}
//   value={value}
//   minimumValue={25}
//   maximumValue={850}
//   step={100}
//   onValueChange={value => setValue(value)}
//   onSlidingComplete={value => handleSlideComplete(value)}
// />
// </View>