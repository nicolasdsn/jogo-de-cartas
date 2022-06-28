import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState([]);
  const [idDeck, setIdDeck] = useState(null);

  const getDeckId = async () => {
    setLoading(true);
    const data = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const getdata = await data.json();
    setIdDeck(getdata.deck_id);
    setLoading(false);
  };

  useEffect(() => {
    if (idDeck === null) return;
    console.log(idDeck);
  }, [idDeck]);

  useEffect(() => {
    getDeckId();
  }, []);

  const inciarPartida = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=7`;
    const fetchDeck = await fetch(url);
    const getDeck = await fetchDeck.json();
    console.log(getDeck);
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
});
