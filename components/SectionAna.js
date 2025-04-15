import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function Section({text}){
    return(
    <View styles={styles.section}>
        <Text styles={styles.sectionText}>{text}</Text>
    </View>
    );
}

const styles= StyleSheet.create({
    section:{
        margin: 20,
        padding: "10rem",
        borderRadius: "2rem",
        backgroundColor: '#b07a7f',
        alignItems: 'center',
        width: "5rem",
    },

    sectionText:{
        fontSize: 20
    }
});