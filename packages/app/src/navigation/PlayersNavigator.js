import React from "react";
import { Text, View, Dimensions, StyleSheet, Platform } from "react-native";
import PlayerDetailsScreen from "../screens/PlayerDetailsScreen";
import PlayersOverviewScreen from "../screens/PlayersOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PlayersNavigator = () => {
  const Stack = createNativeStackNavigator();

  const linking = {
    prefixes: [
      /* your linking prefixes */
    ],
    config: {
      screens: {
        PlayersOverviewScreen: "players-overview",
        PlayerDetailsScreen: "player-details/:id",
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen
          name="PlayersOverviewScreen"
          component={PlayersOverviewScreen}
        />
        <Stack.Screen
          name="PlayerDetailsScreen"
          component={PlayerDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlayersNavigator;
