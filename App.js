import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text } from 'react-native';

import { TurnipView }  from './src/features/turnips/TurnipView';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View >
      <TurnipView />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
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

export default App;