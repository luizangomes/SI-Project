import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View } from "../components/Themed";
import React from 'react';

const backgroundImage = require("../assets/images/background-image.jpg");

export default function ProfilePageScreen() {
    return (
        <View style={styles.backgroundImageContainer}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                <Text style={styles.userNameText}>Oi :)</Text>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
    },
    title: {
        fontSize: 65,
        textAlign: "center",
        color: "#1F7C6C",
        fontWeight: "bold",
       // fontFamily: 'SeoulHangang CBL',
    },
    userNameText: {
        fontSize: 32.5,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
      //  fontFamily: 'SeoulHangang CBL',
        borderRadius: 20,
        backgroundColor: " rgba(77, 194, 173, 0.73)",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: '50%', //tá ajudando agora, mas deve dar erro no futuro, este % reduz o tamanho da caixa
    },
    startContainer: {
        flex: 1,
        padding: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    middleHelloUser: {
        padding: 0.1,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    symptomsBeta: {
        borderRadius: 20,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: " rgba(77, 194, 173, 0.73)",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
