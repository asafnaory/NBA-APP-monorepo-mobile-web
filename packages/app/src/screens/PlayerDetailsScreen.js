import React  from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { getPlayerById } from "../../data/players";

const PlayerDetailsScreen = ({ route, navigate }) => {
  const { id } = route.params;
  const player = getPlayerById(id);
  const {
    name,
    team,
    hight,
    active,
    teamLogo,
    teamColor,
    faceImageUrl,
    ppg,
    position,
  } = player;

  return (
    <View
      style={[
        Platform.OS === "web" ? styles.webScreen : styles.mobileScreen,
        { backgroundColor: teamColor },
      ]}
    >
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: faceImageUrl,
        }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{team}</Text>
      <Text style={styles.text}>{hight}</Text>
      <Text style={styles.text}>{active ? "active" : "retired"}</Text>
      <Text style={styles.text}>{`Point Per Game: ${ppg}`}</Text>
      <Text style={styles.text}>{position}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: teamLogo,
        }}
        resizeMode={"cover"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webScreen: {
    height: "100vh",
    alignItems: "center",
  },
  mobileScreen: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});

export default PlayerDetailsScreen;
