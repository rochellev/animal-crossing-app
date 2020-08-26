import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { AppStyles, Colors } from "../styles/AppStyles";
import Slider from "@react-native-community/slider";
import {
  getDayData,
  afternoonPriceUpdated,
  morningPriceUpdated
} from "./turnipsSlice";
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

  const handleAfternoonSlideComplete = value => {
    if (value) {
      dispatch(afternoonPriceUpdated({ day, value }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={AppStyles.dayName}>{name}</Text>
      <View style={styles.cards}>
        <View style={styles.cardInput}>
          <Text style={AppStyles.dayName}>
            Morning.......{morningPrice}
          </Text>
          <Slider
            style={AppStyles.slider}
            value={morningPrice}
            minimumValue={1}
            maximumValue={1000}
            step={1}
            onValueChange={value => setMorningPrice(value)}
            onSlidingComplete={value => handleMorningSlideComplete(value)}
          />
        </View>
        <View style={styles.cardInput}>
          <Text style={AppStyles.dayName}>
            Afternoon.....{afternoonPrice}
          </Text>
          <Slider
            style={AppStyles.slider}
            value={afternoonPrice}
            minimumValue={25}
            maximumValue={850}
            step={1}
            onValueChange={value => setAfternoonPrice(value)}
            onSlidingComplete={value => handleAfternoonSlideComplete(value)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.oldLace,
    marginBottom: 10
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardInput: {
    padding: 5
  }
});
