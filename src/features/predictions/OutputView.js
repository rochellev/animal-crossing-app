import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";

// goal: show predicted min/max 

export const OutputView = () => {

  // function using PredictionClass -- see calculate output
  // const calculateOutput = () => {

  // }
  return(
    <View style={styles.outputContainer}>
      <Text>This is output View</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  outputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.teaGreen,
    padding: 10
  }
})