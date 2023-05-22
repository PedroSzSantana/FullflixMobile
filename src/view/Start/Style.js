import { StyleSheet } from "react-native";

export const stylesInicio = StyleSheet.create({
    container: {
      flex:1
    },
    background: {
      flex:1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      marginTop: "90%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 45,
      backgroundColor: "red",
      height: 40,
      width: "70%",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffff",
    },
  });