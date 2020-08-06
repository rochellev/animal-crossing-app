import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";

import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";

export const TurnipInputForm = () => {
  const turnips = useSelector(state => state.turnips);

  return (
    <View>
      <Text>This is TurnipInputForm</Text>
      <SundayPrice price={turnips.sunday} />
    </View>
  );
};
