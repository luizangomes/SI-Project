import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";
import { Text, View } from "../components/Themed";
import { TouchableHighlight } from "react-native-web";
import { BottomTabNavigator } from "../navigation/BottomTabNavigator"
import React from 'react';
import Navigation from "../navigation";

const backgroundImage = require("../assets/images/background-image.jpg");

export default function StartScreen() {
    <View>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <View>
                <Text style = {styles.title}>Bem{"\n"}Estar</Text>
            </View>

            <TouchableHighlight onPress = {() => alert("Clicou!")}>
                <View style = {styles.button}>
                    <Text style = {[styles.title, {fontSize: 15, fontWeight: "", marginTop: 20, marginBottom: 20}]}>
                        Entrar
                    </Text>
                </View>
            </TouchableHighlight>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
    },
    title: {
        fontSize: 65,
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
    },
    button: {
        borderRadius: 20,
        marginRight: 120,
        marginLeft: 120,
        marginTop: 5,
        marginBottom: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: " rgba(23, 80, 70, 1)", // 0x175046
    },
    userNameText: {
        fontSize: 32.5,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
        borderRadius: 20,
        backgroundColor: " rgba(77, 194, 173, 0.73)",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: '90%', // tá ajudando agora, mas deve dar erro no futuro, este % reduz o tamanho da caixa
 
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
    symptomstext: {
        fontSize: 13,
        textAlign: "right",
        color: "#fff",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
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