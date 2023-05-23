import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, TextInput } from "react-native";
import { stylesLogin } from "./Style";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../assets/api/auth";
import { initializeApp } from "firebase/app";
import { CaseErrors } from "../../assets/errors/LoginErrors";
import { CommonActions } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const cleanInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    try {
      const userCredencial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Login realizado com sucesso");
      const user = userCredencial.user;
      console.log(user);
      cleanInputs();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Filmes" }],
        })
      );
      navigation.navigate("Filmes");
    } catch (error) {
      const erro = CaseErrors(error.message);
      Alert.alert(erro);
    }
  };

  return (
    <SafeAreaView style={stylesLogin.container}>
      <Text style={stylesLogin.text}>Login</Text>
      <TextInput
        style={stylesLogin.input}
        value={email}
        testID="user"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={stylesLogin.input}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
        testID="password"
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
      />
      <TouchableOpacity onPress={() => {navigation.navigate("Cadastro"); cleanInputs()}}>
        <Text style={stylesLogin.textCadastro}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={stylesLogin.button}
        onPress={() => handleLogin()}
      >
        <Text style={stylesLogin.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
