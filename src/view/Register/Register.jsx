import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, TextInput } from "react-native";
import { stylesRegister } from "./Style";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../../assets/auth/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { CaseErrors } from "../../assets/errors/LoginErrors";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setconfirmePassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const cleanInputs = () => {
    setEmail("");
    setPassword("");
    setconfirmePassword("");
  };
  const handleRegister = async () => {
    if (password === confirmePassword) {
      try {
        const userCredencial = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        Alert.alert("Conta criada com sucesso");
        const user = userCredencial.user;
        console.log(user);
        cleanInputs();
        navigation.navigate("Login");
      } catch (error) {
          const erro = CaseErrors(error.message);
          Alert.alert(erro);
      }
    } else {
      return Alert.alert("As senhas não conferem");
    }
  };
  return (
    <SafeAreaView style={stylesRegister.container}>
      <Text style={stylesRegister.text}>Cadastro</Text>
      <TextInput
        style={stylesRegister.input}
        onChangeText={(e) => setEmail(e)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry={true}
        style={stylesRegister.input}
        onChangeText={(e) => setPassword(e)}
        value={password}
        placeholder="Senha"
      />
      <TextInput
        style={stylesRegister.input}
        onChangeText={(e) => setconfirmePassword(e)}
        secureTextEntry={true}
        value={confirmePassword}
        placeholder="Confirme a senha"
      />
      <TouchableOpacity
        style={stylesRegister.button}
        onPress={() => handleRegister()}
      >
        <Text style={stylesRegister.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
