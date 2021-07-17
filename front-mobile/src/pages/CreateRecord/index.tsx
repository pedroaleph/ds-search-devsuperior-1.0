import React, { useEffect, useState } from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PlatformCard from "../../components/PlatformCard";
import { Game, GamePlatform, UserData } from "../../types";
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";
import { RectButton } from "react-native-gesture-handler";

const placeholder = {
  label: 'Selecione o game',
  value: null,
}

const BASE_URL = "http://192.168.0.108:8080";

const mapSelectValue  = (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id
  }))
}

const CreateRecord = () => {
  const [userData, setUserData] = useState<UserData>({ name: '', age: ''});
  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>();

  const handleChangePlatform = (selected: GamePlatform) => {
    setPlatform(selected);
    const gamesByPlatform = allGames.filter(
      game => game.platform.includes(selected)
    )
    setFilteredGames(gamesByPlatform);
  }

  const handleSubmit = () => {
    const payload = {
      ...userData,
      game_id: selectedGame
    }
    axios.post(`${BASE_URL}/records`, payload)
      .then(() => {
        Alert.alert('Dados salvos com sucesso!');
        setUserData({ name: '', age: ''});
        setSelectedGame('');
        setPlatform(undefined);
      })
      .catch(() => {
        Alert.alert('Erro os salvar dados!');
      })
  } 

  useEffect(() => {
    axios.get(`${BASE_URL}/games`)
      .then(res => {
        const selectValues = mapSelectValue(res.data);
        setAllGames(selectValues);
      })
      .catch(() => {
        Alert.alert('Erro os listar os jogos!');
      })
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Nome"
        placeholderTextColor="#9E9E9E"
        value={userData.name}
        onChangeText={name => setUserData({...userData, name })}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.inputText}
        placeholder="Idade"
        placeholderTextColor="#9E9E9E"
        maxLength={3}
        value={userData.age}
        onChangeText={age => setUserData({...userData, age })}
      />
      <View style={styles.platformContainer}>
        <PlatformCard 
          platform='PC'
          onChange={handleChangePlatform}
          icon="laptop"
          activePlatform={platform}
        />
        <PlatformCard
          platform='XBOX'
          onChange={handleChangePlatform}
          icon="xbox"
          activePlatform={platform}
        />
        <PlatformCard
          platform='PLAYSTATION'
          onChange={handleChangePlatform}
          icon="playstation"
          activePlatform={platform}
        />
      </View>
      <RNPickerSelect
        placeholder={placeholder}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
        Icon={() => {
          return <Icon name="chevron-down" color="#9E9E9E" size={25}/>
        }}
        value={selectedGame}
        items={filteredGames ? filteredGames : allGames}
        onValueChange={value => {
          value ? setSelectedGame(value) : null;
        }}
        disabled={!filteredGames}
      />
      <View style={styles.footer}>
        <RectButton
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>SALVAR</Text>
        </RectButton>
      </View>
    </View>
 );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    right: 12,
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingBottom: 50
  },
  inputText: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    fontFamily: "Play_700Bold",
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21
  },
  platformContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: '15%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: "Play_700Bold",
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34',
  }
});

export default CreateRecord;