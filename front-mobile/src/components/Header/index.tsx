import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import logo from '../../assets/logo.png';

const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  } 

  return (
    <TouchableWithoutFeedback style={styles.header} onPress={handleOnPress}>
      <Image source={logo} style={styles.tinyLogo} />
        <Text style={styles.textLogo1}>Big Game</Text>
        <Text style={styles.textLogo2}>Survey</Text>
    </TouchableWithoutFeedback>
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