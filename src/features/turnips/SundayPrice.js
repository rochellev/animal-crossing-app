import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from './commonStyles';
import Slider from '@react-native-community/slider';

export const SundayPrice = () => {
  const [price, setPrice] = useState('0')
  return(
      <View style={styles.container}>
      <Text>Sunday</Text><Text>{price}</Text>
      <Slider 
        minimumValue={0}
        maximumValue={400}
        step={1}
        style={styles.slider}
        onValueChange={value => setPrice(value)}
      
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sunday: {
    backgroundColor: 'red'
  },
  slider: {
    width: 250,
  }
});