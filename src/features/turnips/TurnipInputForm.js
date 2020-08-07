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
    cards.push(<SundayPrice key={"sunday"} price={turnips.sunday} />);
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

  const inputCardList = populateCards();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.blanchedAlmond }}>
      {inputCardList}
      <Button
        title="Predict Stonks!"
        type="solid"
        raised={true}
        buttonStyle={{ width: 300 }}
      />
    </View>
  );
};
