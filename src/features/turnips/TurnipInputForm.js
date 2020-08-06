import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";

import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";
import { ScrollView } from "react-native-gesture-handler";

export const TurnipInputForm = () => {
  const turnips = useSelector(state => state.turnips);

  function populateCards() {
    const days = Object.keys(turnips);
    const cards = [];
    cards.push(<SundayPrice key={"sunday"} price={turnips.sunday} />);
    days.shift();
    for (const day in days) {
      cards.push(
        <PriceInputCard
          key={day}
          day={days[day]}
          morning={turnips[days[day]].morning}
        />
      );
    }
    return cards;
  }

  const inputCardList = populateCards();

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: Colors.blanchedAlmond }}>
        <Text>This is TurnipInputForm</Text>
        {inputCardList}
      </View>
    </ScrollView>
  );
};
