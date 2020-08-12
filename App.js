import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "./src/features/turnips/commonStyles";
import { TurnipView } from "./src/features/turnips/TurnipView";
// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import { getStore } from "./src/app/store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TurnipView />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.spaceCadet
  }
});

export default App;
