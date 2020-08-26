import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../styles/AppStyles";

import { SundayInputCard } from "./SundayInputCard";
import { DailyInputCard } from "./DailyInputCard";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export const InputCardList = () => {
  const sellingDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const renderedDailyInputCards = sellingDays.map((day) => <DailyInputCard key={day} day={day} />)
  
  return (
    <View style={styles.form}>
      <View style={{ justifyContent: 'center'}}>
      <SundayInputCard key={"sunday"} />
      {renderedDailyInputCards}
      </View>
      <Button
        title="Predict Best Day to Sell!"
        type="outline"
        raised
        containerStyle={{ width: 200, alignSelf: "center" }}
        buttonStyle={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'column',
 
    backgroundColor: Colors.blanchedAlmond
  }
});


// <View style={styles.form}>
//       {renderedComponents}
//       <Button
//         title="Predict Best Day to Sell!"
//         type="outline"
//         raised
//         containerStyle={{ width: 200, alignSelf: "center" }}
//         buttonStyle={{ width: "100%" }}
//       />
//     </View>