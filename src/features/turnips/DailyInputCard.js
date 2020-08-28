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
        <View style={ [{marginRight: 6},AppStyles.shadows,styles.cardInput]}>
          <View>
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
          
        </View>
        <View style={ [AppStyles.shadows,styles.cardInput]}>
          <Text style={AppStyles.dayName}>
            Afternoon.....{afternoonPrice}
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
    justifyContent: "space-between",
    flexDirection: 'column',
    
    padding: 5,
    marginBottom: 15
  },
  inputSection: {
    flexDirection: "row",
    flex: 2,
    
    alignItems: 'center',
    marginRight: 5,
    
  },
  cardInput: {
    padding: 15,
    backgroundColor: Colors.oldLace,
    borderRadius: 10,
  },
  day: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.oldLace,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
    
  },
  
});
