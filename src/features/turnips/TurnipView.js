import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../styles/AppStyles";
import { InputCardList } from "./InputCardList";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";

export const TurnipView = () => {
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
      <Image
        source={require("../../../images/Turnips_Icon.png")}
      />
      </View>
      


    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: Colors.teaGreen
  },
  turnip: {
    alignSelf: "center"
  },
  header: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
    backgroundColor: Colors.platinum
  },
  inputSection: {
    flex: 1,
    justifyContent: 'center',
    
    
  }
});

// <View style={styles.inputSection}>
// <InputCardList />
// </View>