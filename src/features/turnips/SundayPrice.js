import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export const SundayPrice = () => {
  const [price, setPrice] = useState('Bells per turnip')
  return(
      <View style={styles.container}>
      <Text>Sunday</Text>
      <TextInput
        style={styles.sunday} 
        value={price} 
        onChangeText={price => setPrice(price)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sunday: {
    backgroundColor: 'red'
  }
});