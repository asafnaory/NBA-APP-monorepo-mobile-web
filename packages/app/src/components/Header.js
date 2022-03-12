import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const Header = () => {
  //   const navigation = useNavigation();

  const goToPlayersHandler = () => {
    console.log('test');
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.playersButtonWrapper}>
        <TouchableOpacity
          style={styles.playersButtonWrapper}
          onPress={goToPlayersHandler}>
          <Text> Players </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 100,
    alignItems: 'center',
    width: '100%',
    height: '12%',
    backgroundColor: '#0154a3',
  },
  playersButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 50,
    backgroundColor: '#C9082A',
    borderRadius: 20,
    borderWidth: 3,
  },
});

export default Header;
