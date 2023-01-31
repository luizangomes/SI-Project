import { StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { Text, View } from "../Themed";
import React, { useState, useEffect } from 'react';
import { SymptomCard } from "../SymptomCard";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import api from "./../../services/api";
import { SelectList } from 'react-native-dropdown-select-list';
import { FontAwesome } from "@expo/vector-icons";

export function SymptomsFeed() {
    const [userMedication, setMedication] = useState('');
    const [userReport, setUserReport] = useState('');
    const [reports, setReports] = useState([]);
    const [medicationList, setMedicationList] = useState([]);

    const [isPopUpAddSymptomsVisible, setIsPopUpAddSymptomsVisible] = useState(false);

    const handlePopUpAddSymptoms = () => setIsPopUpAddSymptomsVisible(() => !isPopUpAddSymptomsVisible);

    useEffect(() => {
        api.get('reports').then((response) => {
            setReports(response.data)
        })
    }, []);

    useEffect(() => {
        api.get('medications').then((response) => {
            let medicationList = response.data.map((item) => {
                return { key: item.id, value: item.nome }
            })
            setMedicationList(medicationList)
        })
    }, []);

    // function findMedsName({ id }) {
    //     api.get('medications/:id', { id }).then((response) => {
    //         let meds = response.data.map((medications) => {
    //             return { nome: medications.nome }
    //         })
    //         setReports(meds)
    //     })
    // }

    function handleAddSymptom() {
        if (!userReport.trim()) {
            alert("Espaço de Relato está vazio!");
            return;
        }
        else {
            const newSymptoms = {
                medicationId: userMedication,
                content: userReport,
                userId: '56066fa6-c068-47f4-9dcf-54007c6b417b'
            };
            api.post('reports', newSymptoms).then((response) => {
                setReports(prevState => [...prevState, response.data]);
            })
            setMedication("");
            setUserReport("");
            handlePopUpAddSymptoms();
        }
    }

    return (
        <View style={{ height: '100%', alignContent: 'flex-end', justifyContent: "flex-end", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Text style={[styles.titleInPages]}>Histórico De{"\n"}Sintomas</Text>
            <ScrollView style={[styles.symptomsFeedScroll]}>
                {
                    reports.map(report =>
                        <SymptomCard
                            key={report.id}
                            medication={report.name}
                            date={report.createdAt.substring(0, 10)}
                            time={report.createdAt.substring(11, 16)}
                            report={report.content}
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
                        <SelectList
                            arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
                            searchicon={<FontAwesome name="search" size={12} color={'black'} />}
                            placeholder="Medicamento Relacionado"
                            setSelected={setMedication}
                            data={medicationList}
                            boxStyles={{ backgroundColor: '#fff', fontSize: 18 }}
                            inputStyles={{ backgroundColor: '#fff', fontSize: 18 }}
                            dropdownStyles={{ backgroundColor: '#fff', fontSize: 18 }}
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
        paddingTop: 30,
        paddingBottom: 40,

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