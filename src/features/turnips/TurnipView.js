import React from "react";
import { useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";

export const TurnipView = () => {
  const turnips = useSelector(state => state.turnips)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../images/Turnips_Icon.png")} />
        <Text>Turnip Stonk</Text>
        <Text>The Sunday init price is {turnips.sunday}</Text>
      </View>
      <View style={styles.inputSection}>
        <SundayPrice />
        <PriceInputCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.teaGreen,
    justifyContent: "flex-start"
  },
  header: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    backgroundColor: Colors.platinum
  },
  inputSection: {
    flex: 4
  }
});
