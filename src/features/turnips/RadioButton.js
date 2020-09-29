import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors, AppStyles } from "../styles/AppStyles";
export const RadioButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View >
      <Text style={AppStyles.dayName}>{props.text}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.lavenderGrey,
   
    width: 100,
    marginHorizontal: 5,
  }
})
