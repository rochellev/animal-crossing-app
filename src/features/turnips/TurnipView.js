import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "./commonStyles";
import { TurnipInputForm } from "./TurnipInputForm";

export const TurnipView = () => {
  const turnips = useSelector(state => state.turnips);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../images/Turnips_Icon.png")} />
      </View>
      <TurnipInputForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.teaGreen
  },
  header: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
    backgroundColor: Colors.platinum
  },
  inputSection: {
    flex: 1
  }
});
