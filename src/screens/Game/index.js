import { View, Text } from "react-native";

const Game = ({ route }) => {
  const { name, idade } = route.params;
  return (
    <View>
      <Text>
        Olá, {name}. Você tem {idade} anos
      </Text>
    </View>
  );
};

export default Game;
