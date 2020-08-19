import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors, SliderStyle } from "./commonStyles";
import Slider from "@react-native-community/slider";
import { morningPriceUpdated, getDayData } from "./turnipsSlice";
// const [name, morning, afternoon] = useSelector(state =>
//   Object.values(state.turnips.data[day])
// );

export const DailyInputCard = ({ day }) => {
  const [name, morning, afternoon] = useSelector(state =>
    getDayData(state, day)
  );
  const [morningPrice, setMorningPrice] = useState(morning);
  const [afternoonPrice, setAfternoonPrice] = useState(afternoon);
  const dispatch = useDispatch();
  const handleMorningSlideComplete = value => {
    if (value) {
      dispatch(morningPriceUpdated({ day, value }));
    }
  };
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text>Morning.......{morningPrice}</Text>
          <Slider
            style={SliderStyle}
            value={morningPrice}
            minimumValue={25}
            maximumValue={850}
            step={1}
            onValueChange={value => setMorningPrice(value)}
            onSlidingComplete={value => handleMorningSlideComplete(value)}
          />
        </View>
        <View style={styles.cardInput}>
          <Text>Afternoon.....{afternoonPrice}</Text>
          <Slider
            style={SliderStyle}
            value={afternoonPrice}
            minimumValue={25}
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
  }
});
