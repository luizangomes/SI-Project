import { StyleSheet, Text, View, Image} from 'react-native';
import { ImageBackground } from "react-native";
import { TouchableHighlight } from 'react-native';

export default function StartScreen({navigation}) {
  const backgroundImage = require("../assets/images/background-image.jpg");
  return (
    <View style = {{flex: 1}}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <Text style = {styles.title}>Bem{"\n"}Estar</Text>
            <TouchableHighlight onPress = {() => navigation.replace("Root")}>
                <View style = {styles.button}>
                    <Text style = {styles.buttonText}>Entrar</Text>
                </View>
            </TouchableHighlight>
        </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    borderRadius: 20,
    marginRight: 120,
    marginLeft: 120,
    marginTop: "100%",
    marginBottom: "5%",
    backgroundColor: "rgba(23, 80, 70, 1)", // 0x175046
    },
    buttonText: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        color: "#FFF",
      //  fontFamily: 'SeoulHangang CBL',
    },
    title: {
        fontSize: 65,
        textAlign: "center",
        marginTop: "20%",
        color: "rgba(23, 80, 70, 1)", // 0x175046,
        fontWeight: "bold",
      //  fontFamily: 'SeoulHangang CBL',
    },
});