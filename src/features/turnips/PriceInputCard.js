import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from './commonStyles';
import Slider from '@react-native-community/slider';

export const PriceInputCard = () => {
  
  // const InputPriceSlider = {

  // }
  
  return(
    <View style={styles.container}>
      <Text>Monday</Text>
        <Slider
    style={{width: 200, height: 40, backgroundColor: Colors.lavenderGrey}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
 
});