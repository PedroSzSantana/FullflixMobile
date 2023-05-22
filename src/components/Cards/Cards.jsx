import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  
} from "react-native";
import { GetDetails } from "../../assets/api/api";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../../redux/DetailsSlice";
import { useEffect, useState } from "react";
import { stylesCards } from "./Style";
export const Cards = ({ films, navigation }) => {
  const [details, setDetails] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(details));
  }, [details]);

  const onPressDetail = async (e) => {
    const data = await GetDetails(e);
    setDetails(data);
    navigation.navigate("Detalhes",{
      id:e
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
