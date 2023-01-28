import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";
import { Text, View } from "../components/Themed";
import React from 'react';

const backgroundImage = require("../assets/images/background-image.jpg");

export default function HomeScreen() {
    return (
        <>
            <View style={styles.backgroundImageContainer}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                    <View style={{ flexDirection: "column", flex: 0.2, backgroundColor: "rgba(0, 0, 0, 0.35)", }}>
                        <View style={[styles.startContainer, { flexDirection: "row", flex: 1 }]}>
                            <Text style={[styles.title, { flex: 1 }]}>Bem{"\n"}Estar</Text>
                            <View style={[styles.middleHelloUser, { flex: 2 }]}></View>
                            <Text style={[styles.userNameText, { flex: 3 }]}>
                                Olá,{"\n"}Usuário
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", flex: 0.4, backgroundColor: "rgba(0, 0, 0, 0.35)", }}>
                        <View style = {[styles.symptomsBeta, {height: '80%'}]}>
                            <Text style = {styles.aba}>Sintomas</Text>
                            <View style = {[
                                    styles.symptomsBeta, {
                                        height: '25%',
                                        width: '90%',
                                        marginLeft: 10,
                                        backgroundColor: "#586B68"
                                }
                                ]}>
                                    <Text style = {styles.symptomstext}>
                                        Registro do Dia 11/12/2022 10:49
                                    </Text>
                                    <Text style = {[styles.symptomstext, {
                                        fontWeight: "normal",
                                        textAlign: "left"}]}>
                                        Febre, Dor de Cabeça, Dor de Garganta
                                    </Text>
                            </View>

                            <View style = {[
                                    styles.symptomsBeta, {
                                        height: '25%',
                                        width: '90%',
                                        marginLeft: 10,
                                        backgroundColor: "#586B68"
                                    }
                                ]}>
                                   <Text style = {styles.symptomstext}>
                                        Registro do Dia 10/12/2022 11:11
                                    </Text>
                                    <Text style = {[styles.symptomstext, {
                                        fontWeight: "normal",
                                        textAlign: "left"}]}>
                                        Febre, Dor de Cabeça, Dor de Garganta, Dor de Barriga
                                    </Text> 
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: "column", flex: 0.4, backgroundColor: "rgba(0, 0, 0, 0.35)", }}>
                        <View style = {[styles.symptomsBeta, {height: '80%'}]}>
                            <Text style = {styles.aba}>Remédios</Text>
                        </View>
                    </View>

                </ImageBackground >
            </View >
        </>        
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
        fontFamily: 'SeoulHangang CBL',
    },
    aba: {
        fontSize: 25,
        textAlign: "right",
        color: "#3B4846",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
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
