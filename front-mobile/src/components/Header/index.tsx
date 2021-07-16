import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../assets/logo.png';

const Header = () => {

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.tinyLogo} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textLogo1}>Big Game</Text>
        <Text style={styles.textLogo2}>Survey</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    height: 90,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textLogo1: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: "Play_700Bold",
    color: '#ED7947',
    marginLeft: 10,
    marginRight: 5,
  },
  textLogo2: {
    fontWeight: 'bold',
    fontFamily: "Play_700Bold",
    fontSize: 18,
    color: '#FFF'
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
});

export default Header;