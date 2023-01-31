import { StyleSheet, TextInput} from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { Text, View } from "../Themed";
import React, { useState } from 'react';
import { MedicineCard } from "../MedicineCard";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import api from "./../../services/api";

export function MedicineFeed() {
    const [medicine, setMedicine] = useState([]);
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [unidade, setUnidade] = useState('');
    const [estoque, setEstoque] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [horario, setHorario] = useState("");

    // Opções para o menu dropdown.
    const [opcoes, setOpcoes] = useState([
        {label: "comprimidos", value: "comprimidos"},
        {label: "gotas", value: "gotas"},
    ]);
    const [aberto, setAberto] = useState(false);

    const [isPopUpAddMedicineVisible, setIsPopUpAddMedicineVisible] = useState(false);

    const handlePopUpAddMedicine = () => setIsPopUpAddMedicineVisible(() => !isPopUpAddMedicineVisible);

    useEffect(() => {
        api.get('medications').then((response) => {
            setMedicine(response.data)
        })
    }, []);

    function handleAddMed() {
        const checkTextInput = () => {
            if (!dosagem.trim() || !nomeRemedio.trim() || !dataInicio.trim() || !dataFim.trim() || !horario.trim() || !dosagem.trim() || !unidade.trim()) {
                alert("Preencha todos os campos.");
                return;
            }
            else {
                const newMedicine = {
                    userId: '56066fa6-c068-47f4-9dcf-54007c6b417b',
                    nome: nomeRemedio,
                    tipo: unidade,
                    quantity: dosagem,
                    estoque: estoque,
                    dataInicio: dataInicio,
                    dataFim: dataFim,
                    horario: horario,
                };
                /*
                    id  String  @id @default(uuid()) @unique
                    nome     String
                    tipo String
                    quantity Int
                    estoque Int
                    dataInicio String
                    dataFim String
                    horario String[]
                    reports Report[]
                */
                /*
                const newMedicine = {
                    novoNome: nomeRemedio,
                    novaDosagem: dosagem,
                    novaUnidade: unidade,
                    novoEstoque: estoque,
                    novaDataInic: dataInicio,
                    novaDataFim: dataFim,
                    novoHorario: horario,
                };
                */
                
                api.post('medications', newMedicine).then((response) => {
                    setMedicine(prevState => [...prevState, response.data]);
                })

                setMedicine(prevState => [...prevState, newMedicine]);
                setNomeRemedio("");
                setDosagem("");
                setUnidade("");
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
                            key={med.id}
                            nome={med.nome}
                            dose={med.quantity}
                            unidade = {med.tipo}
                            estoque={med.estoque}
                            dataInicio={med.dataInicio}
                            dataFim={med.dataFim}
                            horario={med.horario}
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
                        <View style = {{flexDirection: "row", backgroundColor: "rgba(0,0,0,0)"}}>
                            <View style = {{flex: 0.6, backgroundColor: "rgba(0,0,0,0)"}}>
                                <TextInput
                                    type="text"
                                    style={{ borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.6)", fontSize: 20, height: 50}}
                                    onChange={e => setEstoque(e.target.value)}
                                    />
                            </View>
                            <View style = {{flex: 0.4, backgroundColor: "rgba(0,0,0,0)",}}>
                                <DropDownPicker
                                    placeholder = "Unidade de medida"
                                    value = {unidade}
                                    open = {aberto}
                                    items = {opcoes}
                                    setValue = {setUnidade}
                                    setOpen = {setAberto}
                                    setItems = {setOpcoes}
                                    />
                            </View>
                        </View>

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