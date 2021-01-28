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
import { Dimensions } from "react-native";

// const TurnipText = () =>{
//   return(
//     <Text></Text>
//   )
// }
const AMPMText =({ampm}) => {
  return(
    <Text style={[AppStyles.text, { fontSize: 18 }]}>{ampm}</Text>
  )
}

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
    <View style={[styles.container, AppStyles.shadows]}>
      <View style={styles.cardHeader}>
        <Text style={[AppStyles.text, { fontSize: 25 }]}>{name}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={[styles.cardInput]}>
          <Text style={[AppStyles.text, { fontSize: 18 }]}>
            <Text>AM    </Text>
            {morningPrice ? (
              <Text style={{ fontSize: 22, alignSelf: "flex-end" }}>
                {morningPrice}
              </Text>
            ) : (
              <Text style={{ fontSize: 28 }}>...</Text>
            )}
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
        <View style={[styles.cardInput]}>
          <Text style={[AppStyles.text, { fontSize: 18 }]}>
            <Text>PM </Text>
            {afternoonPrice ? <Text>{afternoonPrice}</Text> : <Text>...</Text>}
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
const cardWidth = Dimensions.get("window").width - 50;
const cardHeight = Math.floor(cardWidth * 0.33);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: cardWidth,
    height: cardHeight,
    backgroundColor: Colors.oldLace,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 15
  },
  cardHeader: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: Colors.lavenderGrey
  },
  cardBody: {
    flexDirection: "row",
    flex: 2,
    width: "90%",
    // marginVertical: 5,
    justifyContent: "space-evenly"
  },
  timeTitle: {
    // fontSize: 18,
    // paddingVertical: 5,
    // alignSelf: "center"
  },

  cardInput: {
    // padding: 8,
    // marginHorizontal: 5
    flexDirection: "column",
    height: "100%",
    backgroundColor: Colors.lavenderGrey
  }
});
