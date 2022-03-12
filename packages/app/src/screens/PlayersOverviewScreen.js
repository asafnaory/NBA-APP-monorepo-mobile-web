import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { getAllPlayers } from "../../data/players";
import LinkButton from "../components/UI/LinkButton";
import Card from "../components/UI/Card";

const PlayersOverviewScreen = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(getAllPlayers());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <LinkButton
        to={{ screen: "PlayerDetailsScreen", params: { id: item.id } }}
      >
        <Card style={styles.cardStyles}>
          <ImageBackground
            style={styles.image}
            imageStyle={styles.image}
            source={{
              uri: item.imageUrl,
            }}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.baseText}>{item.name}</Text>
              <Text style={styles.baseText}>{item.team}</Text>
              <Text style={styles.baseText}>{item.position}</Text>
            </View>
          </ImageBackground>
        </Card>
      </LinkButton>
    );
  };

  return (
    <View
      style={[
        styles.screenWrapper,
        Platform.OS === "web" && { height: "100vh" },
      ]}
    >
      <FlatList
        contentContainerStyle={styles.list}
        data={players}
        renderItem={renderItem}
        keyExtractor={(player) => player.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: "black",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardStyles: {
    margin: 20,
    height: 350,
    width: 300,
    backgroundColor: "black",
    alignItems: "center",
    borderColor: "#C9082A",
    borderWidth: 5,
  },
  image: {
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textWrapper: {
    backgroundColor: "#0154a3",
    alignItems: "center",
    marginTop: 250,
    flexDirection: "column",
  },
  baseText: {
    fontSize: 16,
    fontFamily: "Cochin",
    color: "white",
  },
});

export default PlayersOverviewScreen;
