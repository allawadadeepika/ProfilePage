import React from 'react';
import { View, StyleSheet } from 'react-native';
import Placeholders from './placeholders';

export default function InputFields() {
    return (
        <View style={styles.container}>
            <Placeholders name="Full name: " placeholder="Enter your name" />
            <Placeholders name="Email: " placeholder="Enter your email" />
            <Placeholders name="Qualification: " placeholder="Enter your qualification" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingTop: 20,        
    },
});
