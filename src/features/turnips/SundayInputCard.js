import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors, AppStyles, TurnipText, cardWidth } from "../styles/AppStyles";
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
      <TurnipText text="Sunday" size={25} />
      <TurnipText text="Daisy Mae's Price" size={15} />
      <TurnipText text={value ? value : "..."} size={22} />
      <Slider
        style={AppStyles.slider}
        value={value}
        minimumValue={1}
        maximumValue={300}
        minimumTrackTintColor={Colors.maxPurple}
        maximumTrackTintColor={Colors.timeberwolf}
        thumbTintColor={Colors.armyGreen}
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
    width: cardWidth,
    height: "100%",
    backgroundColor: Colors.oldLace,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 15,
    paddingBottom: 5
  },
  priceSlider: {
    flex: 1,
    flexDirection: "column"
  },
  day: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.oldLace
  }
});
