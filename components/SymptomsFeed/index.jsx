import { StyleSheet, Button, TextInput, Modal } from "react-native";
import { Text, View } from "../Themed";
import React, { useState } from 'react';
import { SymptomCard } from "../SymptomCard";

export function SymptomsFeed() {
    const [symptoms, setSymptoms] = useState([]);
    const [userName, setUserName] = useState();
    const [userReport, setUserReport] = useState();

    const [isPopUpAddSymptomsVisible, setIsPopUpAddSymptomsVisible] = useState(false);

    const handlePopUpAddSymptoms = () => setIsPopUpAddSymptomsVisible(() => !isPopUpAddSymptomsVisible);

    function handleAddSymptom() {
        const newSymptoms = {
            name: userName,
            report: userReport,
            date: new Date().toLocaleDateString("pt-br"),
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        };
        setSymptoms(prevState => [...prevState, newSymptoms]);
    }

    return (
        <div className='symptomsFeed'>
            <View style={styles.symptomsBeta}>
                <Text>Lista de Relatos</Text>
                {
                    symptoms.map(symptom =>
                        <SymptomCard
                            key={symptom.time}
                            name={symptom.name}
                            date={symptom.date}
                            time={symptom.time}
                            report={symptom.report}
                        />
                    )}
            </View>
            <View style={styles.symptomsBeta}>
                <>
                    <Text>Escreva aqui o relato que quer adicionar:</Text>
                    <TextInput
                        placeholder="Nome..."
                        onChange={e => setUserName(e.target.value)}
                    />
                    <TextInput
                        type="text"
                        placeholder="Relato..."
                        onChange={e => setUserReport(e.target.value)}
                    />
                    <Button onPress={handleAddSymptom}>Adicionar</Button>
                </>
            </View >
            {/*<Button title="button" onPress={handlePopUpAddSymptoms} />
             <Modal isVisible={isPopUpAddSymptomsVisible}>
                <View style={styles.symptomsBeta}>
                    <>
                        <Text>Escreva aqui o relato que quer adicionar:</Text>
                        <TextInput
                            placeholder="Nome..."
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextInput
                            type="text"
                            placeholder="Relato..."
                            onChange={e => setUserReport(e.target.value)}
                        />
                        <Button onPress={handleAddSymptom}>Adicionar</Button>
                    </>
                </View >
            </Modal> */}
        </div>
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
