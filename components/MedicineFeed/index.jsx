/* Tutorial para o manipulador de datas
    https://www.atomlab.dev/tutorials/react-native-modal-datetime-picker
*/

import { StyleSheet, TextInput} from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { Text, View } from "../Themed";
import React, { useState } from 'react';
import { MedicineCard } from "../MedicineCard";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export function MedicineFeed() {
    const [medicine, setMedicine] = useState([]);
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [estoque, setEstoque] = useState('');
    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);
    const [horario, setHorario] = useState("");

    // Funções para manipular o seletor de datas.
    const [dataInicioVisivel, setDataInicioVisivel] = useState(false);
    const [dataFimVisivel, setDataFimVisivel] = useState(false);

    const showDataInicio = () => {
        setDataInicioVisivel(true);
    };

    const hideDataInicio = () => {
        setDataInicioVisivel(false);
    };

    const showDataFim = () => {
        setDataFimVisivel(true);
    };

    const hideDataFim = () => {
        setDataFimVisivel(false);
    };

    const handleDataInicio = (data) => {
        setDataInicio(data);
        hideDataInicio();
    };

    const handleDataFim = (data) => {
        setDataFim(data);
        hideDataFim();
    };


    const [isPopUpAddMedicineVisible, setIsPopUpAddMedicineVisible] = useState(false);

    const handlePopUpAddMedicine = () => setIsPopUpAddMedicineVisible(() => !isPopUpAddMedicineVisible);

    function handleAddMed() {
        const checkTextInput = () => {
            if (!dosagem.trim() || !nomeRemedio.trim() || !dataInicio.trim() || !dataFim.trim() || !horario.trim()) {
                alert("Preencha todos os campos.");
                return;
            }
            else {
                const newMedicine = {
                    novoNome: nomeRemedio,
                    novaDosagem: dosagem,
                    novoEstoque: estoque,
                    novaDataInic: dataInicio,
                    novaDataFim: dataFim,
                    novoHorario: horario,
                };
                
                setMedicine(prevState => [...prevState, newMedicine]);
                setNomeRemedio("");
                setDosagem("");
                setEstoque("");
                setDataInicio("");
                setDataFim("");
                setHorario("");
                handlePopUpAddMedicine();
            }
        }
        checkTextInput();
    }

    return (
        <View style={{ height: '100%', alignContent: 'flex-end', justifyContent: "flex-end", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Text style={[styles.titleInPages]}>Histórico De{"\n"}Remédios</Text>
            <ScrollView style={[styles.medicineFeedScroll]}>
                {
                    medicine.map(med =>
                        <MedicineCard
                            key={med.novoNome}
                            nome={med.novoNome}
                            dose={med.novaDosagem}
                            estoque={med.novoEstoque}
                            dataInicio={med.novaDataInic}
                            dataFim={med.novaDataFim}
                            horario={med.novoHorario}
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
                <Button icon={<Ionicons name="checkmark-circle-outline" size={55} color="rgba(0, 255,209, 1)" />} onPress={handlePopUpAddMedicine} type="clear" />
            </View>
            <Modal isVisible={isPopUpAddMedicineVisible} style={{ width: '100 %', height: '100%' }}>
                <View style={styles.medicineModalBox}>
                        <View style={{ padding: "0%", marginTop: "5%", flexDirection: "row-reverse", flex: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            <View style={{ paddingHorizontal: "0%", marginTop: "8%", width: "10%", flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                <Button color="rgba(0, 0, 0, 0)" icon={<Ionicons name="close-sharp" size={40} color="white" />} onPress={handlePopUpAddMedicine} type="clear" />
                            </View>
                            <Text style={styles.addTitlePopUp}>Adicionar remédio</Text>
                        </View>
                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Nome do remédio</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setNomeRemedio(e.target.value)}
                        />

                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Dosagem</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setDosagem(e.target.value)}
                        />

                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Estoque</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setEstoque(e.target.value)}
                        />                        

                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Data de início</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setDataInicio(e.target.value)}
                        />
                        

                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Data fim</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setDataFim(e.target.value)}
                        />

                        <View style={styles.spaceTitleFields} />
                        <Text style={{ fontSize: 18 }}>Horários</Text>
                        <TextInput
                            type="text"
                            style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}
                            onChange={e => setHorario(e.target.value)}
                        />
                        
                        <View style={{ width: '100%', paddingBottom: 10, flex: 1, flexDirection: "row-reverse", backgroundColor: "rgba(0, 255, 209, 0)" }}>
                            <Button icon={<Ionicons name="checkmark-circle-outline" size={50} color="white" />} onPress={handleAddMed} type="clear" />
                        </View>
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
        marginTop: "5%",
        fontSize: 45,
        fontWeight: "bold",
        textAlign: 'center',
        paddingHorizontal: 0,
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
    medicineModalBox: {
        borderRadius: 20,
        margin: '0%',
        padding: 10,
        flexDirection: "column",
        width: '100%',
        height: '100%',
        backgroundColor: "#4DC2AD",
    },
    medicineFeedScroll: {
        borderRadius: 20,
        margin: '5%',
        bottom: "10%",
        padding: '5%',
        width: '90%',
        height: '40%',
        backgroundColor: "rgba(77, 194, 173, 0.75)",
    },
    medicineFeedMain: {
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

/*
                                                <Text style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20 }}>
                            {dataInicio ? dataInicio.toLocaleDataString("pt-br") : "Nenhuma data escolhida."}
                        </Text>
                        <Button title = "Escolha uma data" onPress={showDataInicio} type = "clear"/>
                        <DateTimePickerModal
                            date={dataInicio}
                            isVisible={dataInicioVisivel}
                            mode="date"
                            onConfirm={handleDataInicio}
                            onCancel={hideDataInicio}
                        />
*/