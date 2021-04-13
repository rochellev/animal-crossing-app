import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


// const data = {
//   labels: [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ],
//   datasets: [
//     {
//       data: [
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100
//       ],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//       strokeWidth: 2 // optional
//     }
//   ],
// };

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#D9D9D9",
  backgroundGradientTo: "#FFF",
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16, paddingVertical: 5 },
  propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" }
};

export const PredictionChart = ({data}) => {
  return (
    <LineChart
      data={data}
      width={Dimensions.get("window").width - 15}
      height={300}
      chartConfig={chartConfig}
      style={{ marginVertical: 15, borderRadius: 15, paddingTop: 15 }}
      verticalLabelRotation={25}
      bezier
    />
  );
};

// chartConfig={{
//   backgroundColor: "#e26a00",
//   backgroundGradientFrom: "#D9D9D9",
//   backgroundGradientTo: "#FFF",
//   decimalPlaces: 0, // optional, defaults to 2dp
//   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   style: { borderRadius: 16 },
//   propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" }
// }}

// data={{ labels: labels, datasets: [{ data: data }] }}
