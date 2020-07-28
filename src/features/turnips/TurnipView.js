import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SundayPrice } from './SundayPrice'

export const TurnipView = () => {
  return(
  
      <View style={styles.container}>
      <Text>Hi</Text>
      <Text>This is Turnip view</Text>
      <SundayPrice />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  }

});