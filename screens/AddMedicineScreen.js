import { StyleSheet, Button, TextInput } from "react-native";
import { TouchableHighlight} from "react-native-web";
import { Text, View } from "../components/Themed";
import { React, useState } from 'react';
import DatePicker from "react-date-picker";

export default function AddMedicineScreen(){

    const [lista, setLista] = useState([]);
    
    const [nomeRemedio, setNomeRemedio] = useState("");
    const [Dosagem, setDosagem] = useState("");
    const [DataInicio, setDataInicio] = useState("");
    const [DataFim, setDataFim] = useState("");
    const [Horario, setHorario] = useState("");

    return(
        <View style = {[{backgroundColor: "#4DC2AD"}, {flex: 1}]}>
            <Text style = {styles.title}>Adicionar{"\n"}Remédio</Text>

            <Text style = {styles.fieldName}>Nome</Text>
            <View style = {styles.field}>
                <TextInput
                    placeholder="Nome..."
                    onChange={e => setNomeRemedio(e.target.value)}
                />
            </View>

            <Text style = {styles.fieldName}>Dosagem</Text>
            <View style = {styles.field}>
                <TextInput
                    placeholder="..."
                    onChange={e => setDosagem(e.target.value)}
                />
            </View>

            <Text style = {styles.fieldName}>Data de início</Text>
            <View style = {styles.field}>
                <TextInput
                    placeholder="dd/mm/aaaa"
                    onChange={e => setDataInicio(e.target.value)}
                />
            </View>

            <Text style = {styles.fieldName}>Data fim</Text>
            <View style = {styles.field}>
                <DatePicker
                    onSelectedChange = {e => setDataFim(e)}
                />
            </View>

            <Text style = {styles.fieldName}>Horários</Text>
            <View style = {styles.field}>
                <TextInput
                    placeholder="..."
                    onChange={e => setHorario(e.target.value)}
                />
            </View>
            
                <TouchableHighlight onPress = {() => alert("Remédio adicionado.")}>
                    <View style = {styles.button}>
                        <Text style = {[styles.title, {fontSize: 15, fontWeight: "", marginTop: 20, marginBottom: 20}]}>Adicionar</Text>
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