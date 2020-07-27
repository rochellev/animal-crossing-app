import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Turnip Stonk!!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
