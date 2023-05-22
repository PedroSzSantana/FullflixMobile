import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styleDetails } from "./Style";

export const CDetails = ({ data, navigation }) => {
  return (
    <SafeAreaView>
      <Image
        style={styleDetails.img}
        source={{
          uri: `https://www.themoviedb.org/t/p/original/${data.poster_path}`,
        }}
      />

      <Text style={styleDetails.titleFilm}>{data.title}</Text>

      <Text style={styleDetails.GenericTitle}>Sinopse</Text>

      <ScrollView style={styleDetails.overviewScroll}>
        <Text style={styleDetails.text}>{data.overview}</Text>
      </ScrollView>

      <View style={styleDetails.cont}>
        <Text style={styleDetails.GenericTitle}>Nota</Text>
        <Text>{data.vote_average}</Text>
      </View>

      <View style={styleDetails.cont}>
        <Text style={styleDetails.GenericTitle}>Data de Lançamento</Text>
        <Text>{data.release_date}</Text>
      </View>

      <View style={styleDetails.cont}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Filmes")}
          style={styleDetails.button}
        >
          <Text style={{ color: "#ffff" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
