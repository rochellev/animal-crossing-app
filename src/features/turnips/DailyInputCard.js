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

const TurnipText = ({ text, size, extraStyle }) => {
  return (
    <View style={[{}, extraStyle]}>
      <Text style={[AppStyles.text, { fontSize: size }]}>{text}</Text>
    </View>
  );
};

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
      {/* <View style={styles.cardHeader}>
        <Text style={[AppStyles.text, { fontSize: 25 }]}>{name}</Text>
      </View> */}
      <TurnipText text={name} size={25} extraStyle={styles.extraTextStyle} />
      <View style={styles.cardBody}>
        <View style={styles.cardInput}>
          <TurnipText text="AM" size={18}  />
          <TurnipText text={morningPrice ? morningPrice : "..."} size={22} />
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
          <TurnipText text="PM" size={18} />
          <TurnipText
            text={afternoonPrice ? afternoonPrice : "..."}
            size={22}
          />
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
const cardHeight = Math.floor(cardWidth * 0.36);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: cardWidth,
    height: '100%',
    backgroundColor: Colors.oldLace,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 15
  },
  cardHeader: {
    flex: 1,
    marginBottom: 3
    // backgroundColor: Colors.lavenderGrey
  },
  cardBody: {
    flexDirection: "row",
    flex: 2,
    width: "90%",
    // marginVertical: 5,
    justifyContent: "space-between"
  },
  timeTitle: {
    // fontSize: 18,
    // paddingVertical: 5,
    // alignSelf: "center"
  },

  cardInput: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: Colors.lightGrayBlue,
    paddingBottom: 5
  },
  amStyle: {
    backgroundColor: Colors.lightPurple,
    padding: 2,
    
  }
});

// {/* <Text style={[AppStyles.text, { fontSize: 18 }]}>
//           <Text>AM    </Text>
//           {morningPrice ? (
//             <Text style={{ fontSize: 22, alignSelf: "flex-end" }}>
//               {morningPrice}
//             </Text>
//           ) : (
//             <Text style={{ fontSize: 28 }}>...</Text>
//           )}
//         </Text> */}
