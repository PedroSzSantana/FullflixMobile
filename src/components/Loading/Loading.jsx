import { Image, View } from "react-native";
import Gif from "../../assets/images/GifLoad.gif";
import { stylesLoading } from "./Style";
export const Loading = () => {
  return (
    <View style={stylesLoading.container}>
      <Image style={stylesLoading.img} source={Gif} />
    </View>
  );
};
