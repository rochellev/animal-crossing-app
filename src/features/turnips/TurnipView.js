import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../styles/AppStyles";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import {
  getBuyerStatus,
  firstTimeBuyerUpdated,
  getPreviousPattern
} from "./turnipsSlice";

export const TurnipView = () => {
  const buyerStatus = useSelector(state => getBuyerStatus(state));
  const previousPattern = useSelector(state => getPreviousPattern(state));
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(buyerStatus);
  const [pattern, setPattern] = useState(previousPattern);
  const dispatch = useDispatch();

  const handleToggle = value => {
    dispatch(firstTimeBuyerUpdated({ value }));
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.turnip}>
        <Image source={require("../../../images/Turnips_Icon.png")} />
      </View>
      <View>
        <View style={{ backgroundColor: "white" }}>
          <Text>redux previousPattern: {previousPattern}</Text>
        </View>
        <Text>First Time buyer? </Text>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          thumbColor={firstTimeBuyer ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onChange={() => setFirstTimeBuyer(previous => !previous)}
          onValueChange={value => handleToggle(value)}
          value={firstTimeBuyer}
        />
      </View>
      <View style={styles.inputSection}>
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
  }
});

// <View style={styles.inputSection}>
// <InputCardList />
// </View>
