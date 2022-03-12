// import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet } from "react-native";
import PlayersNavigator from "../src/navigation/PlayersNavigator";

export function App() {
  return (
    <View style={styles.appWrapper}>
      {/* <Header /> */}
      <PlayersNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    height: "100%",
    backgroundColor: "black",
  },
});
