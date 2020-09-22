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
      <View style={[styles.day, AppStyles.shadows]}>
        <Text style={AppStyles.dayName}>{name}</Text>
      </View>

      <View style={styles.inputSection}>
        <View style={[{ marginRight: 5 }, AppStyles.shadows, styles.cardInput]}>
          <Text style={AppStyles.dayName}>
            <Text>AM     </Text>
            <Text>{morningPrice}</Text>
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
        <View style={[AppStyles.shadows, styles.cardInput]}>
          <Text style={AppStyles.dayName}>
            <Text>PM     </Text>
            <Text>{afternoonPrice}</Text>
          </Text>
          <Slider
            style={AppStyles.slider}
            value={afternoonPrice}
            minimumValue={1}
            maximumValue={1000}
            step={1}
            onValueChange={value => setAfternoonPrice(value)}
            onSlidingComplete={value => handleAfternoonSlideComplete(value)}
          />
        </View>
      </View>
    </View>
  );
};

// backgroundColor: Colors.blanchedAlmond,

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
marginHorizontal: 5,
    marginBottom: 15
  },
  day: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.oldLace,
    paddingVertical: 5,
    height: '80%',
    width: '10%',
    paddingHorizontal: 0,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  inputSection: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 5
  },
  cardInput: {
    padding: 8,
    backgroundColor: Colors.oldLace,
    borderRadius: 10
  }
});
