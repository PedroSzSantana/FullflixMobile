import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { stylesCards } from "./Style";

export const Cards = ({ films, navigation }) => {

  const onPressDetail = async (e) => {
    const Id = e;
    navigation.navigate("Detalhes", {
      idFilm: Id,
    });
  };
  
  return (
    <FlatList
      data={films}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPressDetail(item.id)}
          style={stylesCards.lineList}
          key={item.id}
        >
          <Image
            style={stylesCards.image}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/${item.poster_path}`,
            }}
          />
          <Text style={stylesCards.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
