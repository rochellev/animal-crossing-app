import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SundayPrice } from './SundayPrice'
import { Colors } from './commonStyles'

export const TurnipView = () => {
  return(
  
      <View style={styles.container}>
      <Image source={require('../../../images/Turnips_Icon.png')}/>
      <Text>Hi</Text>
      <Text>This is Turnip view</Text>
      <SundayPrice />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teaGreen,
    width: '100%',
    alignItems: 'center',
 
  }

});