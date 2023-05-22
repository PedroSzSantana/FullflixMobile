import { CDetails } from "../../components/Details/CDetails";
import { SafeAreaView, StyleSheet } from "react-native";
import { Loading } from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

const Details = ({navigation}) => {
  const data = useSelector((state) => state.data.details);
  return (
    <SafeAreaView style={styles.container}>
      {data ? <CDetails data={data} navigation={navigation} /> : <Loading />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Details;
