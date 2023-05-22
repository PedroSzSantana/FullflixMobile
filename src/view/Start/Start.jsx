import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import background from "../../assets/images/splash1.png";
import { stylesInicio } from "./Style";
const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={stylesInicio.container}>
      <ImageBackground source={background} style={stylesInicio.background}>
        <TouchableOpacity
          style={stylesInicio.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={stylesInicio.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Start;
