import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './src/features/turnips/commonStyles';
import { TurnipView }  from './src/features/turnips/TurnipView';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
     
      <TurnipView />
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.spaceCadet,
    alignItems: 'center',
    justifyContent: 'center',
   

  },
});

export default App;