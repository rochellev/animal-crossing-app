import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import {
  getBuyerStatus,
  firstTimeBuyerUpdated,
  getPreviousPattern,
  previousPatternUpdated
} from "./turnipsSlice";
import { Picker } from "@react-native-community/picker";

// Picker itemStyle does not work for android, but can do it here
// https://stackoverflow.com/questions/38921492/how-to-style-the-standard-react-native-android-picker/39141949#39141949

export const TurnipView = () => {
  const buyerStatus = useSelector(state => getBuyerStatus(state));
  const previousPattern = useSelector(state => getPreviousPattern(state));
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(buyerStatus);
  const [pattern, setPattern] = useState(previousPattern);
  const dispatch = useDispatch();

  const handleToggle = value => {
    dispatch(firstTimeBuyerUpdated({ value }));
  };

  const handlePatternOptions = value => {
    setPattern(value);
    dispatch(previousPatternUpdated({ value }));
  };
  const patternOptions = [
    {
      key: "idk",
      text: "Not sure"
    },
    {
      key: "fluctuating",
      text: "Fluctuating"
    },
    {
      key: "small-spike",
      text: "Small Spike"
    },
    {
      key: "large-spike",
      text: "Large Spike"
    },
    {
      key: "decreasing",
      text: "Decreasing"
    }
  ];
  const sellingDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const renderedDailyInputCards = sellingDays.map(day => (
    <DailyInputCard key={day} day={day} />
  ));

  const pickerItems = patternOptions.map(option => (
    <Picker.Item key={option.key} label={option.text} value={option.key} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.turnip}>
        <Image source={require("../../../images/Turnips_Icon.png")} />
      </View>
      <View style={{ alignSelf: "center", backgroundColor: "white" }}>
        <Text style={AppStyles.dayName}>
          redux previousPattern: {previousPattern}
        </Text>
      </View>
      <View style={styles.inputSection}>
        <View style={styles.buyerStatusContainer}>
          <Text style={AppStyles.dayName}>First Time buyer? </Text>
          <Switch
            trackColor={{ false: "red", true: "green" }}
            thumbColor={firstTimeBuyer ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onChange={() => setFirstTimeBuyer(previous => !previous)}
            onValueChange={value => handleToggle(value)}
            value={firstTimeBuyer}
            style={{ alignSelf: "center" }}
          />
        </View>
        <View style={styles.patternsContainer}>
          <Picker
            default
            selectedValue={pattern}
            style={styles.pickerBox}
            itemStyle={styles.pickerItem}
            onValueChange={itemValue => handlePatternOptions(itemValue)}
            mode="dropdown"
          >
            {pickerItems}
          </Picker>
        </View>

        <View style={{ flex: 1 }}>
          <SundayInputCard key={"sunday"} />
        </View>

        <View style={{ flex: 1 }}>{renderedDailyInputCards}</View>
      </View>
      <Button
        title="Predict Best Day to Sell!"
        type="outline"
        raised
        containerStyle={{ flex: 1, width: 200, alignSelf: "center" }}
        buttonStyle={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.teaGreen,
    paddingBottom: 10
  },
  turnip: {
    alignSelf: "center",
    flex: 1
  },
  inputSection: {
    flex: 1,
    alignItems: "center"
  },
  buyerStatusContainer: {
    flex: 1,
    flexDirection: "row"
  },
  patternsContainer: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.platinum,
    height: 50,
    width: 160,
    borderRadius: 10
  },
  pickerBox: {
    height: "100%",
    width: "100%"
  },
  pickerItem: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18
  }
});
