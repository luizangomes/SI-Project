import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import React from 'react';

export function SymptomCard({ medication, date, time, report }) {
    return (
        <div>
            <View style={styles.cardBackground}>
                <Text style={styles.upText}>{medication} {date} {time}</Text>
                <Text style={styles.downText}>{report}{"\n"}</Text>
            </View>
        </div>
    );
}

const styles = StyleSheet.create({
    upText: {
        textAlign: 'right',
        fontSize: 15,
    },

    downText: {
        textAlign: 'left',
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