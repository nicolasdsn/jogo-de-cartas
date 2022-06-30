import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);


  const tentarNovamente = () => {
    const get = async () => {
      const deck = await getCards(deckId, 3);
      setCards(deck);
    };
    get();
  }



  useEffect(() => {
    // if (cards.length === 0) return;
    console.log(cards);
  }, [cards]);

  return (
    <ScrollView style={{flex:6}} >{cards && cards.cards.map((card) => (
      <Image source={{ uri: card.image}}style={{width:135, height:200, resizeMode:"contain"}}></Image>
    ))}

    {cards && cards.cards.map((card) => (
     <Text>{card.suit}</Text>
  ))}

     
  
   <Text>
        Regras do jogo: Se as 3 cartas renderizadas forem da cor preta, você ganha!
      </Text>
   <TouchableOpacity style={styles.tentarNovamente} onPress={tentarNovamente}>
      <Text>
        Tentar novamente
      </Text>
   </TouchableOpacity>
   
    </ScrollView>

  );
};

export default Game;
