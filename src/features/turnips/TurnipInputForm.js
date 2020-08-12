import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";

import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export const TurnipInputForm = () => {
  const turnips = useSelector(state => state.turnips);

  function populateCards() {
    const days = Object.keys(turnips);
    const cards = [];
    cards.push(<SundayPrice key={"sunday"} />);
    days.shift();
    for (const day of days) {
      cards.push(
        <PriceInputCard
          key={day}
          day={turnips[day].day}
          morning={turnips[day].morning}
          afternoon={turnips[day].afternoon}
        />
      );
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
