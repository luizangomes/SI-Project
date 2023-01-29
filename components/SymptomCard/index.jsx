import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import React from 'react';

export function SymptomCard({ name, date, time, report }) {
    return (
            <View style={styles.cardBackground}>
                <Text style={styles.downText}>{name} {date} {time}</Text>
                <Text style={styles.downText}>{report}{"\n"}</Text>
            </View>
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
        backgroundColor: "#586B68",
    }
});