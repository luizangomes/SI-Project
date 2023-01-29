import { StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { Text, View } from "../Themed";
import React, { useState } from 'react';
import { SymptomCard } from "../SymptomCard";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import { set } from "react-native-reanimated";

export function SymptomsFeed() {
    const [symptoms, setSymptoms] = useState([]);
    const [userMedication, setMedication] = useState('');
    const [userReport, setUserReport] = useState('');

    const [isPopUpAddSymptomsVisible, setIsPopUpAddSymptomsVisible] = useState(false);

    const handlePopUpAddSymptoms = () => setIsPopUpAddSymptomsVisible(() => !isPopUpAddSymptomsVisible);

    function handleAddSymptom() {
        const checkTextInput = () => {
            if (!userReport.trim()) {
                alert("Espaço de Relato está vazio!");
                return;
            }
            else {
                const newSymptoms = {
                    medication: userMedication,
                    report: userReport,
                    date: new Date().toLocaleDateString("pt-br"),
                    time: new Date().toLocaleTimeString("pt-br", {
                        hour: '2-digit',
                        minute: '2-digit',
                    })
                };
                setSymptoms(prevState => [...prevState, newSymptoms]);
                setMedication("");
                setUserReport("");
                handlePopUpAddSymptoms();
            }
        }
        checkTextInput();
    }

    return (
        <View style={{ height: '100%', alignContent: 'flex-end', justifyContent: "flex-end", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Text style={[styles.titleInPages]}>Histórico De{"\n"}Sintomas</Text>
            <ScrollView style={[styles.symptomsFeedScroll]}>
                {
                    symptoms.map(symptom =>
                        <SymptomCard
                            key={symptom.time}
                            medication={symptom.medication}
                            date={symptom.date}
                            time={symptom.time}
                            report={symptom.report}
                        />
                    )}
            </ScrollView>
            <View style={{
                width: '100%',
                paddingBottom: "2.5%",
                bottom: "10%",
                justifyContent: 'flex-start',
                flexDirection: "row-reverse",
                backgroundColor: "rgba(0, 0, 0, 0)",
                }
            }>
                <Button icon={<Ionicons name="checkmark-circle-outline" size={55} color="rgba(0, 255,209, 1)" />} onPress={handlePopUpAddSymptoms} type="clear" />
            </View>
            <Modal isVisible={isPopUpAddSymptomsVisible} style={{ width: '100 %', height: '100%' }}>
                <View style={styles.symptomsModalBox}>
                    <>
                        <View style={{ padding: "10%", justifyContent: 'flex-start', flexDirection: "row-reverse", flex: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            <View style={{ paddingHorizontal: "5%", width: "10%", flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                <Button color="rgba(0, 0, 0, 0)" icon={<Ionicons name="close-sharp" size={40} color="white" />} onPress={handlePopUpAddSymptoms} type="clear" />
                            </View>
                            <Text style={styles.addTitlePopUp}>Novo relato{"\n"}de sintoma</Text>
                        </View>
                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Medicamento relacionado</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setMedication(e.target.value)}
                        />
                        <View style={styles.spaceFields} />
                        <Text style={{ fontSize: 18 }}>Relato</Text>
                        <TextInput
                            style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            type="text"
                            multiline
                            numberOfLines={5}
                            onChange={e => setUserReport(e.target.value)}
                        />
                        <View style={{ width: '100%', paddingBottom: 10, flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 255, 209, 0)" }}>
                            <Button icon={<Ionicons name="checkmark-circle-outline" size={55} color="white" />} onPress={handleAddSymptom} type="clear" />
                        </View>
                    </>
                </View >
            </Modal >
        </View >
    );
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
    },
    spaceButtonX: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    spaceTitleFields: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    spaceFields: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    startContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
    },
    addTitlePopUp: {
        fontSize: 25,
        textAlign: 'center',
        paddingHorizontal: 25,
    },
    titleInPages: {
        fontSize: 45,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
    //    fontFamily: 'SeoulHangang CBL',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,

    },
    symptomsModalBox: {
        borderRadius: 20,
        margin: '0%',
        padding: 10,
        flexDirection: "column",
        width: '100%',
        height: '60%',
        backgroundColor: " rgba(77, 194, 173, 0.73)",
    },
    symptomsFeedScroll: {
        borderRadius: 20,
        margin: '5%',
        bottom: "10%",
        padding: '5%',
        width: '90%',
        height: '40%',
        backgroundColor: "rgba(77, 194, 173, 0.75)",
    },
    symptomsFeedMain: {
        borderRadius: 20,
        margin: 20,
        padding: 10,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        height: 'stretch',
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