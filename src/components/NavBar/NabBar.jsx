import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import IconHome from "../../assets/images/Icons/IconHome.png";
import IconUser from "../../assets/images/Icons/IconUser.png";
import IconCategories from "../../assets/images/Icons/IconCategories.png";
export const NavBar = ({ navigation }) => {
  return (
    <View style={stylesNavBar.container}>
      <View style={stylesNavBar.ViewIcons}>
        <Image source={IconHome} />
        <Text style={stylesNavBar.ViewText}>Home</Text>
      </View>
      <View style={stylesNavBar.ViewIcons}>
        <Image source={IconCategories} />
        <Text style={stylesNavBar.ViewText}>Categorias</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Conta")}
        style={stylesNavBar.ViewIcons}
      >
        <Image source={IconUser} />
        <Text style={stylesNavBar.ViewText}>Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export const stylesNavBar = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#ff0000",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ViewText: {
    color: "#000",
    fontWeight: 800,
  },
  ViewIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {},
});
