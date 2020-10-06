import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const labels = [
  "Label 1",
  "Label 2",
  "Label 3",
  "Label 4",
  "Label 5",
  "Label 6"
];
const data = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100
];

export const PredictionChart = () => {
  return (
    <LineChart
      data={{ labels: labels, datasets: [{ data: data }] }}
      width={Dimensions.get("window").width - 50}
      height={220}
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#D9D9D9",
        backgroundGradientTo: "#FFF",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" }
      }}
      bezier
      style={{ marginVertical: 5, borderRadius: 15 }}
    />
  );
};
