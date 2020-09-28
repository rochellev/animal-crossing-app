import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet, Picker } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import { RadioButton } from "./RadioButton";
import {
  getBuyerStatus,
  firstTimeBuyerUpdated,
  getPreviousPattern
} from "./turnipsSlice";
// import Picker from "@react-native-community/picker";

export const TurnipView = () => {
  const buyerStatus = useSelector(state => getBuyerStatus(state));
  const previousPattern = useSelector(state => getPreviousPattern(state));
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(buyerStatus);
  const [pattern, setPattern] = useState("idk");
  const dispatch = useDispatch();
  const [hand, setHand] = useState("right");

  const handleToggle = value => {
    dispatch(firstTimeBuyerUpdated({ value }));
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

  const renderedPatternOptions = patternOptions.map(option => (
    <RadioButton key={option.key} text={option.text} />
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
          {/* <Picker 
          default
          selectedValue={pattern}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue) => setPattern({itemValue})}
          >
            <Picker.Item label="Not Sure" value="idk"/>
            <Picker.Item label="Large Spike" value="large-spike"/>
           

          </Picker> */}
          <Picker
            selectedValue={hand}
            onValueChange={value => setHand(value)}
            style={{ width: 160 }}
            mode="dropdown"
          >
            <Picker.Item label="Right Hand" value="right" />
            <Picker.Item label="Left Hand" value="left" />
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
    justifyContent: "center"
  },
  buyerStatusContainer: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row"
  },
  patternsContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5
  }
});

// <View style={styles.inputSection}>
// <InputCardList />
// </View>

{
  /* <View style={styles.patternsContainer}>{renderedPatternOptions}</View> */
}
