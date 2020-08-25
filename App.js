import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "./src/features/styles/commonStyles";
import { TurnipView } from "./src/features/turnips/TurnipView";
// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import { getStore } from "./src/app/store";

import { AppLoading } from "expo";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={getStore()}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <TurnipView />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
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
