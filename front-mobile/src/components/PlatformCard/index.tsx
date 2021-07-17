import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { GamePlatform } from "../../types";

type Props = {
  platform: GamePlatform;
  onChange: (platform: GamePlatform) => void;
  icon: string;
  activePlatform?: GamePlatform;
}

const PlatformCard = ({ platform, onChange, icon, activePlatform }: Props) => {
  const isActive = activePlatform?.includes(platform);
  const backgroundColor = isActive ? '#FAD7C8': '#FFF';
  const color = isActive ? '#ED7947' : '#9E9E9E';

  return (
    <RectButton
      style={[styles.platformCard, { backgroundColor }]}
      onPress={() => onChange(platform)}
    >
      <Icon name={icon} size={60} color={color} />
      <Text style={[styles.platformCardText, { color }]}>
        {platform === 'PLAYSTATION' ? 'PS' : platform}
      </Text>
    </RectButton>
 );
};

const styles = StyleSheet.create({
  platformCard: {
    paddingTop: 30,
    paddingBottom: 20,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  platformCardText: {
    marginTop: 40,
    color: '#9E9E9E',
    fontSize: 24,
    fontFamily: "Play_700Bold",
    textAlign: 'center'
  },
});

export default PlatformCard;