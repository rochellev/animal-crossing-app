import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { SundayPrice } from "./SundayPrice";
import { PriceInputCard } from "./PriceInputCard";

export const TurnipView = () => {
  const Header = () => {
    return (
      <View>
        <Image source={require("../../../images/Turnips_Icon.png")} />
        <Text>Hi</Text>
        <Text>This is Turnip view</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
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
    alignItems: "center"
  },
  header: {
    flex: 1
  },
  inputSection: {
    flex: 2
  }
});
