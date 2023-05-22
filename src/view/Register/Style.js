import { StyleSheet } from "react-native";

export const stylesRegister = StyleSheet
.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex:1,
      gap: 20,
      backgroundColor: "#000",
    },
    text: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#fff",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
      width: "60%",
      height: 40,
      borderRadius: 45,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    input: {
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: "#ffffff",
      width: "80%",
      borderRadius: 45,
      height: 50,
    },
    textCadastro: {
      textAlign: "left",
      fontSize: 12,
      fontWeight: "bold",
      color: "#fff",
    },
  });