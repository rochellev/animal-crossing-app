import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { getInputs } from "../turnips/turnipsSlice";
import { calculatePrediction } from "./predictionsSlice";
import Predictor from "./PredictionsClass";
// goal: show predicted min/max

export const OutputView = () => {
  //  probably need to to object.values i think
  const userInputs = useSelector(state => getInputs(state));
  // const predictions = useSelector(state =>
  //   calculatePrediction(
  //     state,
  //     Object.values(userInputs.sellPrices),
  //     userInputs.firstBuy,
  //     userInputs.previousPattern
  //   )
  // );

  // const [sellPrices, setSellPrices] = useState(userInputs.sellPrices)
  // const [first]

  const [possibilities, setPossibilities] = useState([]);
  const prices = userInputs.sellPrices;
  const first_buy = userInputs.firstBuy;
  const previous_pattern = userInputs.previousPattern;

  // function using PredictionClass -- see calculate output
  const calculateOutput = () => {
    console.log(`***************************`);
    console.log(`******`);
    console.log(`***************************`);
    console.log(`calculateOutput arguments:`);
    console.log(`prices.length: ${prices.length}`);
    console.log(`first_buy: ${first_buy}`);
    console.log(`previous_pattern: ${previous_pattern}`);
    console.log(`prices: ${JSON.stringify(prices, null, 2)}`);

    const predictor = new Predictor(prices, first_buy, previous_pattern);

    const analyzedPossibilities = predictor.analyze_possibilities();
    console.log(
      `analyzedPossibilities.length: ${analyzedPossibilities.length}`
    );
    console.log(`analyzedPossibilities:`);
    console.log(JSON.stringify(analyzedPossibilities, null, 2));
    
    console.log(`***************************`);
    console.log(`***************************`);
    setPossibilities(analyzedPossibilities);
  };

  return (
    <View style={styles.outputContainer}>
      <Text>This is output View</Text>
      <Text>{JSON.stringify(possibilities[0], null, 2)}</Text>
      {/* <Text>{JSON.stringify(sellPrices[0])}</Text> */}
      <Button
        title="Predict!"
        type="outline"
        raised
        containerStyle={{ flex: 1, width: 200, alignSelf: "center" }}
        buttonStyle={{ width: "100%" }}
        onPress={calculateOutput}
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
