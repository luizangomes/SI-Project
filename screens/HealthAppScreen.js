import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";
import { Text, View } from "../components/Themed";

const backgroundImage = require("../assets/images/background-image.jpg");

export default function HealthAppScreen() {
    return (
        <View style={styles.backgroundImageContainer}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Bem</Text>
                <Text style={styles.title}>Estar</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="#FFF"
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
    },
    title: {
        fontSize: 50,
        color: "#1F7C6C",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
});
