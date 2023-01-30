import { StyleSheet, Button, TextInput } from "react-native";
import { TouchableHighlight } from "react-native-web";
import { Text, View } from "../components/Themed";
import { React, useState } from 'react';

export default function AddMedicineScreen() {

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
        <View style={[{ backgroundColor: "#4DC2AD" }, { flex: 1 }]}>
            <Text style={styles.title}>Adicionar{"\n"}Remédio</Text>

            <Text style={styles.fieldName}>Nome</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="Nome..."
                    onChange={e => setNomeRemedio(e.target.value)}
                />
            </View>

            <Text style={styles.fieldName}>Dosagem</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="..."
                    onChange={e => setDosagem(e.target.value)}
                />
            </View>

            <Text style={styles.fieldName}>Estoque</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="..."
                    onChange={e => setDosagem(e.target.value)}
                />
            </View>

            <Text style={styles.fieldName}>Data de início</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="dd/mm/aaaa"
                    onChange={e => setDataInicio(e)}
                />
            </View>

            <Text style={styles.fieldName}>Data fim</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="dd/mm/aaaa"
                    onChange={e => setDataFim(e.target.value)}
                />
            </View>

            <Text style={styles.fieldName}>Horários</Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="hh:mm"
                    onChange={e => setHorario(e.target.value)}
                />
            </View>

            <TouchableHighlight onPress={() => alert("Remédio adicionado.")}>
                <View style={styles.button}>
                    <Text style={[styles.title, { fontSize: 15, fontWeight: "", marginTop: 20, marginBottom: 20 }]}>Adicionar</Text>
                </View>
            </TouchableHighlight>


        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        marginTop: 50,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontFamily: 'SeoulHangang CBL',
    },
    fieldName: {
        fontSize: 15,
        textAlign: "left",
        marginLeft: 45,
        color: "#fff",
        fontFamily: 'SeoulHangang CBL',
    },
    field: {
        borderRadius: 20,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 5,
        marginBottom: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: " rgba(255, 255, 255, 0.65)",
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
});