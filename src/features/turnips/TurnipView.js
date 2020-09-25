import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../styles/AppStyles";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import { getBuyerStatus, firstTimeBuyerUpdated } from "./turnipsSlice";

export const TurnipView = () => {
  const [firstTimeBuyer] = useSelector(state => getBuyerStatus(state));

  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(firstTimeBuyer);
  const dispatch = useDispatch();

  const toggleBuyerStatus = () =>
    setIsFirstTimeBuyer(previousState => !previousState);

  const handleToggle = () => {
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
        <Text>First Time buyer?</Text>
        <Text>{firstTimeBuyer}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isFirstTimeBuyer ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleBuyerStatus}
          value={isFirstTimeBuyer}
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
