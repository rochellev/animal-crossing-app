import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";

import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export const InputCardList = () => {
  const turnips = useSelector(state => state.turnips);

  function populateCards() {
    const days = Object.keys(turnips);
    const cards = [];
    cards.push(<SundayInputCard key={"sunday"} />);
    days.shift();
    for (const day of days) {
      cards.push(<DailyInputCard key={day} day={day} />);
    }
    return cards;
  }

  const renderedComponents = populateCards();

  return (
    <View style={styles.form}>
      {renderedComponents}
      <Button
        title="Predict Best Day to Sell!"
        type="outline"
        raised
        containerStyle={{ width: 200, alignSelf: "center" }}
        buttonStyle={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: Colors.blanchedAlmond
  }
});
