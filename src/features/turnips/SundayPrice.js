import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export const SundayPrice = () => {
  const [price, setPrice] = useState('Bells per turnip')
  return(
      <View style={styles.sunday}>
      <Text>Sunday</Text>
      <TextInput 
        value={price} 
        onChangeText={price => setPrice(price)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  sunday: {
    backgroundColor: 'red'
  }
});