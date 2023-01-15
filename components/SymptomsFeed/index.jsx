import { StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Text, View } from "../Themed";
import React, { useState } from 'react';
import { SymptomCard } from "../SymptomCard";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

export function SymptomsFeed() {
    const [symptoms, setSymptoms] = useState([]);
    const [userMedication, setMedication] = useState();
    const [userReport, setUserReport] = useState();

    const [isPopUpAddSymptomsVisible, setIsPopUpAddSymptomsVisible] = useState(false);

    const handlePopUpAddSymptoms = () => setIsPopUpAddSymptomsVisible(() => !isPopUpAddSymptomsVisible);

    function handleAddSymptom() {
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
    }

    return (
        <View style={{ height: '100%', justifyContent: "flex-end", flexDirection: "column", flex: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Text style={[styles.titleInPages, { flex: 1 }]}>Histórico De{"\n"}Sintomas</Text>
            <View style={[styles.symptomsFeedMain, { flex: 2 }]}>
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
            </View>
            <View style={{ width: '100%', flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                <Button icon={<Ionicons name="checkmark-circle-outline" size={55} color="white" />} onPress={handlePopUpAddSymptoms} type="clear" />
            </View>
            <Modal isVisible={isPopUpAddSymptomsVisible}>
                <View style={styles.symptomsBeta}>
                    <>
                        <View style={{ flexDirection: "row-reverse", flex: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            <View style={{ width: "10%", flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                <Button color="rgba(0, 0, 0, 0)" icon={<Ionicons name="close-sharp" size={40} color="white" />} onPress={handlePopUpAddSymptoms} type="clear" />
                            </View>
                            <View style={styles.spaceButtonX} />
                            <Text style={styles.addTitlePopUp}>Novo relato de{"\n"}sintoma</Text>
                        </View>
                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Medicamento relacionado</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 18 }}
                            onChange={e => setMedication(e.target.value)}
                        />
                        <View style={styles.spaceFields} />
                        <Text style={{ fontSize: 18 }}>Relato</Text>
                        <TextInput
                            style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 18 }}
                            type="text"
                            multiline
                            numberOfLines={5}
                            onChange={e => setUserReport(e.target.value)}
                        />
                        <View style={{ width: '100%', flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            <Button icon={<Ionicons name="checkmark-circle-outline" size={55} color="white" />} onPress={handleAddSymptom} type="clear" />
                        </View>
                    </>
                </View >
            </Modal>
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
        fontSize: 40,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
        flex: 1,
        padding: 30,
    },
    symptomsBeta: {
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: '95%',
        height: '55%',
        backgroundColor: " rgba(77, 194, 173, 0.73)",
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
