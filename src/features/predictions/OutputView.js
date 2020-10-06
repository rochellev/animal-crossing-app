import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { getSundayData } from "../turnips/turnipsSlice";
import { getOutput, getThisPrediction, calculateIndex } from "./predictionsSlice";
import Predictor from "./Predictor";

export const OutputView = () => {
  // const sunday = useSelector(getSundayData(state))
  const output = useSelector(state => getOutput(state));
  const dispatch = useDispatch();
  const [prediction, setPrediction] = useState(output);
  const [bestDay, setBestDay] = useState("");
  const [bestTime, setBestTime] = useState("");
  // const [weekMax, setWeekMax] = useState(output.weekMax);
  const handlePrediction = () => {
    // console.log(`**********`)
    // console.log(`output:`)
    // console.log(JSON.stringify(output.prices[2], null, 2))
    // console.log(`**********`)
  };

  return (
    <View style={styles.outputContainer}>
      <Text>This is output View</Text>
      {/* <Text>MAx day to sell is {JSON.stringify(p,null, 2)}</Text> */}
<Text>predictions</Text>
{/* <Text>{JSON.stringify(prediction, null, 2)}</Text> */}
      <Button
        title="Predict!"
        type="outline"
        raised
        containerStyle={{ flex: 1, width: 200, alignSelf: "center" }}
        buttonStyle={{ width: "100%" }}
        onPress={handlePrediction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.teaGreen,
    padding: 10
  }
});

// const userInputs = useSelector(state => getInputs(state));

// const [possibilities, setPossibilities] = useState([]);
// const prices = userInputs.sellPrices;
// const first_buy = userInputs.firstBuy;
// const previous_pattern = userInputs.previousPattern;

// const [possibilities, setPossibilities] = useState([]);
// const prices = Object.values(userInputs.sellPrices);
// const first_buy = Object.values(userInputs.firstBuy);
// const previous_pattern = Object.values(userInputs.previousPattern);

// function using PredictionClass -- see calculate output
// const calculateOutput = () => {
//   // console.log(`***************************`);
//   // console.log(`******`);
//   // console.log(`***************************`);
//   // console.log(`calculateOutput arguments:`);
//   // console.log(`prices.length: ${prices.length}`);
//   // console.log(`first_buy: ${first_buy}`);
//   // console.log(`previous_pattern: ${previous_pattern}`);
//   // console.log(`prices: ${JSON.stringify(prices, null, 2)}`);

//   const predictor = new Predictor(prices, first_buy, previous_pattern);

//   const analyzedPossibilities = predictor.analyze_possibilities();
//   console.log(
//     `analyzedPossibilities.length: ${analyzedPossibilities.length}`
//   );
//   console.log(`analyzedPossibilities:`);
//   console.log(JSON.stringify(analyzedPossibilities, null, 2));

//   console.log(`***************************`);
//   console.log(`***************************`);
//   setPossibilities(analyzedPossibilities);
// };
