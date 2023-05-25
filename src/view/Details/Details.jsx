import { CDetails } from "../../components/Details/CDetails";
import { SafeAreaView, StyleSheet } from "react-native";
import { Loading } from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { GetDetails } from "../../assets/api/api";

const Details = ({ navigation, route }) => {
  const [idFilm, setIdFilm] = useState(route.params.idFilm);
  const [data, setData] = useState();
  console.log("ID Detail -------------", idFilm);

  const SetDatails = async () => {
    const dados = await GetDetails(idFilm);
    setData(dados);
  };
  useEffect(() => {
    SetDatails();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {data ? <CDetails data={data} navigation={navigation} /> : <Loading />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Details;
