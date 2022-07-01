import { useEffect, useState, useContext } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";
import { NickContext } from "../../NickContext";
import bgImg from "../../images/fundoVermelho.jpg";

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);
  const [naipe, setNaipe] = useState(0);
  const { dados, setDados } = useContext(NickContext);
  const [restante, setRestante] =useState(52);

  const verificar = () => {
    const ganhou =
      cards &&
      cards.cards.every(
        (card) => card.suit == "DIAMONDS" || card.suit == "HEARTS"
      );

    if (cards==null ) {
      return;
    }
    else if(restante<=2){
      alert("As cartas acabaram")
    } 
    else if (ganhou) {
      alert(`🏆Parabéns ${dados}, você venceu🏆`);
    } else {
      alert("☠️ VOCÊ PERDEU ☠️                                                                     Tente novamente");
    }
  };

  const tentarNovamente = () => {
    const get = async () => {
      const deck = await getCards(deckId, 3);
      setCards(deck);
      setRestante(restante-3)
    };
    get();
  };

  useEffect(() => {
    setTimeout(() => {
      verificar();
    }, 500);
  }, [cards]);

  return (
    <ImageBackground
    source={bgImg}
    style={styles.container}
    imageStyle={{ resizeMode: "contain", transform: [{ scale: 2.3 }] }}
  >
      <View style={{ flexDirection: "row" , flex:1, alignItems:"center", justifyContent:"center"}}>
        {cards &&
          cards.cards.map((card, index) => (
            <Image key={index}
              source={{ uri: card.image }}
              style={{ width: 130, height: 195, resizeMode: "contain" }}
            ></Image>
          ))}
      </View>

      <View>
        <Text style={{fontSize:30, color:"white" , fontWeight:"bold"}}>
          Regras do jogo: Compre 3 cartas vermelhas para ganhar!
        </Text>
      </View>

      <View style={{flex:1,  justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity
          style={styles.tentarNovamente}
          onPress={tentarNovamente}
        >
          <Text>Comprar cartas</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
  );
};

export default Game;
