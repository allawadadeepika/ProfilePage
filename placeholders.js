import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Placeholders({ name, placeholder }) {
    return (
            <View style={styles.labelRow}>
                <Text style={styles.label}>{name}</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={placeholder} 
                />
            </View>
    );
}

const styles = StyleSheet.create({
    labelRow: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
        width: '120%',
    },
    
    label: {
        minWidth: 120,  
        flexShrink: 1,  
        fontSize: 16,   
        color: 'black',
    },
    textInput: {
        flex: 1,
        fontSize: 16,   
        color: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginLeft: 10, 
    },
});
