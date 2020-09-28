import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/AppStyles";
export const RadioButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View>
      <Text>{props.text}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    
  
    backgroundColor: Colors.lavenderGrey
  }
})
