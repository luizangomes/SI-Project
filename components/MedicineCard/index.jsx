import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import React from 'react';

// Cartão mostrado na tela de remédios.
export function MedicineCard({ nome, dose, estoque, dataInicio, dataFim, horario }) {
    return (
        <div>
            <View style={styles.cardBackground}>
                <Text style={styles.downText}>
                    {nome}{" | "}{dose}{" | "}{estoque}{" comprimidos\nInicio: "}{dataInicio}{" | "}
                    {"Fim: "}{dataFim}{" | "}{"Horário: "}{horario}{"."}
                </Text>
            </View>
        </div>
    );
}

// Cartão mostrado no feed da home.
export function MiniMedicineCard({nome, dose, estoque}){
    return (
        <div>
            <View style={styles.cardBackground}>
                <Text style={styles.downText}>
                    {nome}{" | "}{dose}{" | "}{estoque}{" comprimidos"}
                </Text>
            </View>
        </div>
    );
}

const styles = StyleSheet.create({
    upText: {
        fontSize: 20,
    },

    downText: {
        fontSize: 15,
    },

    cardBackground: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
    }
});