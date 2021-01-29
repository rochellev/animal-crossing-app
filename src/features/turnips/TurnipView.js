import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Colors, AppStyles } from "../styles/AppStyles";
import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import {
  getBuyerStatus,
  firstTimeBuyerUpdated,
  getPreviousPattern,
  previousPatternUpdated
} from "./turnipsSlice";
import { Picker } from "@react-native-community/picker";
import { OutputView } from "../predictions/OutputView";
// import { PredictionChart } from "../predictions/PredictionChart";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

// Picker itemStyle does not work for android, but can do it here
// https://stackoverflow.com/questions/38921492/how-to-style-the-standard-react-native-android-picker/39141949#39141949

// https://medium.com/@ayushi.nig/autoscroll-in-react-native-451601ac3ca8

// TODO: the lines, the spacing is not right, touching the lower cards

const random = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100
];

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

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

export const TurnipView = () => {
  const buyerStatus = useSelector(state => getBuyerStatus(state));
  const previousPattern = useSelector(state => getPreviousPattern(state));
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(buyerStatus);
  const [pattern, setPattern] = useState(previousPattern);
  const [showGraph, setShowGraph] = useState(false);

  const [data, setData] = useState(random);
  const scrollViewRef = useRef(null);
  const graphRef = useRef(null);
  const dispatch = useDispatch();

  const handleBuyerStatus = value => {
    setFirstTimeBuyer(value);
    dispatch(firstTimeBuyerUpdated({ value }));
  };

  const handlePatternOptions = value => {
    setPattern(value);
    dispatch(previousPatternUpdated({ value }));
  };
  const handlePrediction = value => {
    setData(random);
    setShowGraph(true);
    // graphRef.current.focus();
  };
  const patternOptions = [
    {
      key: "idk",
      text: "Not sure"
    },
    {
      key: "fluctuating",
      text: "Fluctuating"
    },
    {
      key: "small-spike",
      text: "Small Spike"
    },
    {
      key: "large-spike",
      text: "Large Spike"
    },
    {
      key: "decreasing",
      text: "Decreasing"
    }
  ];
  const sellingDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const renderedDailyInputCards = sellingDays.map(day => (
    <DailyInputCard key={day} day={day} />
  ));

  const pickerItems = patternOptions.map(option => (
    <Picker.Item key={option.key} label={option.text} value={option.key} />
  ));

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
      <View style={styles.turnip}>
        <Image source={require("../../../images/Turnips_Icon.png")} />
      </View>

      <View style={styles.inputSection}>
        <View style={styles.buyerStatusContainer}>
          <Text style={AppStyles.dayName}>First Time buyer? </Text>

          <View style={[styles.pickerContainer, AppStyles.shadows]}>
            <Picker
              default
              selectedValue={firstTimeBuyer}
              style={styles.pickerBox}
              itemStyle={styles.pickerItem}
              onValueChange={itemValue => handleBuyerStatus(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Yes!" value={true} />
              <Picker.Item label="No" value={false} />
            </Picker>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.patternText}>
            <Text style={[AppStyles.text, { fontSize: 18 }]}>
              Previous Pattern
            </Text>
          </View>
          <View style={[styles.pickerContainer, AppStyles.shadows]}>
            <Picker
              default
              selectedValue={pattern}
              style={styles.pickerBox}
              itemStyle={styles.pickerItem}
              onValueChange={itemValue => handlePatternOptions(itemValue)}
              mode="dropdown"
            >
              {pickerItems}
            </Picker>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <SundayInputCard key={"sunday"} />
        </View>

        <View style={{ flex: 1 }}>{renderedDailyInputCards}</View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Predict!"
          type="outline"
          raised
          containerStyle={{ flex: 1, width: 200, alignSelf: "center" }}
          buttonStyle={{ width: "100%" }}
          onPress={handlePrediction}
        />
        <View style={{ flex: 1 }}>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: data,
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                  strokeWidth: 2
                }
              ]
            }}
            width={Dimensions.get("window").width - 15}
            height={300}
            chartConfig={chartConfig}
            style={{ marginVertical: 15, borderRadius: 15, paddingTop: 15 }}
            verticalLabelRotation={25}
            bezier
          />
        </View>
      </View>
    </ScrollView>
  );
};

// data={{ labels: labels, datasets: [{ data: data }] }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.teaGreen,
    paddingBottom: 10
  },
  turnip: {
    alignSelf: "center",
    flex: 1
  },
  inputSection: {
    flex: 1,
    alignItems: "center"
  },
  buyerStatusContainer: {
    flex: 1,
    flexDirection: "row",
    width: "70%",
    marginBottom: 5
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.oldLace,
    height: 50,
    width: 130,
    borderRadius: 10
  },
  pickerBox: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  pickerItem: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    width: "75%"
  },
  patternText: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});
