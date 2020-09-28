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
      <View style={[AppStyles.shadows, styles.day]}>
        <Text
          style={{
            fontFamily: "Montserrat_400Regular",
            fontSize: 25,
            paddingBottom: 3
          }}
        >
          Sunday
        </Text>
        <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 15 }}>
          Selling Price {sundayPrice.toString()}
        </Text>
      </View>
      <View style={[AppStyles.shadows, styles.priceSlider]}>
        <Text style={[{ alignSelf: "center" }, AppStyles.dayName]}>
          {value}
        </Text>
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
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 5
  },
  priceSlider: {
    flex: 1,
    backgroundColor: Colors.oldLace,
    alignItems: "center",
    marginRight: 12,
    borderRadius: 10
  },
  day: {
    flex: 1,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.oldLace,

    paddingBottom: 5,
    borderRadius: 10
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
