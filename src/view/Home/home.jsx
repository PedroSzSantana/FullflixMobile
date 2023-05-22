import { useEffect, useState } from "react";
import { _LoadFilms } from "../../assets/api/api";
import { SafeAreaView } from "react-native";
import { Cards } from "../../components/Cards/Cards";
import { Loading } from "../../components/Loading/Loading";
import { stylesHome } from "./Style";
import { NavBar } from "../../components/NavBar/NabBar";

const Home = ({ navigation }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    _LoadFilms(setFilms);
  }, []);

  return (
    <SafeAreaView style={stylesHome.container}>
      {films.length > 0 ? (
        <>
          <Cards films={films} navigation={navigation} />
          <NavBar navigation={navigation} />
        </>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default Home;
