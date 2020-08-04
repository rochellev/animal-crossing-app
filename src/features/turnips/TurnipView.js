import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";

export const TurnipView = () => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Image  source={require("../../../images/Turnips_Icon.png")} />
        <Text >Turnip Stonk</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header  />
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
  },
  inputSection: {
    flex: 2
  }
});
