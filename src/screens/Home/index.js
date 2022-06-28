import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, Button } from "react-native";
import { getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState([]);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (idDeck === null) return;
    console.log(idDeck);
  }, [idDeck]);

  const inciarPartida = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=7`;
    const fetchDeck = await fetch(url);
    const getDeck = await fetchDeck.json();
    console.log(getDeck);
    navigation.navigate("Game", {
      name: "João Felipe",
      idade: 31,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Cartas</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Image
            // source={require("./src/images/baralho.png")}
            // source={baralhoImg}
            source={{
              uri: "https://w7.pngwing.com/pngs/570/765/png-transparent-modiano-playing-card-poker-card-game-trophy-others-retail-rectangle-playing-cards.png",
            }}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
          <Button title="Iniciar Partida" onPress={inciarPartida} />
        </>
      )}
    </View>
  );
};

export default Home;
