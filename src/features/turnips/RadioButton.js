import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const RadioButton = props => {
  return(
    <TouchableOpacity>
      {props.checked ? (<View />) : (<View></View>)}
    </TouchableOpacity>
  )
}